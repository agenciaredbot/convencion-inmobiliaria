"use client";

const faqs: { q: string; a: string; list?: string[] }[] = [
  {
    q: "¿Realmente la asesoría es gratis? ¿Cuál es el truco?",
    a: "No hay truco. Nuestro modelo de negocio se basa en comisiones que pagan los desarrolladores cuando vendes (no tú). Es exactamente el mismo modelo de un broker en USA: tú no le pagas, el vendedor le paga. Solo pagas: **(1) el tour si decides viajar**, y **(2) la propiedad si decides comprar**. La asesoría es genuinamente gratis.",
  },
  {
    q: "¿Tengo que viajar obligatoriamente para comprar?",
    a: "No es obligatorio, pero lo recomendamos enfáticamente. Ver el proyecto, conocer al desarrollador, recorrer la zona, hablar con vecinos: esto te da una capa de seguridad invaluable. El tour del Club está diseñado para que en 3 días tengas toda la información para decidir bien.",
  },
  {
    q: "¿Cómo se mueven los dólares legalmente desde USA?",
    a: "Existen varios canales legales: transferencias bancarias internacionales declaradas ante el IRS (formato FBAR si aplica), fiducias mercantiles que reciben USD directamente, cambios oficiales en casa de cambio autorizada. Todo trazable, todo declarado. Te enseñamos exactamente cómo hacerlo según tu situación.",
  },
  {
    q: "¿Qué pasa con los impuestos en USA si compro en LATAM?",
    a: "Como residente fiscal de USA debes declarar tus rentas globales al IRS. PERO existen tratados de doble imposición con varios países (Colombia, México) que evitan que pagues impuestos dos veces. Hay también estructuras como LLCs que optimizan la situación. Nuestros CPAs especializados te diseñan la estrategia óptima.",
  },
  {
    q: "¿Quién administra mi propiedad si vivo en USA?",
    a: "Tenemos operadores aliados en cada destino que se encargan de todo: publicación en Airbnb/Booking, check-in/out de huéspedes, limpieza, mantenimiento, pago de servicios, reportes mensuales con fotos y números. Tú recibes tu rentabilidad neta en USD a tu cuenta en USA. Sin dolores de cabeza.",
  },
  {
    q: "¿Y si el desarrollador no entrega el proyecto?",
    a: "Por eso solo trabajamos con desarrolladores con track record verificable. Adicionalmente, en preventa el dinero va a una **fiducia mercantil**, no al desarrollador directamente. Si el proyecto no llega a “punto de equilibrio” en X tiempo, te devuelven el dinero. Te enseñamos exactamente cómo leer estos contratos.",
  },
  {
    q: "¿Cuánto rinde realmente esto? Sin marketing.",
    a: "Rangos validados con data 2026:",
    list: [
      "**Medellín:** 8-12% valorización + 0.4-0.7% renta mensual neta (Airbnb)",
      "**Punta Cana:** 10-15% valorización + 0.5-0.7% renta mensual",
      "**Cancún:** 8-12% valorización + 0.4-0.8% renta mensual turística",
      "**Barranquilla:** 6-12% valorización + 0.3-0.5% renta mensual",
    ],
  },
  {
    q: "¿Necesito hablar español perfectamente?",
    a: "No. Nuestro equipo es completamente bilingüe (ES/EN). Toda la documentación se puede manejar en inglés. Muchos de nuestros miembros son latinos de 2da/3ra generación en USA que se manejan mejor en inglés. Te acompañamos en el idioma que prefieras.",
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

export default function SectionFAQInvestor() {
  return (
    <section className="faq-inv" id="faq">
      <div className="v2-container-narrow">
        <header className="faq-header reveal">
          <span className="section-marker">— Preguntas frecuentes</span>
          <h2 className="h-section">
            Lo que todo inversionista
            <br />
            <em className="emphasis-gold">pregunta antes de empezar.</em>
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
                {item.list && (
                  <ul>
                    {item.list.map((li, j) => (
                      <li key={j}>{renderInline(li)}</li>
                    ))}
                  </ul>
                )}
                {item.list && i === 6 && (
                  <p>
                    ROI total año 1 entre 15-25% es perfectamente realista en el
                    escenario base. <strong>Compara con 3.4% en Miami.</strong>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-inv {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .faq-header {
          margin-bottom: 3rem;
          text-align: center;
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
          margin: 0 0 0.75rem;
        }
        .faq-list :global(.faq-answer p:last-child) { margin-bottom: 0; }
        .faq-list :global(.faq-answer strong) {
          color: var(--black-primary);
          font-weight: 600;
        }
        .faq-list :global(.faq-answer ul) {
          margin: 0.5rem 0 0.75rem;
          padding-left: 1.25rem;
          list-style: none;
        }
        .faq-list :global(.faq-answer ul li) {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--gray-deep);
          padding: 0.3rem 0;
          position: relative;
          padding-left: 1rem;
        }
        .faq-list :global(.faq-answer ul li::before) {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--gold-luxury);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
