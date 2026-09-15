type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="process-step">
      <div className="process-step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProcessStep;
