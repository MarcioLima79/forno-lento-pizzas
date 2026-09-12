import "./Process.css";

function Process() {
  return (
    <section className="process" id="processo">
      <div className="container">
        <div className="head">
          <h2>Da nossa cozinha para seu forno</h2>
          <p>
            Um processo simples, pensado pra manter o sabor de recém-feita mesmo
            depois de congelada.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="n">01</div>
            <h3>Fermentação</h3>
            <p>
              A massa descansa por 48 horas antes de ir ao forno, pra
              desenvolver sabor e leveza.
            </p>
          </div>
          <div className="step">
            <div className="n">02</div>
            <h3>Pré-assamento</h3>
            <p>
              Assamos parcialmente cada pizza, o suficiente pra fixar a base sem
              secar o recheio.
            </p>
          </div>
          <div className="step">
            <div className="n">03</div>
            <h3>Congelamento</h3>
            <p>
              Congelamos na hora certa, travando textura e sabor até o momento
              de você assar.
            </p>
          </div>
          <div className="step">
            <div className="n">04</div>
            <h3>Sua vez</h3>
            <p>
              15 minutos no forno de casa e ela sai como se tivesse acabado de
              ser feita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
