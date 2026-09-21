import { MomentDeck } from "./moment-deck";

export function Moments() {
  return (
    <section className="section moments" id="momentos" data-theme="papel">
      <div className="narrative-shell moments__inner">
        <h2 className="section-title section-title--two-tone">
          <span>Uma estratégia jurídica para cada </span>
          <em>momento<br className="mobile-only" /> da sua empresa.</em>
        </h2>
        <MomentDeck />
      </div>
    </section>
  );
}
