import './minhas-bikes.css'
import BikeFake from '../../image/bicicleta-ilustrativa.jpg'

export default function MinhasBikes(){

    return(
        <main>
            <section className='minhas-bikes'>
            <button type="button" className='btn-adc'>Adicionar</button>
                <h2>Minhas Bikes</h2>
                <div className='box-bike'>
                        <img src={BikeFake} alt="bike ilustrativa" />
                        <div className='dados'>
                            <p>Plano:</p>
                            <p>Modelo:</p>
                            <p>Categoria:</p>
                            <button type="button" className=' btn-altera'>Alterar</button>
                        </div>
                </div>  
                <div className='box-bike'>
                    <img src={BikeFake} alt="bike ilustrativa" />
                    <div className='dados'>
                        <p>Plano:</p>
                        <p>Modelo:</p>
                        <p>Categoria:</p>
                        <button type="button" className=' btn-altera'>Alterar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}