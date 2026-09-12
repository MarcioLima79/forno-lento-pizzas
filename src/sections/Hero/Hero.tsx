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
            <a className="hero__primary-button" href="#pedir">
              Fazer pedido
            </a>

            <a className="hero__secondary-button" href="#cardapio">
              Ver sabores
            </a>
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
