"use client";

const features = [
  {
    title: "Responde 24/7 en español e inglés",
    text: "Sin pausas, sin “te respondo cuando pueda”",
  },
  {
    title: "Califica leads automáticamente",
    text: "Identifica capital, urgencia y país de interés antes de pasártelo",
  },
  {
    title: "Envía fichas de proyectos personalizadas",
    text: "Según el perfil que detecta de cada cliente",
  },
  {
    title: "Agenda llamadas en tu calendario",
    text: "Sin que muevas un dedo, listas para que solo entres y vendas",
  },
  {
    title: "Aprende de cada conversación",
    text: "Mejora con el tiempo. Suena cada vez más como tú.",
  },
];

const messages: { type: "in" | "out" | "system"; text: React.ReactNode }[] = [
  { type: "in", text: "Hola, vi tu post sobre apartamentos en Medellín. ¿Cuánto cuestan?" },
  {
    type: "out",
    text: (
      <>
        ¡Hola! Tenemos opciones desde $80K USD en El Poblado. Para recomendarte
        la mejor, ¿me cuentas?
        <br />
        1. ¿Cuál es tu capital aproximado?
        <br />
        2. ¿Buscas Airbnb o vivienda?
      </>
    ),
  },
  { type: "in", text: "Tengo unos $150K. Para renta corta." },
  {
    type: "out",
    text: "Perfecto. Te recomiendo 3 proyectos con ROI 18-22% anual. Te envío fichas técnicas. ¿Te llamo mañana a las 3pm para mostrártelos?",
  },
  { type: "in", text: "Sí, perfecto." },
  {
    type: "system",
    text: "✓ Lead calificado · Llamada agendada · Notificación enviada a Carlos M.",
  },
];

export default function SectionAIAgent() {
  return (
    <section className="ai" id="agente-ia">
      <div className="v2-container">
        <div className="ai-grid">
          <div className="ai-content reveal">
            <span className="section-number ai-number" aria-hidden="true">04</span>
            <span className="section-marker">— Diferenciador clave</span>
            <h2 className="h-section ai-title">
              Tu agente IA
              <br />
              trabaja mientras
              <br />
              <em className="emphasis-yellow">tú duermes.</em>
            </h2>

            <p className="ai-text">
              Mientras tus competidores responden manualmente cada mensaje de
              WhatsApp, tu agente IA del Club:
            </p>

            <ul className="ai-features">
              {features.map((f, i) => (
                <li key={i}>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="ai-versions">
              <div className="ai-version">
                <strong>Versión básica (Elite):</strong> Landing page con IA integrada
              </div>
              <div className="ai-version">
                <strong>Versión avanzada (Premium):</strong> Web + WhatsApp + conversaciones ilimitadas
              </div>
            </div>
          </div>

          <div className="ai-visual reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="chat-mockup" aria-hidden="true">
              <div className="chat-header">
                <span className="chat-avatar">🤖</span>
                <div className="chat-meta">
                  <strong>Asistente María (IA)</strong>
                  <span className="chat-status">
                    <span className="status-dot" /> En línea
                  </span>
                </div>
              </div>
              <div className="chat-body">
                {messages.map((m, i) => (
                  <div key={i} className={`chat-msg chat-${m.type}`}>
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: var(--v2-space-7);
          align-items: center;
        }
        .ai-content { position: relative; }
        .ai-number {
          position: absolute;
          top: -2.5rem;
          right: 0;
        }
        :global(.ai-content .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
        }
        .ai-title {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .ai-text {
          color: var(--cream);
          font-size: 1.0625rem;
          line-height: 1.65;
          margin: 0 0 1.5rem;
        }
        .ai-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
        }
        .ai-features li {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .ai-features li:last-child { border-bottom: none; }
        .ai-features strong {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--yellow-brand);
          letter-spacing: -0.01em;
        }
        .ai-features span {
          font-size: 0.9375rem;
          color: var(--cream);
          opacity: 0.8;
        }
        .ai-versions {
          padding: 1.5rem 1.75rem;
          background: var(--black-soft);
          border-left: 3px solid var(--gold-luxury);
        }
        .ai-version {
          padding: 0.5rem 0;
          font-size: 0.9375rem;
          color: var(--cream);
        }
        .ai-version strong {
          color: var(--gold-light);
          font-weight: 600;
        }

        .chat-mockup {
          background: var(--off-white);
          color: var(--black-primary);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(201, 169, 97, 0.2);
          max-width: 400px;
          margin: 0 auto;
        }
        .chat-header {
          background: var(--gold-dark);
          color: var(--off-white);
          padding: 1rem 1.25rem;
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .chat-avatar {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.15);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .chat-meta { display: flex; flex-direction: column; gap: 0.15rem; }
        .chat-meta strong {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: 0.95rem;
          font-weight: 600;
        }
        .chat-status {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          opacity: 0.85;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          background: #4ade80;
          border-radius: 50%;
          display: inline-block;
        }
        .chat-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          background: var(--cream);
          min-height: 380px;
        }
        .chat-msg {
          padding: 0.7rem 0.95rem;
          border-radius: 14px;
          max-width: 85%;
          font-size: 0.875rem;
          line-height: 1.45;
          font-family: var(--font-inter, 'Inter', sans-serif);
        }
        .chat-in {
          background: var(--off-white);
          align-self: flex-start;
          border-bottom-left-radius: 3px;
          color: var(--gray-deep);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
        }
        .chat-out {
          background: var(--gold-luxury);
          color: var(--off-white);
          align-self: flex-end;
          border-bottom-right-radius: 3px;
        }
        .chat-system {
          background: rgba(45, 95, 63, 0.12);
          color: var(--success);
          border: 1px solid rgba(45, 95, 63, 0.25);
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          align-self: center;
          max-width: 95%;
          text-align: center;
          letter-spacing: 0.04em;
        }

        @media (max-width: 1023px) {
          .ai-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
          .ai-number { display: none; }
          .ai-visual { order: -1; }
        }
      `}</style>
    </section>
  );
}
