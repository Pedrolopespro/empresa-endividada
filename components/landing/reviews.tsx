const placeholders = [1, 2, 3];

export function Reviews() {
  return (
    <section className="section reviews" id="avaliacoes" data-theme="noite">
      <div className="wide-shell">
        <div className="reviews-head">
          <h2 className="section-title section-title--light">O que nossos clientes dizem</h2>
          <div className="google-rating" aria-label="Avaliações no Google"><span>★★★★★</span><b>Avaliações no Google</b></div>
        </div>
        <div className="reviews-grid">
          {placeholders.map((id) => (
            <article className="review-card" key={id}>
              <div className="review-card__top">
                <span className="review-avatar" aria-hidden="true" />
                <div><b>Cliente Google</b><small>avaliação verificada</small></div>
                <span className="review-stars" aria-label="cinco estrelas">★★★★★</span>
              </div>
              <p>Inserir aqui um depoimento real publicado no Google.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
