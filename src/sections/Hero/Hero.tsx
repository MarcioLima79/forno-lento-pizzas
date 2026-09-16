import Button from "../../components/Button/Button";
import pizzaPicture from "../../assets/pizza-picture.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">
            Pizzas congeladas, feitas à mão em Pelotas
          </p>

          <h1 className="hero-title">
            Massa fermentada por 48h, pronta para assar quando você quiser
          </h1>

          <p className="hero-description">
            Fazemos cada pizza do jeito artesanal — fermentação lenta,
            ingredientes selecionados — e entregamos congelada, pra você assar
            em casa em 15 minutos, sem perder o ponto.
          </p>

          <div className="hero-actions">
            <Button as="a" href="#pedir">
              Fazer pedido
            </Button>

            <Button as="a" variant="secondary" href="#cardapio">
              Ver sabores
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={pizzaPicture}
            alt="Pizza artesanal recém-assada e fatiada"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
