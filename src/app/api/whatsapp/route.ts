import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || "";
const EVOLUTION_URL = "https://evolution-api-evolution-api.evfgat.easypanel.host";
const EVOLUTION_KEY = process.env.EVOLUTION_API_KEY || "429683C4C977415CAAFCCE10F7D57E11";
const INSTANCE_NAME = "convencion-inmobiliaria";
const KOMMO_URL = "https://convencioninfomiamigmailcom.kommo.com/api/v4";
const KOMMO_TOKEN = process.env.KOMMO_API_TOKEN || "";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

// IA Pipeline — ENTRADA by default
const KOMMO_PIPELINE_ID = 13509519;
const KOMMO_STATUS_ENTRADA = 104226315;
const KOMMO_STATUS_SPONSOR = 104226311;

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
- 3:00-6:30 PM: Segunda jornada (mismo programa)
- 6:30-7:00 PM: Registro Cena VIP
- 7:00-8:30 PM: Cena y Networking (solo plan Advance A.I)

## TICKETS Y LINKS DE PAGO
- **FREE** ($0 USD): Acceso completo al evento, conferencias y networking → Registro: https://convencioninmobiliariausa.com/#registro
- **VIP Lunch** ($27 USD): Todo lo del FREE + Lunch privado con inversionistas y empresarios 🥂 → Pagar: https://checkout.bold.co/payment/LNK_668PMLKYFP
- **PLATINUM** ($50 USD): Todo lo del VIP + Magazine Digital con detalles y contactos de proyectos → Pagar: https://checkout.bold.co/payment/LNK_TXYZG2V7CV
- **ADVANCE A.I** ($100 USD): Todo lo del Platinum + ECard Digital personalizada, Workshop de IA y Kit de Marketing + Acceso a Cena VIP → Pagar: https://checkout.bold.co/payment/LNK_DM1LN0WEN8

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

// In-memory store per phone
interface ConvoState {
  messages: { role: string; content: string }[];
  leadSaved: boolean;
  kommoLeadId: number | null;
  kommoContactId: number | null;
  pushName: string;
}
const conversations = new Map<string, ConvoState>();
const processedMessages = new Set<string>();

// ── Kommo helpers ──────────────────────────────────────────────

async function kommoRequest(path: string, method = "GET", body?: unknown) {
  const res = await fetch(`${KOMMO_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${KOMMO_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!res.ok) {
    console.error(`Kommo ${method} ${path} → ${res.status}`, await res.text());
    return null;
  }
  return res.json();
}

async function createKommoLead(phone: string, pushName: string): Promise<{ leadId: number; contactId: number } | null> {
  try {
    const payload = [
      {
        name: `WA ${pushName || phone} — Convención 2026`,
        pipeline_id: KOMMO_PIPELINE_ID,
        status_id: KOMMO_STATUS_ENTRADA,
        tags_to_add: [
          { name: "WhatsApp" },
          { name: "Sofia-IA" },
          { name: "Nueva landing" },
        ],
        _embedded: {
          contacts: [
            {
              name: pushName || `WA ${phone}`,
              custom_fields_values: [
                {
                  field_code: "PHONE",
                  values: [{ value: `+${phone}`, enum_code: "WHATSAPP" }],
                },
              ],
              tags_to_add: [
                { name: "WhatsApp" },
                { name: "Sofia-IA" },
              ],
            },
          ],
        },
      },
    ];

    const result = await kommoRequest("/leads/complex", "POST", payload);
    const leadId = result?._embedded?.leads?.[0]?.id;
    const contactId = result?._embedded?.contacts?.[0]?.id;
    if (!leadId) return null;
    return { leadId, contactId };
  } catch (err) {
    console.error("createKommoLead error:", err);
    return null;
  }
}

async function addKommoNote(leadId: number, text: string) {
  await kommoRequest(`/leads/${leadId}/notes`, "POST", [
    { note_type: "common", params: { text } },
  ]);
}

async function updateKommoContact(contactId: number, nombre: string, email: string, tipo: string) {
  const fields: { field_code: string; values: { value: string; enum_code?: string }[] }[] = [];
  if (email) fields.push({ field_code: "EMAIL", values: [{ value: email, enum_code: "WORK" }] });

  const statusId = tipo === "sponsor" ? KOMMO_STATUS_SPONSOR : KOMMO_STATUS_ENTRADA;

  // Update contact name + email
  if (fields.length > 0 || nombre) {
    await kommoRequest(`/contacts/${contactId}`, "PATCH", {
      name: nombre,
      custom_fields_values: fields,
    });
  }

  // Update lead status if sponsor
  if (tipo === "sponsor") {
    const leads = await kommoRequest(`/contacts/${contactId}/links`);
    const leadId = leads?._embedded?.leads?.[0]?.id;
    if (leadId) {
      await kommoRequest(`/leads/${leadId}`, "PATCH", { status_id: statusId });
    }
  }
}

// ── OpenRouter ─────────────────────────────────────────────────

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
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    }),
  });
  if (!res.ok) throw new Error(`OpenRouter error ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

// ── Evolution API ──────────────────────────────────────────────

async function sendWhatsAppMessage(to: string, text: string) {
  const number = to.replace("@s.whatsapp.net", "").replace("@g.us", "");
  const res = await fetch(`${EVOLUTION_URL}/message/sendText/${INSTANCE_NAME}`, {
    method: "POST",
    headers: { apikey: EVOLUTION_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ number, text }),
  });
  if (!res.ok) console.error("Evolution send error:", await res.text());
}

// ── Extract & save full lead ───────────────────────────────────

async function extractAndUpdateLead(convo: ConvoState, phone: string) {
  try {
    const transcript = convo.messages
      .map((m) => `${m.role === "user" ? "USUARIO" : "SOFIA"}: ${m.content}`)
      .join("\n");

    const jsonText = await chatCompletion(
      [{ role: "user", content: `Extrae datos de contacto. Responde SOLO con JSON válido:\n{"nombre":"","email":"","telefono":"","tipo":"","resumen":""}\n\nConversación:\n${transcript}` }],
      200
    );

    const match = jsonText.match(/\{[\s\S]*?\}/);
    if (!match) return;
    const data = JSON.parse(match[0]);
    if (!data.nombre) return;

    const tipo = data.tipo || "chat-asistentes";
    const leadData = {
      tipo,
      nombre: data.nombre,
      email: data.email || "",
      telefono: data.telefono || phone,
      interes: data.resumen || "",
      fuente: "whatsapp-sofia",
      tag: "Nueva landing",
    };

    // Google Sheets
    fetch(SHEETS_URL, { method: "POST", body: JSON.stringify(leadData) }).catch(() => {});

    // Update Kommo contact with real data
    if (convo.kommoContactId) {
      await updateKommoContact(convo.kommoContactId, data.nombre, data.email || "", tipo);
      if (convo.kommoLeadId) {
        await addKommoNote(
          convo.kommoLeadId,
          `📋 Datos capturados:\n• Nombre: ${data.nombre}\n• Email: ${data.email || "N/A"}\n• Teléfono: ${data.telefono || phone}\n• Tipo: ${tipo}\n• Resumen: ${data.resumen || "N/A"}`
        );
      }
    }
  } catch (err) {
    console.error("extractAndUpdateLead error:", err);
  }
}

// ── Webhook handler ────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body?.event !== "messages.upsert") return NextResponse.json({ ok: true });
    const data = body?.data;
    if (!data?.key || data.key.fromMe) return NextResponse.json({ ok: true });

    const remoteJid: string = data.key.remoteJid || "";
    if (remoteJid.includes("@g.us")) return NextResponse.json({ ok: true });

    // Deduplication
    const msgId: string = data.key.id || "";
    if (processedMessages.has(msgId)) return NextResponse.json({ ok: true });
    processedMessages.add(msgId);
    if (processedMessages.size > 500) {
      const first = processedMessages.values().next().value;
      if (first) processedMessages.delete(first);
    }

    const text: string =
      data.message?.conversation ||
      data.message?.extendedTextMessage?.text ||
      data.message?.imageMessage?.caption ||
      "";

    if (!text.trim()) return NextResponse.json({ ok: true });

    const phone = remoteJid.replace("@s.whatsapp.net", "");
    const pushName: string = data.pushName || phone;

    // Init conversation
    const isNew = !conversations.has(phone);
    if (isNew) {
      conversations.set(phone, {
        messages: [],
        leadSaved: false,
        kommoLeadId: null,
        kommoContactId: null,
        pushName,
      });
    }
    const convo = conversations.get(phone)!;

    // ── Create Kommo lead on FIRST message (always) ──
    if (isNew && !convo.kommoLeadId) {
      createKommoLead(phone, pushName).then((ids) => {
        if (ids) {
          convo.kommoLeadId = ids.leadId;
          convo.kommoContactId = ids.contactId;
          // Add first message as note
          addKommoNote(ids.leadId, `📱 Primera mensaje WhatsApp:\n"${text}"\n\nNombre WA: ${pushName}\nNúmero: +${phone}`).catch(() => {});
        }
      }).catch(() => {});
    }

    // Add user message
    convo.messages.push({ role: "user", content: text });
    if (convo.messages.length > 20) convo.messages = convo.messages.slice(-20);

    // Get Sofia response
    const reply = await chatCompletion(convo.messages);
    convo.messages.push({ role: "assistant", content: reply });

    // Send reply via WhatsApp
    await sendWhatsAppMessage(remoteJid, reply);

    // ── Add conversation note to Kommo every 3 user messages ──
    const userMsgCount = convo.messages.filter((m) => m.role === "user").length;
    if (convo.kommoLeadId && userMsgCount % 3 === 0) {
      const last6 = convo.messages.slice(-6);
      const transcript = last6
        .map((m) => `${m.role === "user" ? "👤" : "🤖 Sofia"}: ${m.content}`)
        .join("\n\n");
      addKommoNote(convo.kommoLeadId, `💬 Conversación WhatsApp:\n\n${transcript}`).catch(() => {});
    }

    // ── Extract & save full lead when contact info detected ──
    if (!convo.leadSaved) {
      const allText = convo.messages.filter((m) => m.role === "user").map((m) => m.content).join(" ");
      const hasPhone = /\d{7,}/.test(allText.replace(/[\s\-().+]/g, ""));
      const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(allText);

      if (hasPhone || hasEmail) {
        convo.leadSaved = true;
        extractAndUpdateLead(convo, phone).catch(() => {});
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);
    return NextResponse.json({ ok: true });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Sofia WhatsApp activa ✅", instance: INSTANCE_NAME });
}
