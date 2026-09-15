import Button from "@/components/atoms/Button/Button";
import { orderUrl } from "@/data/contact";
import "./Header.css";

const navItems = [
  { label: "Como funciona", href: "#processo" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Entrega", href: "#entrega" },
];

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="header-brand" href="#inicio">
          Forno
          <span className="header-brand-highlight">&amp;</span>
          Massa
        </a>

        <nav className="header-nav" aria-label="Menu principal">
          <ul className="header-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="header-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          as="a"
          className="header-cta"
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir pelo WhatsApp
        </Button>
      </div>
    </header>
  );
}

export default Header;
