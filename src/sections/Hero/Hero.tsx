import Button from "../../components/Button/Button";
import pizzaPicture from "../../assets/pizza-picture.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Pizzas congeladas, feitas à mão em Pelotas
          </p>

          <h1 className="hero__title">
            Massa fermentada por 48h, pronta para assar quando você quiser
          </h1>

          <p className="hero__description">
            Fazemos cada pizza do jeito artesanal — fermentação lenta,
            ingredientes selecionados — e entregamos congelada, pra você assar
            em casa em 15 minutos, sem perder o ponto.
          </p>

          <div className="hero__actions">
            <Button as="a" href="#pedir">
              Fazer pedido
            </Button>

            <Button as="a" variant="secondary" href="#cardapio">
              Ver sabores
            </Button>
          </div>
        </div>

        <div className="hero__visual">
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
