import Image from "next/image";
import { PrimaryCta } from "@/components/ui/cta";
import { SocialProofCard } from "./social-proof";

export function Hero() {
  return (
    <section className="hero" id="hero" data-theme="noite">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__halo" aria-hidden="true" />
      <div className="hero__inner">
        <Image className="hero__logo" src="/images/brand/logo-branca.webp" alt="Empresa Endividada" width={1024} height={224} priority />

        <div className="hero__media">
          <div className="service-pill hero-enter hero-enter--1">
            <span className="service-pill__dot" aria-hidden="true"><i /></span>
            <span>assessoria jurídica para empresas endividadas</span>
          </div>

          <div className="vsl hero-enter hero-enter--2" aria-label="Vídeo de apresentação">
            <Image src="/images/hero/luana-vsl.webp" alt="Dra. Luana Lima apresentando a assessoria" fill priority sizes="(min-width: 1024px) 960px, calc(100vw - 48px)" className="vsl__poster" />
            <span className="vsl__shade" aria-hidden="true" />
            <button type="button" className="vsl__play" aria-label="Reproduzir vídeo" disabled>
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
        </div>

        <div className="hero__copy">
          <h1 className="hero-title" aria-label="Sua empresa está endividada?">
            <span className="hero-title__line hero-enter hero-enter--3">Sua empresa</span>
            <span className="hero-title__line hero-title__line--muted hero-enter hero-enter--4">está endividada?</span>
          </h1>
          <p className="hero-lead hero-enter hero-enter--5">
            <span>Estratégia jurídica sob medida</span><br />
            <span>para reorganizar as dívidas da sua empresa</span>
          </p>
          <PrimaryCta className="hero-enter hero-enter--6" />
        </div>

        <div className="hero__proof hero-enter hero-enter--7"><SocialProofCard /></div>
      </div>
    </section>
  );
}
