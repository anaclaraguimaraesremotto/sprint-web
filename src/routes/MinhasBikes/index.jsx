import './minhas-bikes.css'
import BikeFake from '../../image/bicicleta-ilustrativa.jpg'
import { Link } from "react-router-dom"
import { bikeInfo } from '../../components/bikeInfo';

export default function MinhasBikes() {

  return (
    <main>
      <section className="minhas-bikes">
        <button type="button" className="btn-adc">
          <Link to="/cadastro-bike">Adicionar</Link>
        </button>
        <h2>Minhas Bikes</h2>
        {bikeCapturada && (
          <div className="box-bike">
            <img src={BikeFake} alt="bike ilustrativa" />
            <div className="dados">
              <p>Número de série: {bikeInfo.numero_serie}</p>
              <p>Modelo: {bikeInfo.modelo}</p>
              <p>Categoria: {bikeInfo.valor}</p>
              <button type="button" className="btn-altera">
                Apagar
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
