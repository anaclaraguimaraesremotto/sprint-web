import './cadastro-bike.css'
import { Link } from "react-router-dom"
import React, { useState } from 'react';

export default function CadastroBike() {
  // Definindo estados para os campos do formulário
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [valor, setValor] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [modificacoes, setModificacoes] = useState('');
  const [isModificado, setIsModificado] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um objeto com as informações da bike
    const novaBike = {
      marca,
      modelo,
      valor,
      numeroSerie,
      modificacoes: isModificado ? modificacoes : 'Sem modificações',
    };

    // Chame a função para adicionar a nova bike
    adicionarBike(novaBike);

    // Redirecione para a página MinhasBikes
    // Você pode usar o Link do React Router para isso
    // Certifique-se de importar o Link no início do arquivo
    // e que você tem uma rota configurada para MinhasBikes.
  };
  return (
    <main>
      <section className="cadastroBike">
        <h2>Cadastre sua bike</h2>
        <section className="formBike">
          <form onSubmit={handleSubmit}>
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
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="modelo" className="identacao">
                Modelo:
              </label>
              <input
                type="text"
                className="input"
                id="modelo"
                name="modelo"
                placeholder="Digite o modelo da bike"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="valor" className="identacao">
                Valor:
              </label>
              <select
                name="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
              >
                <option value="" disabled>
                  Selecionar
                </option>
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
              <input
                type="number"
                className="input"
                name="numero_serie"
                placeholder="Digite o número de série"
                value={numeroSerie}
                onChange={(e) => setNumeroSerie(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="identacao">
                <label htmlFor="modificacoes">
                  Sua bike possui modificações?
                </label>
                <input
                  type="radio"
                  id="rd-sim"
                  name="modificacoes"
                  value="sim"
                  checked={isModificado}
                  onChange={() => setIsModificado(true)}
                />
                <label htmlFor="modificacoes">Sim</label>
                <input
                  type="radio"
                  id="rd-nao"
                  name="modificacoes"
                  value="nao"
                  checked={!isModificado}
                  onChange={() => setIsModificado(false)}
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
                  value={modificacoes}
                  onChange={(e) => setModificacoes(e.target.value)}
                  required
                ></textarea>
              )}
            </div>
            <button type="submit" ><Link to='/minhas-bikes'>Enviar</Link></button>
          </form>
        </section>
        </section>
    </main>
  );
}
