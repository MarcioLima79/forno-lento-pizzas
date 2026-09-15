import ProcessStep from "@/components/molecules/ProcessStep/ProcessStep";
import type { ProcessProps } from "@/types/process";
import "./Process.css";

function Process({ title, description, steps }: ProcessProps) {
  return (
    <section className="process" id="processo">
      <div className="container">
        <div className="process-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
