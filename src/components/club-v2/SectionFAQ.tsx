"use client";

const faqs = [
  {
    q: "¿Necesito licencia inmobiliaria local para operar en otros países?",
    a: "No. Una de las cosas que hace único al Club es que te damos el know-how legal exacto para que puedas operar como intermediario, inversionista o promotor en cada país sin necesidad de licencia local. Hemos resuelto este punto durante 15 años de experiencia.",
  },
  {
    q: "¿Cómo cobro mi comisión si vendo una propiedad en otro país?",
    a: "Te explicamos los 3 modelos legales más usados: facturación cruzada, comisión vía estructura legal local, y modelos de partnership con realtors residentes. Cada uno con sus ventajas tributarias específicas. Todo declarado, todo limpio, todo optimizado.",
  },
  {
    q: "¿Los tours realmente incluyen todo?",
    a: "Sí. Tiquetes aéreos desde Miami (o tu ciudad de origen previa coordinación), alojamiento en hotel premium, transporte local, todas las visitas a proyectos, eventos de networking y comidas en eventos oficiales. Tú solo llegas con tu maleta.",
  },
  {
    q: "¿Qué pasa si no me gusta ningún proyecto del tour?",
    a: "No hay obligación de compra. Los tours son experiencias de exploración y networking. Muchos miembros toman 2-3 tours antes de decidirse. Otros compran en el primero. **No hay presión comercial.**",
  },
  {
    q: "¿Cómo manejo mi propiedad si la compro y vivo en USA?",
    a: "Tenemos operadores aliados de administración local en cada país. Se encargan de Airbnb, mantenimiento, pagos de servicios y reportes mensuales. Tú recibes tu rentabilidad en dólares en tu cuenta de USA.",
  },
  {
    q: "¿Es seguro mover dinero entre países?",
    a: "Sí, si lo haces correctamente. Te enseñamos los canales legales (fiducias, transferencias declaradas, estructuras societarias) y te conectamos con asesores especializados que llevan años haciéndolo. Todo declarado ante el IRS y autoridades locales.",
  },
  {
    q: "¿Puedo cancelar mi suscripción cuando quiera?",
    a: "Para los planes Realtor (Starter, Elite, Premium): **sí, cancelas cuando quieras, sin permanencia**. Para los planes Desarrollador, son membresías anuales con beneficios distribuidos durante todo el año (no son cancelables a mitad de período por la naturaleza B2B del servicio).",
  },
  {
    q: "¿Cuántos proyectos hay disponibles hoy?",
    a: "Más de 40 proyectos curados en Colombia, México, RD y Dubai. Cada uno con ficha técnica completa, datos de rentabilidad proyectada y materiales de venta listos para usar con tus clientes.",
  },
  {
    q: "¿Qué rentabilidad real puedo esperar como inversionista?",
    a: "Depende del mercado y tipo de propiedad. Los rangos validados en 2026: 8-12% valorización en Medellín, 10-15% en RD, 6-12% en Barranquilla. Rentas cortas en Medellín y Cancún pueden generar 0.4-0.7% mensual neto. **Te damos data específica y auditada por cada proyecto.**",
  },
  {
    q: "¿Quién está detrás del Club Inmobiliario?",
    a: "Claudia Rivera, con 15 años de experiencia en el real estate de Colombia, USA, México y RD. Respaldada por Conexión Inmobiliaria, organizador de la Convención Inmobiliaria USA y una red activa de +10,000 operadores en LATAM y EU.",
  },
];

function renderAnswer(text: string) {
  // Soporte para **bold** inline
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function SectionFAQ() {
  return (
    <section className="faq" id="faq">
      <div className="v2-container-narrow">
        <header className="faq-header reveal">
          <span className="section-number faq-number" aria-hidden="true">10</span>
          <span className="section-marker">— Capítulo 10 / Preguntas frecuentes</span>
          <h2 className="h-section">
            Lo que todos preguntan
            <br />
            <em className="emphasis-gold">antes de suscribirse.</em>
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
                <p>{renderAnswer(item.a)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .faq-header {
          position: relative;
          margin-bottom: 3rem;
          text-align: center;
        }
        .faq-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.faq-header h2),
        :global(.faq-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.faq-header .section-marker) { margin-bottom: 1rem; }
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
        .faq-list :global(.faq-question:hover) {
          color: var(--gold-dark);
        }
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
