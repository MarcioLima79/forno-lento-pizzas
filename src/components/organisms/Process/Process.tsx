import ProcessStep from "@/components/molecules/ProcessStep/ProcessStep";
import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "Fermentação",
    description:
      "A massa descansa por 48 horas antes de ir ao forno, pra desenvolver sabor e leveza.",
  },
  {
    number: "02",
    title: "Pré-assamento",
    description:
      "Assamos parcialmente cada pizza, o suficiente pra fixar a base sem secar o recheio.",
  },
  {
    number: "03",
    title: "Congelamento",
    description:
      "Congelamos na hora certa, travando textura e sabor até o momento de você assar.",
  },
  {
    number: "04",
    title: "Sua vez",
    description:
      "15 minutos no forno de casa e ela sai como se tivesse acabado de ser feita.",
  },
];

function Process() {
  return (
    <section className="process" id="processo">
      <div className="container">
        <div className="process-header">
          <h2>Da nossa cozinha para seu forno</h2>
          <p>
            Um processo simples, pensado pra manter o sabor de recém-feita mesmo
            depois de congelada.
          </p>
        </div>
        <div className="process-steps">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
