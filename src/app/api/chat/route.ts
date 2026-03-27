import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbx5Y5LIKu60jcAaCsotwuFg7kgpXQKmD_36XSBqQd8tfDdSSYb46LVLLotC-buE9P4B7A/exec";

const SYSTEM_PROMPT = `Eres Sofía, asistente de ventas de la Convención Inmobiliaria 2026. Español siempre.

## REGLA #1: RESPUESTAS CORTAS
- Máximo 2-3 líneas por respuesta. NUNCA más de 4 líneas.
- Ve directo al punto. Sin rodeos.
- Un emoji máximo por mensaje.
- Tu objetivo es VENDER entradas y conectar sponsors con Claudia Rivera.

## DATOS CLAVE
- Barranquilla: Miércoles 22 Abril — Hotel Estelar
- Medellín: Viernes 24 Abril — Hotel Estelar
- Dos jornadas: Mañana (8:30AM-3PM) y Tarde (3-7PM), mismo programa
- Organizadora: Claudia Rivera, Realtor Internacional y CEO

## TICKETS (¡SIEMPRE OFRECE EL LINK DE PAGO!)
- FREE ($0): Acceso al evento, conferencias y networking → Registro en https://convencioninmobiliariausa.com
- VIP Lunch ($27): Todo + Lunch privado con inversionistas 🥂 → https://checkout.bold.co/payment/LNK_668PMLKYFP
- PLATINUM ($50): Todo + Magazine Digital con contactos de proyectos → https://checkout.bold.co/payment/LNK_TXYZG2V7CV
- ADVANCE A.I ($100): Todo + ECard, Workshop IA, Kit de Marketing

## SPONSORS
- Para ser sponsor, habla directo con Claudia Rivera por WhatsApp: https://wa.me/13053050880
- Paquetes: Silver, Gold, Platinum. Precios personalizados.
- Info completa: https://convencioninmobiliariausa.com/sponsors

## ESTRATEGIA DE VENTA
1. Saluda y pregunta el nombre (corto)
2. Pregunta si viene como asistente o sponsor
3. Si asistente → recomienda VIP ($27) y da el link de pago inmediatamente
4. Si sponsor → conecta con Claudia Rivera vía WhatsApp
5. Pide teléfono o email para enviarle info
6. Cierra siempre con una acción: link de pago o WhatsApp de Claudia

## PROHIBIDO
- Respuestas largas
- Listar toda la agenda completa (solo si preguntan)
- Inventar información`;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages, pageSource } = await req.json();

    const response = await client.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 200,
      system: SYSTEM_PROMPT + `\n\nEl usuario está navegando desde: ${pageSource || "página principal"}`,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Only save to Sheets when we detect contact info (name + phone/email)
    const allUserMessages = messages
      .filter((m: { role: string }) => m.role === "user")
      .map((m: { content: string }) => m.content)
      .join(" ");

    const hasPhone = /\d{7,}/.test(allUserMessages);
    const hasEmail = /@/.test(allUserMessages);
    const hasContactInfo = hasPhone || hasEmail;
    const messageCount = messages.length;

    // Save only when contact info detected OR every 10 messages as summary
    if (hasContactInfo || messageCount === 10) {
      const summary = buildLeadSummary(messages, pageSource || "principal");
      saveToSheets(summary).catch(() => {});
    }

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { message: "Lo siento, hubo un error. Puedes contactarnos por WhatsApp: https://wa.me/17542804030" },
      { status: 500 }
    );
  }
}

interface LeadData {
  form_type: string;
  source: string;
  nombre: string;
  email: string;
  telefono: string;
  participacion: string;
}

function buildLeadSummary(messages: { role: string; content: string }[], pageSource: string): LeadData {
  const userMessages = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content);
  const allText = userMessages.join(" ");

  // Extract name (first user message usually has it)
  const nombre = userMessages[0]?.substring(0, 80) || "Sin nombre";

  // Extract phone
  const phoneMatch = allText.match(/[\d+\-().\s]{7,20}/);
  const telefono = phoneMatch ? phoneMatch[0].trim() : "";

  // Extract email
  const emailMatch = allText.match(/[\w.-]+@[\w.-]+\.\w+/);
  const email = emailMatch ? emailMatch[0] : "";

  // Determine interest type
  let tipo = "asistente-free";
  const lowerText = allText.toLowerCase();
  if (lowerText.includes("sponsor")) tipo = "sponsor";
  else if (lowerText.includes("vip") || lowerText.includes("lunch")) tipo = "asistente-vip";
  else if (lowerText.includes("platinum") || lowerText.includes("50")) tipo = "asistente-vip";
  else if (lowerText.includes("advance") || lowerText.includes("100") || lowerText.includes("a.i")) tipo = "asistente-vip";

  // Build short summary (max 250 chars)
  const resumen = userMessages
    .slice(0, 5)
    .map((m) => m.substring(0, 60))
    .join(" → ")
    .substring(0, 250);

  return {
    form_type: tipo === "sponsor" ? "sponsor" : tipo,
    source: `chat-sofia-${pageSource}`,
    nombre,
    email,
    telefono,
    participacion: `[Chat Sofía] ${resumen}`,
  };
}

async function saveToSheets(data: LeadData) {
  try {
    await fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch {
    // Silent fail
  }
}
