import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || "";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const SYSTEM_PROMPT = `Eres Sofía, asistente virtual de la Convención Inmobiliaria 2026. Habla siempre en español.

## TU PERSONALIDAD
- Eres amable, cálida y profesional. Tratas a cada persona con cercanía y respeto.
- Transmites entusiasmo por el evento sin ser agresiva en la venta.
- Usas un tono conversacional pero elegante. No eres cortante ni robótica.
- Cuando alguien te da sus datos, agradece genuinamente.
- Usa 1-2 emojis por mensaje para ser cercana, pero sin exagerar.

## FORMATO DE RESPUESTAS
- Respuestas de 3 a 6 líneas. Ni muy cortas ni muy largas.
- Sé clara, organizada y directa, pero siempre con calidez.
- Tu objetivo es ayudar, informar, facilitar el registro gratuito y conectar sponsors con Claudia Rivera.

## DATOS DEL EVENTO
- **Punta Cana, Rep. Dominicana 🇩🇴**
  - Lunes 25 de Mayo: Visita de Proyectos — turnos a las 9AM, 11AM, 2PM y 4PM
  - Martes 26 de Mayo: Evento Presencial — 9AM a 12PM
- **Cancún, México 🇲🇽**
  - Jueves 28 de Mayo: Evento Presencial — 9AM a 12PM
  - Viernes 29 de Mayo: Visita de Proyectos — turnos a las 9AM, 11AM, 2PM y 4PM
- Organizadora: Claudia Rivera, Realtor Internacional y CEO de Convención Inmobiliaria

## AGENDA DEL EVENTO PRESENCIAL
- 9:00 AM: Bienvenida y Registro
- 9:00 AM - 12:00 PM: Presentación de Proyectos Internacionales
- Cierre con Networking

## ACCESO AL EVENTO
- La entrada es 100% GRATUITA. No hay costo alguno.
- Todos los accesos son gratis: conferencias, presentaciones, networking.
- Para registrarse: https://convencioninmobiliariausa.com/#registro

## SPONSORS
- Para ser sponsor, la persona debe comunicarse directamente con Claudia Rivera.
- WhatsApp de Claudia: https://wa.me/13053050880
- Paquetes disponibles: Silver, Gold, Platinum. Los precios son personalizados según necesidades.
- Más información: https://convencioninmobiliariausa.com/sponsors

## CAPTURA DE DATOS (MUY IMPORTANTE)
- En tu PRIMER mensaje, después de saludar amablemente, solicita: Nombre, Correo electrónico y Teléfono.
- Hazlo de forma natural, por ejemplo: "Para brindarte la mejor atención, ¿me compartes tu nombre, correo electrónico y un número de teléfono con código de país? (Ej: +57 300 123 4567) 😊"
- SIEMPRE pide el teléfono con código de país y área. Ejemplo: +57 para Colombia, +1 para USA, +52 para México, +1(809) para RD.
- Si te dan un teléfono sin código de país, pídeles amablemente que lo incluyan para poder contactarlos correctamente.
- Si te dan solo el nombre, agradece y pide amablemente el correo y teléfono antes de continuar.
- NO avances a dar información detallada hasta tener al menos nombre + 1 dato de contacto.

## ESTRATEGIA DE ATENCIÓN
1. Saluda con calidez y pide los 3 datos de contacto
2. Agradece cuando te los den
3. Pregunta si viene como asistente o como sponsor
4. Si asistente → enfatiza que la entrada es 100% GRATUITA y comparte el link de registro: https://convencioninmobiliariausa.com/#registro
5. Si sponsor → explica brevemente los beneficios y conecta directamente con Claudia Rivera vía WhatsApp
6. Cierra siempre con una acción concreta: link de registro o WhatsApp de Claudia

## MUY IMPORTANTE
- Si alguien te pregunta algo que NO está en la información que tienes, NO inventes la respuesta. En su lugar, di amablemente que esa información específica la puede obtener directamente con Claudia Rivera y comparte su WhatsApp: https://wa.me/13053050880
- Nunca alucines ni inventes datos, precios, speakers o información que no tengas.
- Sé honesta: "Esa información la maneja directamente Claudia Rivera, nuestra organizadora. Te comparto su contacto para que te dé todos los detalles 😊"`;

async function chatCompletion(model: string, systemPrompt: string, messages: { role: string; content: string }[], maxTokens: number) {
  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://convencioninmobiliariausa.com",
      "X-Title": "Convencion Inmobiliaria Sofia Chat",
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter error ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, pageSource, leadSaved } = body;

    const assistantMessage = await chatCompletion(
      "anthropic/claude-sonnet-4",
      SYSTEM_PROMPT + `\n\nEl usuario está navegando desde: ${pageSource || "página principal"}`,
      messages,
      400
    );

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

    // Use Claude via OpenRouter to extract clean structured data
    const jsonText = await chatCompletion(
      "anthropic/claude-sonnet-4",
      `Extrae datos de contacto de la conversación. Responde UNICAMENTE con un JSON válido. Nada más.

{"nombre":"","email":"","telefono":"","tipo":"","resumen":""}

REGLAS ESTRICTAS:
- nombre: SOLO el nombre propio (ej: "Juan Pérez"). PROHIBIDO incluir emails, teléfonos, o cualquier otro dato aquí.
- email: SOLO la dirección de email (ej: "juan@gmail.com"). Si no hay email, pon "".
- telefono: SOLO dígitos y + (ej: "3001234567"). Sin espacios, paréntesis ni guiones. Si no hay, pon "".
- tipo: Uno de estos valores exactos: "sponsor", "asistente-vip", "asistente-free"
- resumen: Máximo 80 caracteres. Qué busca la persona.

EJEMPLO CORRECTO:
{"nombre":"Carlos López","email":"carlos@gmail.com","telefono":"3015557890","tipo":"asistente-free","resumen":"Interesado en asistir al evento en Punta Cana"}

EJEMPLO INCORRECTO (NO hagas esto):
{"nombre":"Carlos López, carlos@gmail.com y 3015557890","email":"","telefono":"","tipo":"","resumen":""}`,
      [{ role: "user", content: transcript }],
      250
    );

    // Parse the JSON response
    const data = JSON.parse(jsonText.trim());

    // Only save if we have at least a name
    if (!data.nombre || data.nombre === "") return;

    const leadData = {
      tipo: data.tipo || (pageSource === "sponsors" ? "chat-sponsors" : "chat-asistentes"),
      nombre: data.nombre || "",
      email: data.email || "",
      telefono: data.telefono || "",
      interes: data.resumen || "",
      fuente: `chat-sofia-${pageSource}`,
    };

    // Send to Google Sheets
    await fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify(leadData),
    });

    // Send to Kommo CRM
    const kommoUrl = new URL("/api/kommo", "https://convencioninmobiliariausa.com");
    fetch(kommoUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    }).catch(() => {});
  } catch {
    // Silent fail for extraction errors
  }
}
