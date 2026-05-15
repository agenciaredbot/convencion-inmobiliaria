"use client";

const faqs = [
  {
    q: "¿Aceptan cualquier proyecto?",
    a: "No. Tenemos curaduría. Auditamos antes de firmar: licencias y permisos al día, track record del desarrollador, calidad constructiva, racional financiero del proyecto, congruencia entre precio y mercado. Aproximadamente el **60% de los proyectos que aplican no pasan el filtro**. Esto es lo que protege la calidad de la red.",
  },
  {
    q: "¿Cuál es el ROI real esperable sobre la membresía?",
    a: "Datos validados 2024-2025: promedio de **4-7x ROI año 1** sobre el costo de la membresía, en proyectos activos. Casos top llegan a 14x. Casos malos (proyectos que no pasan el filtro o que no se activan operativamente) llegan a 1-2x. **Por eso solo trabajamos con proyectos curados.** En la reunión comercial proyectamos tu caso específico con base en data comparable.",
  },
  {
    q: "¿Cuál es la diferencia con contratar una agencia de marketing inmobiliaria?",
    a: "Una agencia te genera leads fríos pagando por anuncios. Nosotros te conectamos con una **red ya consolidada** de compradores y vendedores activos. La agencia te factura sin importar resultados. Nosotros tenemos **skin in the game**: nuestra reputación depende de que tu proyecto se venda bien. Adicionalmente, ofrecemos canal de distribución, tours físicos, asesoría legal y co-branding — un agente digital no.",
  },
  {
    q: "¿Quién paga la comisión del realtor en una venta?",
    a: "El desarrollador (es decir, tú). Las comisiones estándar de la red del Club: **3-6% sobre el valor de venta** según proyecto y modelo. Estas comisiones se acuerdan en la fase de partnership inicial. Son comisiones competitivas y alineadas con el estándar de mercado en preventa.",
  },
  {
    q: "¿Pueden traer compradores extranjeros más allá de USA?",
    a: "Sí. La red incluye operadores en Canadá, España y selectivamente Europa. El mercado USA es nuestro foco principal por volumen y dolarización, pero abrimos otros mercados según el perfil del proyecto. En la reunión comercial validamos el match.",
  },
  {
    q: "¿La membresía es anual y se renueva automáticamente?",
    a: "La membresía es anual, **no auto-renovable**. Al cumplir el año revisamos resultados, métricas y plan para el siguiente. Si renuevas, mantienes el precio inicial. Si decides no renovar, retiramos tu proyecto del portal y materiales asociados. **No tenemos modelos de “fidelización forzada”.**",
  },
  {
    q: "¿Puedo entrar con más de un proyecto?",
    a: "Sí. En el Nivel 3 (Partnership) el contrato cubre hasta **3 proyectos del mismo desarrollador en simultáneo**, con descuentos en proyectos adicionales. Estructuras especiales para grupos constructores grandes (+5 proyectos) las negociamos directamente.",
  },
  {
    q: "¿Cómo miden el performance? ¿Qué reportes recibo?",
    a: "Reportes mensuales (Nivel 2 y 3) o trimestrales (Nivel 1) con: visualizaciones en portal, leads enviados, conversaciones generadas, tours coordinados, unidades vendidas, NPS de realtors sobre tu proyecto. Dashboard online actualizado en tiempo real. **Transparencia total.**",
  },
];

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function SectionFAQDeveloper() {
  return (
    <section className="faq-d" id="faq">
      <div className="v2-container-narrow">
        <header className="faqd-header reveal">
          <span className="section-marker">— Dudas frecuentes</span>
          <h2 className="h-section">
            Preguntas que hacen
            <br />
            <em className="emphasis-gold">
              todos los directores comerciales.
            </em>
          </h2>
        </header>

        <div className="faq-list reveal">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">
                <span>{item.q}</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>{renderInline(item.a)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-d {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .faqd-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        :global(.faqd-header .section-marker) { margin-bottom: 1rem; }
        .faq-list :global(.faq-item) {
          border-bottom: 1px solid var(--gray-border);
        }
        .faq-list :global(.faq-question) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          padding: 1.75rem 0;
          cursor: pointer;
          list-style: none;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--black-primary);
          transition: color 0.3s;
          letter-spacing: -0.01em;
        }
        .faq-list :global(.faq-question:hover) { color: var(--gold-dark); }
        .faq-list :global(.faq-question::-webkit-details-marker) { display: none; }
        .faq-list :global(.faq-toggle) {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2rem;
          font-weight: 300;
          color: var(--gold-luxury);
          transition: transform 0.3s;
          line-height: 1;
          flex-shrink: 0;
        }
        .faq-list :global(.faq-item[open] .faq-toggle) {
          transform: rotate(45deg);
        }
        .faq-list :global(.faq-answer) {
          padding-bottom: 1.75rem;
          max-width: 720px;
        }
        .faq-list :global(.faq-answer p) {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--gray-text);
          margin: 0;
        }
        .faq-list :global(.faq-answer strong) {
          color: var(--black-primary);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
