import Button from "@/components/atoms/Button/Button";
import type { FooterProps } from "@/types/footer";
import "./Footer.css";

function Footer({
  title,
  action,
  socialTitle,
  socialLinks,
  copyright,
}: FooterProps) {
  return (
    <section className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-top">
          <h2 className="footer-order">{title}</h2>
          <Button
            as="a"
            variant="inverted"
            className="footer-button"
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            icon={action.icon}
          >
            {action.label}
          </Button>
        </div>
        <div className="footer-bottom">
          <div className="footer-social-links">
            <h3 className="footer-title">{socialTitle}</h3>
            {socialLinks.map((link) => (
              <a
                className="footer-social-link"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <small className="footer-copyright">{copyright}</small>
        </div>
      </div>
    </section>
  );
}

export default Footer;
