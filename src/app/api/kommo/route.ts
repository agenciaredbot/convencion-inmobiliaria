import { NextResponse } from "next/server";

const KOMMO_TOKEN = process.env.KOMMO_API_TOKEN || "";
const KOMMO_URL = "https://convencioninfomiamigmailcom.kommo.com/api/v4";

// Pipeline & Status mapping — Pipeline IA (13509519)
const PIPELINE_MAP: Record<string, { pipeline_id: number; status_id: number }> = {
  "asistente":            { pipeline_id: 13509519, status_id: 104226315 },  // IA → ENTRADA
  "asistente-free":       { pipeline_id: 13509519, status_id: 104226315 },  // IA → ENTRADA
  "asistente-vip":        { pipeline_id: 13509519, status_id: 104226315 },  // IA → ENTRADA
  "asistente-platinum":   { pipeline_id: 13509519, status_id: 104226315 },  // IA → ENTRADA
  "asistente-advance-ai": { pipeline_id: 13509519, status_id: 104226315 },  // IA → ENTRADA
  "chat-asistentes":      { pipeline_id: 13509519, status_id: 104226315 },  // IA → ENTRADA
  "sponsor":              { pipeline_id: 13509519, status_id: 104226311 },  // IA → SPONSOR
  "chat-sponsors":        { pipeline_id: 13509519, status_id: 104226311 },  // IA → SPONSOR
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tipo, nombre, email, telefono, interes, fuente } = body;

    if (!nombre && !email && !telefono) {
      return NextResponse.json({ error: "No lead data" }, { status: 400 });
    }

    const mapping = PIPELINE_MAP[tipo] || PIPELINE_MAP["chat-asistentes"];

    // Build tags based on source
    const tags: { name: string }[] = [];
    tags.push({ name: `web-${fuente || "landing"}` });
    if (tipo) tags.push({ name: tipo });
    if (fuente?.includes("sofia")) tags.push({ name: "chat-sofia" });
    if (fuente?.includes("formulario")) tags.push({ name: "formulario-web" });

    // Build contact custom fields (email + phone)
    const contactFields: { field_code: string; values: { value: string; enum_code?: string }[] }[] = [];
    if (email) {
      contactFields.push({
        field_code: "EMAIL",
        values: [{ value: email, enum_code: "WORK" }],
      });
    }
    if (telefono) {
      contactFields.push({
        field_code: "PHONE",
        values: [{ value: telefono, enum_code: "WORK" }],
      });
    }

    // Create lead with contact using complex endpoint
    const payload = [
      {
        name: `${nombre || "Lead Web"} — ${tipo || "web"}`,
        pipeline_id: mapping.pipeline_id,
        status_id: mapping.status_id,
        tags_to_add: tags,
        _embedded: {
          contacts: [
            {
              name: nombre || "Sin nombre",
              first_name: nombre?.split(" ")[0] || "",
              custom_fields_values: contactFields,
              tags_to_add: tags,
            },
          ],
        },
      },
    ];

    // Add note with full details
    const response = await fetch(`${KOMMO_URL}/leads/complex`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KOMMO_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Kommo error:", JSON.stringify(result));
      return NextResponse.json({ error: "Kommo API error", details: result }, { status: response.status });
    }

    // Add note with interest/details to the lead
    const leadId = result?._embedded?.leads?.[0]?.id;
    if (leadId && interes) {
      await fetch(`${KOMMO_URL}/leads/${leadId}/notes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KOMMO_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            note_type: "common",
            params: {
              text: `📋 Detalles del lead:\n• Tipo: ${tipo}\n• Interés: ${interes}\n• Fuente: ${fuente}\n• Email: ${email || "N/A"}\n• Teléfono: ${telefono || "N/A"}`,
            },
          },
        ]),
      });
    }

    return NextResponse.json({ status: "ok", lead_id: leadId });
  } catch (error) {
    console.error("Kommo integration error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
