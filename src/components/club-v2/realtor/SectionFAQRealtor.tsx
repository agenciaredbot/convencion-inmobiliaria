"use client";

const faqs: { q: string; a: string; list?: { type: "ol" | "ul"; items: string[] } }[] = [
  {
    q: "¿Necesito tener licencia inmobiliaria en Colombia/RD/México para operar allá?",
    a: "No. Operas como **referidor o intermediario**, modelo legal aceptado en todos los países del Club. El desarrollador local maneja la operación oficialmente, y tú recibes una comisión por la referencia/asesoría a tu cliente. Es exactamente el mismo modelo que usan brokers de USA cuando refieren clientes a otros estados.",
  },
  {
    q: "¿Cómo me pagan la comisión si vivo en USA?",
    a: "Tres opciones según tu situación:",
    list: {
      type: "ol",
      items: [
        "**Transferencia internacional directa** a tu cuenta de USA (declarada al IRS)",
        "**Facturación cruzada** a través de tu LLC en USA",
        "**Pago en USD vía fideicomiso** del proyecto (modelo Punta Cana/RD)",
      ],
    },
  },
  {
    q: "¿Mi licencia de Florida no me limita a operar fuera de USA?",
    a: "Tu licencia de Florida regula operaciones **dentro** de Florida. Operar fuera de USA es completamente independiente y legal, siempre que: (1) declares los ingresos al IRS, (2) cumplas con las leyes del país destino, (3) operes bajo la figura legal correcta. Te enseñamos exactamente cómo hacerlo.",
  },
  {
    q: "¿Qué pasa si trabajo con un broker en USA? ¿Hay conflicto?",
    a: "Depende de tu acuerdo con tu broker. Muchos agentes inmobiliarios operan independientemente para operaciones internacionales, porque están **fuera del scope** de la licencia de USA. Lo importante: ser transparente con tu broker y revisar tu contrato. La mayoría no tiene problema porque amplía tu valor para clientes hispanos.",
  },
  {
    q: "¿Realmente la comisión es del 3-6%? Suena alto.",
    a: "Sí, es real. Razones: (1) los desarrolladores en LATAM **pagan al canal de venta**, no al comprador, (2) la competencia entre proyectos es alta, así que la comisión es agresiva, (3) hay proyectos en preventa donde la comisión llega al 8-10% por la dificultad de vender “sobre planos”. **Una operación de $200K te puede dejar $6,000-$20,000 USD de comisión.**",
  },
  {
    q: "¿El agente IA realmente funciona o es marketing?",
    a: "Funciona. Está construido sobre la misma tecnología que ChatGPT pero entrenado específicamente con: (1) toda la info de los +40 proyectos del Club, (2) tu información personal y estilo, (3) las objeciones más comunes de tus clientes. Responde, califica leads, envía info y agenda llamadas. **Demo en vivo en cualquier llamada de onboarding.**",
  },
  {
    q: "¿Puedo cancelar mi suscripción cuando quiera?",
    a: "Sí. Sin permanencia mínima. Sin penalizaciones. Cancelas con un click desde tu portal o por WhatsApp. Si cancelas en los primeros 30 días, te devolvemos el 100% del primer mes. **Tu 25% OFF de fundador solo se mantiene si no cancelas.** Si cancelas y vuelves a entrar, lo haces al precio regular.",
  },
  {
    q: "¿Hay capacitación para empezar o tengo que descubrir todo solo?",
    a: "Onboarding completo en la primera semana: video-curso de 8 módulos cubriendo proyectos, herramientas, agente IA, scripts de venta, manejo de objeciones, cómo cobrar comisiones. Adicional: webinars mensuales con Claudia y expertos invitados. **Plan Premium incluye sesión 1:1 mensual.**",
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

export default function SectionFAQRealtor() {
  return (
    <section className="faq-r" id="faq">
      <div className="v2-container-narrow">
        <header className="faqr-header reveal">
          <span className="section-marker">— Preguntas de agentes inmobiliarios</span>
          <h2 className="h-section">
            Las dudas que tienen
            <br />
            <em className="emphasis-gold">todos los agentes</em>
            <br />
            antes de empezar.
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
                {item.list && item.list.type === "ol" && (
                  <ol>
                    {item.list.items.map((li, j) => (
                      <li key={j}>{renderInline(li)}</li>
                    ))}
                  </ol>
                )}
                {item.list && item.list.type === "ul" && (
                  <ul>
                    {item.list.items.map((li, j) => (
                      <li key={j}>{renderInline(li)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-r {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .faqr-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        :global(.faqr-header .section-marker) { margin-bottom: 1rem; }
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
        .faq-list :global(.faq-answer ol),
        .faq-list :global(.faq-answer ul) {
          margin: 0.75rem 0;
          padding-left: 1.5rem;
        }
        .faq-list :global(.faq-answer ol li),
        .faq-list :global(.faq-answer ul li) {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--gray-deep);
          padding: 0.3rem 0;
        }
        .faq-list :global(.faq-answer ol) {
          list-style: none;
          counter-reset: ol-counter;
        }
        .faq-list :global(.faq-answer ol li) {
          counter-increment: ol-counter;
          position: relative;
          padding-left: 2rem;
        }
        .faq-list :global(.faq-answer ol li::before) {
          content: counter(ol-counter);
          position: absolute;
          left: 0;
          top: 0.4rem;
          width: 1.4rem;
          height: 1.4rem;
          background: var(--yellow-soft);
          border: 1px solid var(--gold-luxury);
          color: var(--gold-dark);
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
