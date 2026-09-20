"use client";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  ["Minha empresa está endividada e não consegue pagar tudo. Por onde começar?", "O primeiro passo é entender o cenário completo: credores, valores, garantias, contratos, cobranças e processos existentes."],
  ["É possível negociar dívidas bancárias de uma empresa?", "Sim. As possibilidades dependem do contrato, das garantias, da situação financeira da empresa e das condições apresentadas por cada credor."],
  ["O banco pode bloquear a conta da empresa por causa de uma dívida?", "Em determinadas situações, uma cobrança judicial pode resultar em medidas como bloqueio de valores. A análise depende do processo e das circunstâncias do caso."],
  ["Dívidas com bancos, fornecedores e funcionários podem fazer parte da mesma estratégia?", "Podem fazer parte de uma análise conjunta, porque toda a estrutura do passivo interfere no caixa e na continuidade da operação."],
  ["Quando uma empresa deve considerar recuperação judicial?", "Quando a reorganização pontual das dívidas já não é suficiente, a recuperação judicial pode ser uma das alternativas a serem avaliadas conforme a realidade da empresa."],
];

export function Faq() {
  return (
    <section className="section faq" id="faq" data-theme="papel">
      <div className="narrative-shell">
        <h2 className="section-title">Perguntas frequentes</h2>
        <Accordion.Root type="single" collapsible className="faq-list">
          {faqs.map(([question, answer], i) => (
            <Accordion.Item value={`faq-${i}`} key={question} className="faq-item">
              <Accordion.Header asChild><h3><Accordion.Trigger className="faq-trigger"><span>{question}</span><i aria-hidden="true">+</i></Accordion.Trigger></h3></Accordion.Header>
              <Accordion.Content className="faq-content"><div><p>{answer}</p></div></Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
