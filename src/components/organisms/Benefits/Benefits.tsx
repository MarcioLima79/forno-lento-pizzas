import BenefitItem from "@/components/molecules/BenefitItem/BenefitItem";
import type { BenefitsProps } from "@/types/benefit";
import "./Benefits.css";

function Benefits({ title, items }: BenefitsProps) {
  return (
    <section className="benefits" id="benefits">
      <div className="container benefits-grid">
        <h2>{title}</h2>
        <div className="benefits-list">
          {items.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
