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

## REGLA #2: CAPTURA DE DATOS (OBLIGATORIO)
- En tu PRIMER mensaje pide: Nombre, Correo electrónico y Teléfono. Los tres juntos.
- Di algo como: "Para ayudarte necesito tu nombre, correo y teléfono 😊"
- NO avances a dar información del evento hasta que te den al menos nombre + 1 dato de contacto (email o teléfono).
- Si te dan solo el nombre, insiste amablemente en el correo y teléfono antes de continuar.

## ESTRATEGIA DE VENTA
1. Saluda y pide los 3 datos: nombre, correo y teléfono
2. Una vez tengas los datos, pregunta si viene como asistente o sponsor
3. Si asistente → recomienda VIP ($27) y da el link de pago inmediatamente
4. Si sponsor → conecta con Claudia Rivera vía WhatsApp
5. Cierra siempre con una acción: link de pago o WhatsApp de Claudia

## PROHIBIDO
- Dar información del evento sin antes tener los datos de contacto
- Respuestas largas
- Listar toda la agenda completa (solo si preguntan)
- Inventar información`;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages, pageSource } = await req.json();

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 250,
      system: SYSTEM_PROMPT + `\n\nEl usuario está navegando desde: ${pageSource || "página principal"}`,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    // After getting a response, check if we have enough data to extract lead
    const allUserText = messages
      .filter((m: { role: string }) => m.role === "user")
      .map((m: { content: string }) => m.content)
      .join(" ");

    const hasPhone = /[\d+\-()]{7,}/.test(allUserText.replace(/\s/g, ""));
    const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(allUserText);

    if (hasPhone || hasEmail) {
      // Use Claude to extract structured data cleanly
      extractAndSaveLead(messages, pageSource || "principal").catch(() => {});
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

async function extractAndSaveLead(messages: { role: string; content: string }[], pageSource: string) {
  try {
    // Build conversation transcript
    const transcript = messages
      .map((m) => `${m.role === "user" ? "USUARIO" : "SOFIA"}: ${m.content}`)
      .join("\n");

    // Use Claude to extract clean structured data
    const extraction = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 250,
      system: `Extrae datos de contacto de esta conversación. Responde SOLO con JSON válido, sin texto adicional. Formato exacto:
{"nombre":"","email":"","telefono":"","tipo":"asistente-free","resumen":""}

Reglas:
- nombre: Solo el nombre de la persona (ej: "Juan Pérez"). NO incluir emails, teléfonos ni otra info.
- email: Solo el email (ej: "juan@gmail.com"). Dejar vacío "" si no hay.
- telefono: Solo números y + (ej: "+573001234567"). Dejar vacío "" si no hay.
- tipo: "sponsor" si quiere ser sponsor, "asistente-vip" si mencionó VIP/Platinum/Advance, "asistente-free" si no especificó.
- resumen: Máximo 100 caracteres describiendo el interés de la persona.`,
      messages: [{ role: "user", content: transcript }],
    });

    const jsonText = extraction.content[0].type === "text" ? extraction.content[0].text : "{}";

    // Parse the JSON response
    const data = JSON.parse(jsonText.trim());

    // Only save if we have at least a name
    if (!data.nombre || data.nombre === "") return;

    const formType = data.tipo === "sponsor" ? "sponsor" : data.tipo || "asistente-free";

    await fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify({
        form_type: formType,
        source: `chat-sofia-${pageSource}`,
        nombre: data.nombre || "",
        email: data.email || "",
        telefono: data.telefono || "",
        participacion: data.resumen || "[Chat Sofía]",
      }),
    });
  } catch {
    // Silent fail for extraction errors
  }
}
