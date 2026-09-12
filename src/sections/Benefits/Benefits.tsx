import "./Benefits.css";

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="container benefits-grid">
        {/* <div className="benefits-grid"> */}
        <h2>Por que congelado não é sinônimo de industrializada</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Ingredientes locais</h3>
            <p>
              Compramos de produtores da região sempre que possível, priorizando
              frescor sobre conveniência.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Sem conservantes</h3>
            <p>
              O frio é o único método de conservação. Nenhum aditivo pra
              prolongar validade.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Lotes pequenos</h3>
            <p>
              Produzimos em pequena escala, então cada pizza recebe atenção —
              não é linha de montagem.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Feita pra durar bem</h3>
            <p>
              Testamos tempo de congelamento e reaquecimento até a textura sair
              igual à do dia da produção.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Benefits;
