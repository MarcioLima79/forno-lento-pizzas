import "./Header.css"

const navItems = [
  { label: "Como funciona", href: "#processo" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Entrega", href: "#entrega" },
]

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#inicio">
          Forno
          <span className="header__brand-highlight">&amp;</span>
          Massa
        </a>

        <nav className="header__nav" aria-label="Menu principal">
          <ul className="header__menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="header__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="header__cta" href="#pedir">
          Pedir pelo WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header