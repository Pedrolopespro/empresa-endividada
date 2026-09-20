"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const areas = [
  { id: "01", img: "/images/practice/01-contratos.webp", title: "Contratos e dívidas bancárias", body: "Contratos, garantias e obrigações com instituições financeiras." },
  { id: "02", img: "/images/practice/02-negociacao.webp", title: "Negociação com credores", body: "Bancos, fornecedores e outros compromissos da empresa." },
  { id: "03", img: "/images/practice/03-cobrancas.webp", title: "Cobranças e execuções", body: "Defesa diante de cobranças judiciais, execuções e bloqueios." },
  { id: "04", img: "/images/practice/04-garantias.webp", title: "Garantias e exposição patrimonial", body: "Análise das garantias envolvidas e dos riscos relacionados à dívida." },
  { id: "05", img: "/images/practice/05-recuperacao.webp", title: "Recuperação judicial", body: "Avaliação quando uma reorganização mais ampla precisa ser considerada." },
];

export function PracticeSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, scroll: 0 });

  return (
    <section className="section practice" id="atuacao" data-theme="noite">
      <div className="wide-shell practice__head">
        <h2 className="section-title section-title--light">Onde nossa atuação entra</h2>
        <p>Uma estratégia pode exigir diferentes frentes jurídicas ao longo do caminho.</p>
      </div>
      <div
        ref={ref}
        className={`practice-track ${dragging ? "is-dragging" : ""}`}
        onPointerDown={(e) => { if (e.pointerType === "touch") return; setDragging(true); start.current = { x: e.clientX, scroll: ref.current?.scrollLeft ?? 0 }; ref.current?.setPointerCapture(e.pointerId); }}
        onPointerMove={(e) => { if (!dragging || !ref.current) return; ref.current.scrollLeft = start.current.scroll - (e.clientX - start.current.x); }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        aria-label="Áreas de atuação"
      >
        {areas.map((area) => (
          <article className="practice-card" key={area.id}>
            <div className="practice-card__visual"><Image src={area.img} alt="" fill sizes="(min-width: 900px) 340px, 82vw" /></div>
            <div className="practice-card__copy">
              <small>{area.id} · atuação</small>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="wide-shell practice-hint"><span>arraste para explorar</span><i /><b>05 áreas</b></div>
    </section>
  );
}
