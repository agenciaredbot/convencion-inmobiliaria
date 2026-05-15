"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { fbqTrack } from "@/lib/fbpixel";

const CALCULATOR_DATA = {
  medellin: {
    pricePerSqm: 2000,
    avgUnitSize: 65,
    valorizationRate: 0.2,
    monthlyRentRate: 0.012,
  },
  rd: {
    avgUnitPrice: 180000,
    valorizationRate: 0.125,
    monthlyRentRate: 0.009,
  },
  cancun: {
    avgUnitPrice: 195000,
    valorizationRate: 0.11,
    monthlyRentRate: 0.008,
  },
  miami: {
    downPaymentRate: 0.2,
    valorizationRate: 0.034,
    monthlyRentNet: 0.0006,
  },
};

const MIN = 50_000;
const MAX = 2_000_000;
const STEP = 10_000;

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

function compute(capital: number) {
  // Medellín
  const medellinUnitPrice =
    CALCULATOR_DATA.medellin.pricePerSqm * CALCULATOR_DATA.medellin.avgUnitSize;
  const medellinUnits = Math.floor(capital / medellinUnitPrice);
  const medellinInvested = medellinUnits * medellinUnitPrice;
  const medellinValor = medellinInvested * CALCULATOR_DATA.medellin.valorizationRate;
  const medellinRent = medellinInvested * CALCULATOR_DATA.medellin.monthlyRentRate;
  const medellinROI = capital > 0 ? ((medellinValor + medellinRent * 12) / capital) * 100 : 0;

  // RD
  const rdUnits = Math.floor(capital / CALCULATOR_DATA.rd.avgUnitPrice);
  const rdInvested = rdUnits * CALCULATOR_DATA.rd.avgUnitPrice;
  const rdValor = rdInvested * CALCULATOR_DATA.rd.valorizationRate;
  const rdRent = rdInvested * CALCULATOR_DATA.rd.monthlyRentRate;
  const rdROI = capital > 0 ? ((rdValor + rdRent * 12) / capital) * 100 : 0;

  // Cancún
  const cancunUnits = Math.floor(capital / CALCULATOR_DATA.cancun.avgUnitPrice);
  const cancunInvested = cancunUnits * CALCULATOR_DATA.cancun.avgUnitPrice;
  const cancunValor = cancunInvested * CALCULATOR_DATA.cancun.valorizationRate;
  const cancunRent = cancunInvested * CALCULATOR_DATA.cancun.monthlyRentRate;
  const cancunROI = capital > 0 ? ((cancunValor + cancunRent * 12) / capital) * 100 : 0;

  // Miami (con apalancamiento — capital = down payment)
  const miamiPropertyValue = capital / CALCULATOR_DATA.miami.downPaymentRate;
  const miamiValor = miamiPropertyValue * CALCULATOR_DATA.miami.valorizationRate;
  const miamiRent = miamiPropertyValue * CALCULATOR_DATA.miami.monthlyRentNet;
  const miamiROI = capital > 0 ? ((miamiValor + miamiRent * 12) / capital) * 100 : 0;

  const bestROI = Math.max(medellinROI, rdROI, cancunROI);

  return {
    medellin: {
      units:
        medellinUnits > 0
          ? `${medellinUnits} apartamento${medellinUnits > 1 ? "s" : ""}`
          : "Cuota inicial",
      detail:
        medellinUnits > 0
          ? `de ${CALCULATOR_DATA.medellin.avgUnitSize}m² en El Poblado o Laureles`
          : "para reservar tu primera unidad",
      valor: `+${fmt(medellinValor)}`,
      rent: `${fmt(medellinRent)}/mes`,
      roi: `${medellinROI.toFixed(1)}%`,
    },
    rd: {
      units:
        rdUnits === 1
          ? "1 villa premium"
          : rdUnits > 1
          ? `${rdUnits} villas/condos`
          : "Cuota inicial",
      detail:
        rdUnits >= 1
          ? "o condos boutique en Bávaro"
          : "para reservar en preventa",
      valor: `+${fmt(rdValor)}`,
      rent: `${fmt(rdRent)}/mes`,
      roi: `${rdROI.toFixed(1)}%`,
    },
    cancun: {
      units:
        cancunUnits >= 1
          ? `${cancunUnits} condo${cancunUnits > 1 ? "s" : ""} premium`
          : "Cuota inicial",
      detail:
        cancunUnits >= 1
          ? "a 10 min de la zona hotelera"
          : "para reservar en preventa",
      valor: `+${fmt(cancunValor)}`,
      rent: `${fmt(cancunRent)}/mes`,
      roi: `${cancunROI.toFixed(1)}%`,
    },
    miami: {
      units: capital < 140_000 ? "Solo cuota inicial" : "1 condo (con hipoteca)",
      detail: "de 1 condo en zona estándar",
      valor: `+${fmt(miamiValor)}`,
      rent: `${fmt(miamiRent)}/mes*`,
      roi: `${miamiROI.toFixed(1)}%`,
    },
    summaryAmount: fmt(capital),
    summaryROI: `${bestROI.toFixed(1)}% ROI`,
  };
}

export default function SectionCalculator() {
  const [capital, setCapital] = useState(200_000);
  const tracked = useRef(false);
  const results = useMemo(() => compute(capital), [capital]);

  // Track engagement once on first slider/input change
  useEffect(() => {
    if (capital !== 200_000 && !tracked.current) {
      tracked.current = true;
      fbqTrack("CalculatorEngaged", { capital });
    }
  }, [capital]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    const v = parseInt(raw || "0", 10);
    if (!Number.isNaN(v)) setCapital(Math.min(MAX, Math.max(MIN, v)));
  };
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapital(parseInt(e.target.value, 10));
  };

  const sliderProgress = ((capital - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="calc" id="calculadora">
      <div className="v2-container">
        <header className="calc-header reveal">
          <span className="section-number calc-number" aria-hidden="true">01</span>
          <span className="section-marker">— Calculadora interactiva</span>
          <h2 className="h-section">
            ¿Cuánto vale tu capital
            <br />
            <em className="emphasis-gold">en LATAM hoy?</em>
          </h2>
          <p className="body-text calc-intro">
            Ingresa cuánto tienes disponible para invertir y descubre exactamente
            qué te puede comprar en cada uno de los 5 mercados del Club.{" "}
            <strong>Datos reales, no estimaciones genéricas.</strong>
          </p>
        </header>

        <div className="calc-wrap reveal">
          <div className="calc-input">
            <label htmlFor="capital-input">Tu capital disponible</label>
            <div className="input-currency">
              <span className="currency-symbol">$</span>
              <input
                id="capital-input"
                type="text"
                inputMode="numeric"
                value={capital.toLocaleString("en-US")}
                onChange={onInputChange}
                aria-label="Capital disponible en USD"
              />
              <span className="currency-code">USD</span>
            </div>
            <input
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={capital}
              onChange={onSliderChange}
              className="capital-slider"
              style={{
                background: `linear-gradient(to right, var(--gold-luxury) 0%, var(--gold-luxury) ${sliderProgress}%, var(--gray-border) ${sliderProgress}%, var(--gray-border) 100%)`,
              }}
              aria-label="Capital slider"
            />
            <div className="slider-labels">
              <span>$50K</span>
              <span>$500K</span>
              <span>$1M</span>
              <span>$2M+</span>
            </div>
          </div>

          <div className="calc-results">
            <article className="result-card">
              <header className="result-header">
                <span className="result-flag" aria-hidden="true">🇨🇴</span>
                <h3>Medellín</h3>
              </header>
              <div className="result-main">
                <span className="result-label">Te alcanza para:</span>
                <span className="result-value">{results.medellin.units}</span>
                <span className="result-detail">{results.medellin.detail}</span>
              </div>
              <div className="result-projection">
                <div className="proj-row">
                  <span className="proj-label">Valorización año 1</span>
                  <span className="proj-value">{results.medellin.valor}</span>
                </div>
                <div className="proj-row">
                  <span className="proj-label">Renta mensual Airbnb</span>
                  <span className="proj-value">{results.medellin.rent}</span>
                </div>
                <div className="proj-row proj-total">
                  <span className="proj-label">ROI proyectado año 1</span>
                  <span className="proj-value">{results.medellin.roi}</span>
                </div>
              </div>
            </article>

            <article className="result-card">
              <header className="result-header">
                <span className="result-flag" aria-hidden="true">🇩🇴</span>
                <h3>Punta Cana</h3>
              </header>
              <div className="result-main">
                <span className="result-label">Te alcanza para:</span>
                <span className="result-value">{results.rd.units}</span>
                <span className="result-detail">{results.rd.detail}</span>
              </div>
              <div className="result-projection">
                <div className="proj-row">
                  <span className="proj-label">Valorización año 1</span>
                  <span className="proj-value">{results.rd.valor}</span>
                </div>
                <div className="proj-row">
                  <span className="proj-label">Renta mensual turística</span>
                  <span className="proj-value">{results.rd.rent}</span>
                </div>
                <div className="proj-row proj-total">
                  <span className="proj-label">ROI proyectado año 1</span>
                  <span className="proj-value">{results.rd.roi}</span>
                </div>
              </div>
            </article>

            <article className="result-card">
              <header className="result-header">
                <span className="result-flag" aria-hidden="true">🇲🇽</span>
                <h3>Cancún</h3>
              </header>
              <div className="result-main">
                <span className="result-label">Te alcanza para:</span>
                <span className="result-value">{results.cancun.units}</span>
                <span className="result-detail">{results.cancun.detail}</span>
              </div>
              <div className="result-projection">
                <div className="proj-row">
                  <span className="proj-label">Valorización año 1</span>
                  <span className="proj-value">{results.cancun.valor}</span>
                </div>
                <div className="proj-row">
                  <span className="proj-label">Renta mensual turística</span>
                  <span className="proj-value">{results.cancun.rent}</span>
                </div>
                <div className="proj-row proj-total">
                  <span className="proj-label">ROI proyectado año 1</span>
                  <span className="proj-value">{results.cancun.roi}</span>
                </div>
              </div>
            </article>

            <article className="result-card result-comparison">
              <header className="result-header">
                <span className="result-flag" aria-hidden="true">🇺🇸</span>
                <h3>Miami (comparativo)</h3>
              </header>
              <div className="result-main">
                <span className="result-label">El mismo capital en Miami:</span>
                <span className="result-value">{results.miami.units}</span>
                <span className="result-detail">{results.miami.detail}</span>
              </div>
              <div className="result-projection">
                <div className="proj-row">
                  <span className="proj-label">Valorización año 1</span>
                  <span className="proj-value">{results.miami.valor}</span>
                </div>
                <div className="proj-row">
                  <span className="proj-label">Renta mensual neta</span>
                  <span className="proj-value">{results.miami.rent}</span>
                </div>
                <div className="proj-row proj-total">
                  <span className="proj-label">ROI proyectado año 1</span>
                  <span className="proj-value">{results.miami.roi}</span>
                </div>
              </div>
              <p className="result-footnote">
                *Después de gastos, impuestos y HOA
              </p>
            </article>
          </div>

          <footer className="calc-cta">
            <p className="calc-summary">
              Con <strong>{results.summaryAmount}</strong> en LATAM puedes obtener
              hasta <strong>{results.summaryROI}</strong> en el primer año. En
              Miami, máximo <strong>{results.miami.roi}</strong>.
            </p>
            <a href="#asesoria" className="btn btn--luxury btn--large">
              Quiero la asesoría gratuita para mi caso{" "}
              <span className="btn-icon">→</span>
            </a>
            <p className="calc-disclaimer">
              *Cálculos basados en data 2026 de La Lonja de Medellín, Camacol,
              AirDNA y MIAMI Realtors®. Rentabilidades reales pueden variar
              según proyecto específico.
            </p>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .calc {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
        }
        .calc-header {
          position: relative;
          text-align: center;
          margin-bottom: 3rem;
        }
        .calc-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.calc-header h2),
        :global(.calc-header .section-marker),
        :global(.calc-header .body-text) {
          position: relative;
          z-index: 1;
        }
        :global(.calc-header .section-marker) { margin-bottom: 1rem; }
        :global(.calc-header h2) { margin-bottom: 1.25rem; }
        .calc-intro { max-width: 720px; margin: 0 auto; }

        .calc-wrap {
          background: var(--cream);
          border: 1px solid var(--gold-luxury);
          padding: var(--v2-space-5);
          margin-top: var(--v2-space-5);
          box-shadow: 0 24px 60px rgba(154, 126, 63, 0.08);
        }
        .calc-input {
          text-align: center;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--gold-luxury);
          margin-bottom: 2.5rem;
        }
        .calc-input label {
          display: block;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        .input-currency {
          display: inline-flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .currency-symbol {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2.5rem;
          font-weight: 300;
          color: var(--gold-luxury);
        }
        .input-currency input {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 400;
          text-align: center;
          background: transparent;
          border: none;
          border-bottom: 2px solid var(--gold-luxury);
          width: clamp(180px, 45vw, 320px);
          color: var(--black-primary);
          padding: 0.25rem 0;
          letter-spacing: -0.02em;
        }
        .input-currency input:focus {
          outline: none;
          border-color: var(--yellow-brand);
        }
        .currency-code {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.875rem;
          color: var(--gold-dark);
          letter-spacing: 0.1em;
        }
        .capital-slider {
          width: 100%;
          max-width: 600px;
          height: 4px;
          -webkit-appearance: none;
          appearance: none;
          margin: 1.25rem auto 0.75rem;
          display: block;
          border-radius: 2px;
          cursor: pointer;
        }
        .capital-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: var(--gold-luxury);
          border: 3px solid var(--off-white);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.15s ease;
        }
        .capital-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .capital-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: var(--gold-luxury);
          border: 3px solid var(--off-white);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .slider-labels {
          display: flex;
          justify-content: space-between;
          max-width: 600px;
          margin: 0 auto;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          color: var(--gray-text);
          letter-spacing: 0.05em;
        }

        .calc-results {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .result-card {
          background: var(--off-white);
          border: 1px solid var(--gold-luxury);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
        }
        .result-comparison {
          background: var(--gray-border);
          opacity: 0.92;
        }
        .result-comparison:hover { transform: none; box-shadow: none; }
        .result-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--gray-border);
          margin-bottom: 0.5rem;
        }
        .result-flag { font-size: 1.5rem; }
        .result-header h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.2rem;
          font-weight: 500;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .result-main { display: flex; flex-direction: column; gap: 0.25rem; }
        .result-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-text);
        }
        .result-value {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.45rem;
          font-weight: 500;
          color: var(--black-primary);
          line-height: 1.2;
          letter-spacing: -0.015em;
        }
        .result-detail {
          font-size: 0.8125rem;
          color: var(--gray-text);
          font-style: italic;
          line-height: 1.4;
        }
        .result-projection {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--gray-border);
        }
        .proj-row {
          display: flex;
          justify-content: space-between;
          padding: 0.4rem 0;
          font-size: 0.8125rem;
          gap: 0.5rem;
        }
        .proj-label { color: var(--gray-text); flex: 1; }
        .proj-value {
          font-weight: 600;
          color: var(--black-primary);
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }
        .proj-total {
          margin-top: 0.4rem;
          padding-top: 0.65rem;
          border-top: 1px dashed var(--gold-luxury);
        }
        .proj-total .proj-value {
          color: var(--gold-dark);
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
        }
        .result-footnote {
          font-size: 0.65rem;
          color: var(--gray-text);
          margin: 0.5rem 0 0;
          font-style: italic;
        }
        .calc-cta {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--gold-luxury);
        }
        .calc-summary {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          font-style: italic;
          margin: 0 auto 1.5rem;
          max-width: 720px;
          line-height: 1.4;
          color: var(--gray-deep);
        }
        .calc-summary strong {
          color: var(--gold-dark);
          font-style: normal;
          font-weight: 600;
        }
        .calc-disclaimer {
          margin-top: 1.25rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          color: var(--gray-text);
          letter-spacing: 0.04em;
          line-height: 1.5;
        }
        @media (max-width: 1023px) { .calc-results { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) {
          .calc-results { grid-template-columns: 1fr; }
          .calc-wrap { padding: 1.75rem 1.25rem; }
        }
      `}</style>
    </section>
  );
}
