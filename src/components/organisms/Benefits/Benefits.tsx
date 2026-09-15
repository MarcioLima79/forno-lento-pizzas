import BenefitItem from "@/components/molecules/BenefitItem/BenefitItem";
import "./Benefits.css";

const benefits = [
  {
    title: "Ingredientes locais",
    description:
      "Compramos de produtores da região sempre que possível, priorizando frescor sobre conveniência.",
  },
  {
    title: "Sem conservantes",
    description:
      "O frio é o único método de conservação. Nenhum aditivo pra prolongar validade.",
  },
  {
    title: "Lotes pequenos",
    description:
      "Produzimos em pequena escala, então cada pizza recebe atenção — não é linha de montagem.",
  },
  {
    title: "Feita pra durar bem",
    description:
      "Testamos tempo de congelamento e reaquecimento até a textura sair igual à do dia da produção.",
  },
];

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="container benefits-grid">
        <h2>Por que congelado não é sinônimo de industrializada</h2>
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
