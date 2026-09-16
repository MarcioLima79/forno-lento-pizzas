import { useState } from "react";
import LandingPageTemplate from "@/components/templates/LandingPageTemplate/LandingPageTemplate";
import PizzaSelectionTemplate from "@/components/templates/PizzaSelectionTemplate/PizzaSelectionTemplate";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return isMenuOpen ? (
    <PizzaSelectionTemplate onBack={() => setIsMenuOpen(false)} />
  ) : (
    <LandingPageTemplate onOpenMenu={() => setIsMenuOpen(true)} />
  );
}

export default App;
