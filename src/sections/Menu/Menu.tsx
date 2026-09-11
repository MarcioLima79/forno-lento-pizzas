import "./Menu.css";

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <div className="menu-head">
          <h2>Sabores da semana</h2>
          <a href="#cardapio">Ver cardápio completo</a>
        </div>
        <div className="sabores">
          <div className="sabor">
            <div className="tag">Clássica</div>
            <h3>Muçarela de búfula</h3>
            <p>
              Molho de tomate italiano, muçarela de búfala e manjericão fresco
              por cima, na saída do forno.
            </p>
            <div className="preco">R$ 42,00</div>
          </div>
          <div className="sabor">
            <div className="tag">Assinatura</div>
            <h3>Linguiça artesanal e cebola</h3>
            <p>
              Linguiça defumada da região, cebola caramelizada lentamente e
              queijo provolone.
            </p>
            <div className="preco">R$ 48,00</div>
          </div>
          <div className="sabor">
            <div className="tag">Vegetariana</div>
            <h3>Abóbora e alecrim</h3>
            <p>
              Abóbora assada, ricota temperada, alecrim e um fio de mel no
              final.
            </p>
            <div className="preco">R$ 48,00</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
