"use client";

import * as Accordion from "@radix-ui/react-accordion";

const steps = [
  { id: "diagnostico", title: "Diagnóstico", summary: "Análise de contratos e garantias", intro: "Antes de qualquer negociação, entendemos contratos, garantias e cobranças em curso.", items: ["Contratos bancários", "Garantias envolvidas", "Cobranças em curso"] },
  { id: "mapeamento", title: "Mapeamento", summary: "Mapeamento completo das dívidas", intro: "Reunimos credores, valores, prioridades e processos em uma visão única.", items: ["Credores e valores", "Vencimentos e prioridades", "Processos e riscos"] },
  { id: "estrategia", title: "Estratégia", summary: "Estratégia para organização e negociação de dívidas", intro: "Com o cenário organizado, definimos a ordem de atuação e os caminhos possíveis para cada frente.", items: ["Prioridade por risco", "Negociação por credor", "Alternativas jurídicas"] },
  { id: "defesa", title: "Defesa e suporte", summary: "Defesa jurídica dentro e fora dos tribunais e suporte contínuo", intro: "Atuamos nas negociações e, quando necessário, em processos e execuções.", items: ["Execuções e bloqueios", "Negociações", "Acompanhamento contínuo"] },
];

export function Methodology() {
  return (
    <section className="section methodology" id="metodologia" data-theme="papel">
      <div className="narrative-shell methodology__inner">
        <h2 className="section-title">Metodologia de ponta a ponta</h2>
        <Accordion.Root type="single" collapsible defaultValue="diagnostico" className="method-stack">
          {steps.map((step, index) => (
            <Accordion.Item value={step.id} key={step.id} className="method-card">
              <Accordion.Header asChild>
                <h3>
                  <Accordion.Trigger className="method-trigger">
                    <span className="method-left">
                      <span className="method-name">{step.title}</span>
                      <strong className="method-number">{String(index + 1).padStart(2, "0")}</strong>
                    </span>
                    <span className="method-dot" aria-hidden="true" />
                    <span className="method-summary">{step.summary}</span>
                  </Accordion.Trigger>
                </h3>
              </Accordion.Header>
              <Accordion.Content className="method-content">
                <div className="method-content__inner">
                  <p>{step.intro}</p>
                  <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
