"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const chips = ["credores", "contratos", "garantias", "cobranças", "processos"];

export function BigPicture() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { threshold: .28 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section big-picture" id="big-picture" data-theme="noite">
      <div className="wide-shell big-picture__inner">
        <div className={`big-panel ${visible ? "is-visible" : ""}`} ref={ref}>
          <div className="big-header">
            <div className="big-lockup" aria-label="Visão completa">
              <svg viewBox="0 0 360 174" role="img" aria-hidden="true">
                <defs><linearGradient id="bigGradient" x1="0" x2="1"><stop stopColor="#b9b9b9"/><stop offset="1" stopColor="#626262"/></linearGradient></defs>
                <text x="4" y="88" fill="url(#bigGradient)" fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" fontSize="104" fontWeight="800" letterSpacing="-3">visão</text>
                <text x="7" y="150" textLength="250" lengthAdjust="spacingAndGlyphs" fill="#fff" fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" fontSize="35" fontWeight="700">completa</text>
              </svg>
            </div>
            <span className="big-divider" aria-hidden="true" />
            <p>Análise completa do<br />cenário da dívida da<br />sua empresa</p>
          </div>

          <div className="flow-map" aria-label="Credores, contratos, garantias, cobranças e processos analisados em conjunto">
            <div className="flow-row flow-row--top">
              <FlowChip label={chips[0]} delay={0} />
              <FlowLine delay={100} />
              <FlowChip label={chips[1]} delay={180} />
              <FlowLine delay={280} />
              <FlowChip label={chips[2]} delay={360} />
            </div>
            <div className="flow-row flow-row--bottom">
              <FlowChip label={chips[3]} delay={440} />
              <FlowLine delay={540} long />
              <FlowChip label={chips[4]} delay={620} />
            </div>
          </div>
        </div>

        <div className="impact-panel">
          <Image src="/images/big-picture/impacto.webp" alt="Empresário observando o cenário a partir de uma perspectiva ampla" fill sizes="(min-width: 900px) 1040px, 100vw" className="impact-panel__image" />
          <span className="impact-panel__shade" aria-hidden="true" />
          <div className="impact-panel__copy">
            <p>O jogo vira quando você<br />enxerga o todo.</p>
            <p><em>Quem entende o cenário,<br />negocia diferente.</em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowChip({ label, delay }: { label: string; delay: number }) {
  return <span className="flow-chip" style={{ "--delay": `${delay}ms` } as CSSProperties}>{label}</span>;
}
function FlowLine({ delay, long = false }: { delay: number; long?: boolean }) {
  return <span className={`flow-line ${long ? "flow-line--long" : ""}`} style={{ "--delay": `${delay}ms` } as CSSProperties} aria-hidden="true" />;
}
