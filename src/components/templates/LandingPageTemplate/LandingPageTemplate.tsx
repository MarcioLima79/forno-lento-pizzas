import Benefits from "@/components/organisms/Benefits/Benefits";
import Delivery from "@/components/organisms/Delivery/Delivery";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import Hero from "@/components/organisms/Hero/Hero";
import Menu from "@/components/organisms/Menu/Menu";
import Process from "@/components/organisms/Process/Process";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { orderUrl } from "@/data/contact";
import type { Benefit } from "@/types/benefit";
import type { ProcessStepData } from "@/types/process";

const benefits: Benefit[] = [
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

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fornolento.pelotas/",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/fornolento.pelotas",
    icon: <FaFacebook aria-hidden="true" />,
  },
];

const processSteps: ProcessStepData[] = [
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

function LandingPageTemplate() {
  return (
    <main>
      <Header />
      <Hero />
      <Process
        title="Da nossa cozinha para seu forno"
        description="Um processo simples, pensado pra manter o sabor de recém-feita mesmo depois de congelada."
        steps={processSteps}
      />
      <Menu />
      <Benefits
        title="Por que congelada não é sinônimo de industrializada"
        items={benefits}
      />
      <Delivery />
      <Footer
        title="Pronto para pedir?"
        action={{
          label: "Pedir pelo WhatsApp",
          href: orderUrl,
          icon: <FaWhatsapp aria-hidden="true" />,
        }}
        socialTitle="Acompanhe nossas redes sociais"
        socialLinks={socialLinks}
        copyright={`© ${new Date().getFullYear()} Forno & Massa. Todos os direitos reservados.`}
      />
    </main>
  );
}

export default LandingPageTemplate;
