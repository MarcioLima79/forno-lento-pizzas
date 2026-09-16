import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "@/components/atoms/Button/Button";
import { orderUrl } from "@/data/contact";
import "./Header.css";

const navItems = [
  { label: "Como funciona", href: "#processo", opensMenu: false },
  { label: "Cardápio", href: "#cardapio", opensMenu: true },
  { label: "Entrega", href: "#entrega", opensMenu: false },
];

type HeaderProps = {
  onMenuClick?: () => void;
};

function Header({ onMenuClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onMenuClick) {
      event.preventDefault();
      closeMobileMenu();
      onMenuClick();
      return;
    }

    closeMobileMenu();
  };

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
                <a
                  className="header-link"
                  href={item.href}
                  onClick={item.opensMenu ? handleMenuClick : closeMobileMenu}
                >
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
          Peça já a sua
        </Button>

        <a
          className="header-menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <IoClose aria-hidden="true" />
          ) : (
            <IoMenu aria-hidden="true" />
          )}
        </a>
      </div>

      <nav
        className={`header-mobile-nav ${isMobileMenuOpen ? "header-mobile-nav-open" : ""}`}
        id="mobile-navigation"
        aria-label="Menu mobile"
      >
        <ul className="header-mobile-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="header-mobile-link"
                href={item.href}
                onClick={item.opensMenu ? handleMenuClick : closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="header-mobile-link"
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              Fazer pedido
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
