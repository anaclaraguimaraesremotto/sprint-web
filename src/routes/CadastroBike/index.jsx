import './cadastro-bike.css';

export default function CadastroBike() {

  return (
    <main>
      <section className="cadastroBike">
        <h2>Cadastre sua bike</h2>
        <section className="formBike">
          <form method="post">
            <div>
              <label htmlFor="marca" className="identacao">
                Marca:
              </label>
              <input
                type="text"
                className="input"
                id="marca"
                name="marca"
                placeholder="Digite a marca da bike"
                required
              />
            </div>
            <div>
              <label htmlFor="modelo" className="identacao">
                Modelo:
              </label>
              <input
                type="text" className="input" id="modelo" name="modelo" placeholder="Digite o modelo da bike" required/>
            </div>

            <div>
              <label htmlFor="valor" className="identacao">
                Valor:
              </label>
              <select name="valor" required>
                <option value="" disabled>Selecionar</option>
                <option value="1000-3000">De 1.000 até 3.000 reais</option>
                <option value="3000-7000">De 3.000 até 7.000 reais</option>
                <option value="7000-12000">De 7.000 até 12.000 reais</option>
                <option value="12000-30000">De 12.000 até 30.000 reais</option>
                <option value="+30000">Mais de 30.000 reais</option>
              </select>
            </div>
            <div>
              <label htmlFor="numero_serie" className="identacao">
                Número de série:
              </label>
              <input type="number" className="input" name="numero_serie" placeholder="Digite o número de série" required
              />
            </div>
            <div>
              <label htmlFor="modificacoes" className="identacao">
                Sua bike possui modificações?
              </label>
              <input
                type="radio"
                id="rd-sim"
                name="modificacoes"
                value="sim"
              />
              <label htmlFor="modificacoes">Sim</label>
              <input
                type="radio"
                id="rd-nao"
                name="modificacoes"
                value="nao"
              />
              <label htmlFor="modificacoes">Não</label>
            </div>
            {isModificado && (
              <textarea
                id="textoMod"
                className="form-control"
                name="modificacoes"
                cols="30"
                rows="10"
                placeholder="Se sim, digite aqui"
                required
              ></textarea>
            )}
            <button type="submit">
              <Link to="/minhas-bikes">Enviar</Link>
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
