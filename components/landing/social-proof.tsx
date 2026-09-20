import Image from "next/image";

const avatars = [1, 2, 3, 4, 5];

export function SocialProofCard() {
  return (
    <article className="proof-card" aria-label="Prova social">
      <span className="proof-card__glint" aria-hidden="true" />
      <div className="proof-card__headline">
        <span className="live-dot" aria-hidden="true"><i /></span>
        <p>Mais de <strong>500 empresas atendidas</strong><br />em todo o Brasil</p>
      </div>
      <div className="proof-card__bottom">
        <div className="proof-avatars" aria-hidden="true">
          {avatars.map((id, index) => (
            <span key={index}><Image src={`/images/avatars/${id}.webp`} alt="" width={48} height={48} /></span>
          ))}
        </div>
        <div className="proof-stars" aria-label="Avaliação cinco de cinco">★★★★★</div>
      </div>
    </article>
  );
}
