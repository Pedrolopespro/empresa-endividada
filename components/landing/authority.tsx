import Image from "next/image";
import { PrimaryCta } from "@/components/ui/cta";

export function Authority() {
  return (
    <section className="section authority" id="contato" data-theme="papel">
      <div className="wide-shell authority-grid">
        <div className="authority-photo"><Image src="/images/hero/luana-portrait.webp" alt="Dra. Luana Lima" fill sizes="(min-width: 900px) 480px, 100vw" /></div>
        <div className="authority-copy">
          <p className="eyebrow">A experiência por trás do Empresa Endividada</p>
          <h2>Dra. Luana Lima</h2>
          <p>Advogada há 17 anos, fundadora do Lima Ferreira Advogados e autora de obra sobre crédito bancário e atividade empresarial.</p>
          <p>O Empresa Endividada nasce dessa experiência prática e acadêmica. Uma atuação voltada a entender o cenário completo das dívidas e definir estratégias jurídicas de acordo com a realidade de cada empresa.</p>
          <PrimaryCta />
        </div>
      </div>
    </section>
  );
}
