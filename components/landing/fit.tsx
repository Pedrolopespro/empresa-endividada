const yes = [
  "Sua empresa deve para bancos ou outros credores.",
  "As dívidas já estão apertando o caixa.",
  "Você renegocia, paga, mas a dívida continua.",
  "Já existem cobranças, processos ou bloqueios.",
  "Você já não sabe qual dívida resolver primeiro.",
];
const no = [
  "Dívidas exclusivamente pessoais.",
  "Cartão, consignado ou financiamento no CPF.",
  "Quem está procurando um novo empréstimo.",
  "Quem quer apenas “baixar os juros” de um contrato.",
  "Quem procura uma promessa de solução rápida.",
];

export function Fit() {
  return (
    <section className="section fit" id="para-quem" data-theme="papel">
      <div className="wide-shell">
        <h2 className="section-title">Para quem é a assessoria</h2>
        <div className="fit-grid">
          <FitCard title="Para quem é" items={yes} positive />
          <FitCard title="Para quem não é" items={no} />
        </div>
      </div>
    </section>
  );
}

function FitCard({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <article className={`fit-card ${positive ? "fit-card--positive" : "fit-card--negative"}`}>
      <h3>{title}</h3>
      <ul>{items.map((item) => <li key={item}><span aria-hidden="true">{positive ? "✓" : "×"}</span>{item}</li>)}</ul>
    </article>
  );
}
