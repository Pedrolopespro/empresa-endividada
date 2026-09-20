import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Image src="/images/brand/logo-branca.webp" alt="Empresa Endividada" width={1024} height={224} className="footer__logo" />
        <nav className="footer__social" aria-label="Redes sociais">
          <a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="YouTube">YT</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="TikTok">TT</a>
        </nav>
        <p className="footer__legal"><strong>Aviso legal:</strong> Este atendimento tem caráter informativo e consultivo. Ao enviar seus dados, você concorda com nossa <a href="#">Política de Privacidade</a> e autoriza o uso das informações fornecidas para comunicações relacionadas aos nossos serviços, conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD).</p>
        <p className="footer__copy">2026. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
