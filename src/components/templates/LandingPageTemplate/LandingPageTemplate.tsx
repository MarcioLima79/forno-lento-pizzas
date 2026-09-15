import Benefits from "@/components/organisms/Benefits/Benefits";
import Delivery from "@/components/organisms/Delivery/Delivery";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import Hero from "@/components/organisms/Hero/Hero";
import Menu from "@/components/organisms/Menu/Menu";
import Process from "@/components/organisms/Process/Process";

function LandingPageTemplate() {
  return (
    <main>
      <Header />
      <Hero />
      <Process />
      <Menu />
      <Benefits />
      <Delivery />
      <Footer />
    </main>
  );
}

export default LandingPageTemplate;
