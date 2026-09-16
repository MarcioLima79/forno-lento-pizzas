import Header from "@/components/organisms/Header/Header";
import PizzaSelection from "@/components/organisms/PizzaSelection/PizzaSelection";

type PizzaSelectionTemplateProps = {
  onBack: () => void;
};

function PizzaSelectionTemplate({ onBack }: PizzaSelectionTemplateProps) {
  return (
    <main>
      <Header />
      <PizzaSelection onBack={onBack} />
    </main>
  );
}

export default PizzaSelectionTemplate;
