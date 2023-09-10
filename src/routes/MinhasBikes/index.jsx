import './minhas-bikes.css'
import BikeFake from '../../image/bicicleta-ilustrativa.jpg'
import { Link } from "react-router-dom"
import React, { useState } from 'react';

export default function MinhasBikes() {
  // Crie um estado para armazenar as informações das bikes
  const [bikes, setBikes] = useState([]);

  // Função para adicionar uma bike às informações armazenadas
  const adicionarBike = (novaBike) => {
    setBikes([...bikes, novaBike]);
  }

  return (
    <main>
      <section className="minhas-bikes">
        <button type="button" className="btn-adc">
          <Link to='/cadastro-bike'>Adicionar</Link>
        </button>
        <h2>Minhas Bikes</h2>
        {bikes.map((bike, index) => (
          <div className="box-bike" key={index}>
            <img src={BikeFake} alt="bike ilustrativa" />
            <div className="dados">
              <p>Número de série: {bike.numeroSerie}</p>
              <p>Modelo: {bike.modelo}</p>
              <p>Categoria: {bike.valor}</p>
              <button type="button" className="btn-altera">
                Alterar
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* Passe a função adicionarBike como prop para o componente CadastroBike */}
      
    </main>
  );
}