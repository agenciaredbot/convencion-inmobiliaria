import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

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
    const body = await req.json();
    const { messages, pageSource, leadSaved } = body;

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

    // Only save lead ONCE per conversation
    if (!leadSaved) {
      const allUserText = messages
        .filter((m: { role: string }) => m.role === "user")
        .map((m: { content: string }) => m.content)
        .join(" ");

      const hasPhone = /\d{7,}/.test(allUserText.replace(/[\s\-().+]/g, ""));
      const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(allUserText);

      if (hasPhone || hasEmail) {
        extractAndSaveLead(messages, pageSource || "principal").catch(() => {});
        return NextResponse.json({ message: assistantMessage, leadSaved: true });
      }
    }

    return NextResponse.json({ message: assistantMessage, leadSaved: leadSaved || false });
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
      system: `Extrae datos de contacto de la conversación. Responde UNICAMENTE con un JSON válido. Nada más.

{"nombre":"","email":"","telefono":"","tipo":"","resumen":""}

REGLAS ESTRICTAS:
- nombre: SOLO el nombre propio (ej: "Juan Pérez"). PROHIBIDO incluir emails, teléfonos, o cualquier otro dato aquí.
- email: SOLO la dirección de email (ej: "juan@gmail.com"). Si no hay email, pon "".
- telefono: SOLO dígitos y + (ej: "3001234567"). Sin espacios, paréntesis ni guiones. Si no hay, pon "".
- tipo: Uno de estos valores exactos: "sponsor", "asistente-vip", "asistente-free"
- resumen: Máximo 80 caracteres. Qué busca la persona.

EJEMPLO CORRECTO:
{"nombre":"Carlos López","email":"carlos@gmail.com","telefono":"3015557890","tipo":"asistente-free","resumen":"Interesado en asistir al evento en Barranquilla"}

EJEMPLO INCORRECTO (NO hagas esto):
{"nombre":"Carlos López, carlos@gmail.com y 3015557890","email":"","telefono":"","tipo":"","resumen":""}`,
      messages: [{ role: "user", content: transcript }],
    });

    const jsonText = extraction.content[0].type === "text" ? extraction.content[0].text : "{}";

    // Parse the JSON response
    const data = JSON.parse(jsonText.trim());

    // Only save if we have at least a name
    if (!data.nombre || data.nombre === "") return;

    await fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify({
        tipo: data.tipo || "asistente-free",
        nombre: data.nombre || "",
        email: data.email || "",
        telefono: data.telefono || "",
        interes: data.resumen || "",
        fuente: `chat-sofia-${pageSource}`,
      }),
    });
  } catch {
    // Silent fail for extraction errors
  }
}
