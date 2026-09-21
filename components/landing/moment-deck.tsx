"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform, type PanInfo } from "motion/react";
import { useState } from "react";

const source = [
  { id: "01", img: "/images/moments/01-caixa-apertou.png", title: "O caixa apertou", body: "Parcelas, juros e compromissos começaram a consumir o capital de giro." },
  { id: "02", img: "/images/moments/02-credores-pressionam.png", title: "Os credores começaram a pressionar", body: "Bancos, fornecedores e outras dívidas disputam o mesmo caixa." },
  { id: "03", img: "/images/moments/03-cobranca-ou-processo.png", title: "A dívida virou cobrança ou processo", body: "Execuções, bloqueios e passivos já afetam a operação." },
  { id: "04", img: "/images/moments/04-reorganizacao.png", title: "A empresa precisa se reorganizar", body: "Quando negociar uma dívida por vez já não resolve." },
];

export function MomentDeck() {
  const [cards, setCards] = useState(source);
  const reduce = useReducedMotion();
  const front = cards[0];
  const originalPosition = source.findIndex((item) => item.id === front.id) + 1;

  function next() {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  }

  return (
    <div className="deck-block">
      <div className="deck" tabIndex={0} onKeyDown={(e) => { if (["ArrowRight", "Enter", " "].includes(e.key)) { e.preventDefault(); next(); } }}>
        {cards.map((card, index) => (
          <DeckCard key={card.id} card={card} index={index} onDismiss={next} reduce={Boolean(reduce)} />
        ))}
      </div>
      <div className="deck-footer">
        <p>arraste a carta <span>{String(originalPosition).padStart(2, "0")} / 04</span></p>
        <button type="button" onClick={next} aria-label="Próxima carta"><svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7" /></svg></button>
      </div>
    </div>
  );
}

function DeckCard({ card, index, onDismiss, reduce }: { card: (typeof source)[number]; index: number; onDismiss: () => void; reduce: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-180, 180], [-5, 5]);
  const isFront = index === 0;
  const z = source.length - index;
  const rot = index === 0 ? 0 : 2 + index * 3;
  const tx = index * 10;
  const ty = index * -8;
  const scale = 1 - index * 0.025;

  function end(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) > 55 || Math.abs(info.offset.y) > 55) onDismiss();
    else { x.set(0); y.set(0); }
  }

  return (
    <motion.article
      className="deck-card"
      style={{ zIndex: z, x: isFront ? x : tx, y: isFront ? y : ty, rotate: isFront && !reduce ? rotate : rot, scale }}
      drag={isFront}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.18}
      onDragEnd={end}
      whileDrag={reduce ? undefined : { scale: 1.035, rotate: 0, zIndex: 20 }}
      transition={reduce ? { duration: .12 } : { type: "spring", stiffness: 300, damping: 30 }}
      aria-hidden={!isFront}
    >
      <Image src={card.img} alt="" fill sizes="320px" className="deck-card__image" priority={isFront} draggable={false} />
      <div className="deck-card__shade" />
      <div className="deck-card__copy">
        <small>momento {card.id}</small>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>
    </motion.article>
  );
}
