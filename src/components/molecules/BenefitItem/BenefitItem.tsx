type BenefitItemProps = {
  title: string;
  description: string;
};

function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div className="benefit-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BenefitItem;
