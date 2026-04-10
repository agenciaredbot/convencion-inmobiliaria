import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || "";
const EVOLUTION_URL = "https://evolution-api-evolution-api.evfgat.easypanel.host";
const EVOLUTION_KEY = process.env.EVOLUTION_API_KEY || "429683C4C977415CAAFCCE10F7D57E11";
const INSTANCE_NAME = "convencion-inmobiliaria";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const SYSTEM_PROMPT = `Eres Sofía, asistente virtual de la Convención Inmobiliaria 2026 por WhatsApp. Habla siempre en español.

## TU PERSONALIDAD
- Eres amable, cálida y profesional. Tratas a cada persona con cercanía y respeto.
- Transmites entusiasmo por el evento sin ser agresiva en la venta.
- Usas un tono conversacional pero elegante. No eres cortante ni robótica.
- Cuando alguien te da sus datos, agradece genuinamente.
- Usa 1-2 emojis por mensaje para ser cercana, pero sin exagerar.

## FORMATO DE RESPUESTAS
- Respuestas de 3 a 6 líneas. Ni muy cortas ni muy largas.
- Sé clara, organizada y directa, pero siempre con calidez.
- Cuando des opciones de tickets, preséntalas con formato limpio.
- Tu objetivo es ayudar, informar y facilitar la compra de entradas o conectar sponsors con Claudia Rivera.

## DATOS DEL EVENTO
- **Barranquilla**: Miércoles 22 de Abril — Hotel Estelar
- **Medellín**: Viernes 24 de Abril — Hotel Estelar
- Dos jornadas: Mañana (8:30AM-3PM) y Tarde (3-7PM), mismo programa
- Organizadora: Claudia Rivera, Realtor Internacional y CEO de Convención Inmobiliaria

## AGENDA DEL DÍA
- 8:30-9:00 AM: Registro & Networking
- 9:00-9:30 AM: Apertura y Presentación Sponsors
- 9:30-10:00 AM: Cómo Invertir en USA, RD y México
- 10:00 AM-12:00 PM: Presentación de Proyectos Internacionales
- 12:00-1:00 PM: Panel Inversionistas & Expertos
- 1:00-3:00 PM: Lunch VIP & Networking exclusivo
- 3:00-7:00 PM: Segunda jornada (mismo programa)
- 6:30-7:00 PM: Registro Cena VIP
- 7:00-8:30 PM: Cena y Networking

## TICKETS Y LINKS DE PAGO
- **FREE** ($0 USD): Acceso completo al evento, conferencias y networking → Registro: https://convencioninmobiliariausa.com/#registro
- **VIP Lunch** ($27 USD): Todo lo del FREE + Lunch privado con inversionistas y empresarios 🥂 → Pagar: https://checkout.bold.co/payment/LNK_668PMLKYFP
- **PLATINUM** ($50 USD): Todo lo del VIP + Magazine Digital con detalles y contactos de proyectos → Pagar: https://checkout.bold.co/payment/LNK_TXYZG2V7CV
- **ADVANCE A.I** ($100 USD): Todo lo del Platinum + ECard Digital personalizada, Workshop de Inteligencia Artificial y Kit de Marketing + Acceso a Cena VIP → Pagar: https://checkout.bold.co/payment/LNK_DM1LN0WEN8

## SPONSORS
- Para ser sponsor, la persona debe comunicarse directamente con Claudia Rivera.
- WhatsApp de Claudia: https://wa.me/13053050880
- Paquetes disponibles: Silver, Gold, Platinum. Los precios son personalizados según necesidades.
- Más información: https://convencioninmobiliariausa.com/sponsors

## CAPTURA DE DATOS (MUY IMPORTANTE)
- En tu PRIMER mensaje, después de saludar amablemente, solicita: Nombre, Correo electrónico y Teléfono.
- Hazlo de forma natural: "Para brindarte la mejor atención, ¿me compartes tu nombre, correo y número con código de país? (Ej: +57 300 123 4567) 😊"
- SIEMPRE pide el teléfono con código de país. Ejemplo: +57 Colombia, +1 USA, +52 México, +1(809) RD.
- NO avances a dar información detallada hasta tener al menos nombre + 1 dato de contacto.

## ESTRATEGIA DE ATENCIÓN
1. Saluda con calidez y pide los 3 datos de contacto
2. Agradece cuando te los den
3. Pregunta si viene como asistente o como sponsor
4. Si asistente → presenta las opciones de tickets, recomienda el VIP ($27) como mejor relación calidad-precio, y comparte el link de pago
5. Si sponsor → explica brevemente los beneficios y conecta directamente con Claudia Rivera vía WhatsApp
6. Cierra siempre con una acción concreta: link de pago o WhatsApp de Claudia

## MUY IMPORTANTE
- Si alguien te pregunta algo que NO está en tu información, NO inventes. Di amablemente que esa información la puede obtener con Claudia Rivera: https://wa.me/13053050880
- Nunca alucines ni inventes datos, precios, speakers o información que no tengas.`;

// In-memory conversation store per phone number
// Structure: { [phone]: { messages: [], leadSaved: boolean } }
const conversations = new Map<string, { messages: { role: string; content: string }[]; leadSaved: boolean }>();

// Prevent duplicate processing
const processedMessages = new Set<string>();

async function chatCompletion(messages: { role: string; content: string }[], maxTokens = 400): Promise<string> {
  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://convencioninmobiliariausa.com",
      "X-Title": "Convencion Inmobiliaria Sofia WhatsApp",
    },
    body: JSON.stringify({
      model: "anthropic/claude-sonnet-4",
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
    }),
  });
  if (!res.ok) throw new Error(`OpenRouter error ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

async function sendWhatsAppMessage(to: string, text: string) {
  const number = to.replace("@s.whatsapp.net", "").replace("@g.us", "");
  const res = await fetch(`${EVOLUTION_URL}/message/sendText/${INSTANCE_NAME}`, {
    method: "POST",
    headers: {
      apikey: EVOLUTION_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number, text }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("Evolution send error:", err);
  }
}

async function extractAndSaveLead(messages: { role: string; content: string }[], phone: string) {
  try {
    const transcript = messages
      .map((m) => `${m.role === "user" ? "USUARIO" : "SOFIA"}: ${m.content}`)
      .join("\n");

    const jsonText = await chatCompletion(
      [{ role: "user", content: transcript }],
      250
    );

    let data: { nombre?: string; email?: string; telefono?: string; tipo?: string; resumen?: string } = {};
    const match = jsonText.match(/\{[\s\S]*\}/);
    if (match) data = JSON.parse(match[0]);

    if (!data.nombre) return;

    const leadData = {
      tipo: data.tipo || "chat-asistentes",
      nombre: data.nombre || "",
      email: data.email || "",
      telefono: data.telefono || phone,
      interes: data.resumen || "",
      fuente: "whatsapp-sofia",
      tag: "Nueva landing",
    };

    fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify(leadData),
    }).catch(() => {});

    fetch("https://convencioninmobiliariausa.com/api/kommo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    }).catch(() => {});
  } catch {
    // Silent fail
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const event = body?.event;
    const data = body?.data;

    // Only handle incoming text messages
    if (event !== "messages.upsert") return NextResponse.json({ ok: true });
    if (!data?.key || data.key.fromMe) return NextResponse.json({ ok: true });

    const remoteJid: string = data.key.remoteJid || "";

    // Ignore group messages
    if (remoteJid.includes("@g.us")) return NextResponse.json({ ok: true });

    // Deduplicate
    const msgId: string = data.key.id || "";
    if (processedMessages.has(msgId)) return NextResponse.json({ ok: true });
    processedMessages.add(msgId);
    if (processedMessages.size > 500) {
      const first = processedMessages.values().next().value;
      if (first) processedMessages.delete(first);
    }

    // Extract message text
    const text: string =
      data.message?.conversation ||
      data.message?.extendedTextMessage?.text ||
      data.message?.imageMessage?.caption ||
      "";

    if (!text.trim()) return NextResponse.json({ ok: true });

    const phone = remoteJid.replace("@s.whatsapp.net", "");

    // Get or create conversation for this phone
    if (!conversations.has(phone)) {
      conversations.set(phone, { messages: [], leadSaved: false });
    }
    const convo = conversations.get(phone)!;

    // Add user message
    convo.messages.push({ role: "user", content: text });

    // Keep last 20 messages to avoid token overflow
    if (convo.messages.length > 20) {
      convo.messages = convo.messages.slice(-20);
    }

    // Get Sofia's response
    const reply = await chatCompletion(convo.messages);

    // Add Sofia's response to history
    convo.messages.push({ role: "assistant", content: reply });

    // Send reply via Evolution API
    await sendWhatsAppMessage(remoteJid, reply);

    // Save lead once when contact info is detected
    if (!convo.leadSaved) {
      const allText = convo.messages
        .filter((m) => m.role === "user")
        .map((m) => m.content)
        .join(" ");
      const hasPhone = /\d{7,}/.test(allText.replace(/[\s\-().+]/g, ""));
      const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(allText);

      if (hasPhone || hasEmail) {
        convo.leadSaved = true;
        extractAndSaveLead(convo.messages, phone).catch(() => {});
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);
    return NextResponse.json({ ok: true }); // Always 200 to Evolution API
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ status: "Sofia WhatsApp activa ✅", instance: INSTANCE_NAME });
}
