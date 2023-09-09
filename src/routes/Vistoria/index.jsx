import './vistoria.css'

export default function Vistoria(){

    return(
        <main >
            <section className='vistoria'>
                <h1>Vistoria</h1>
                    <div className="box">
                        <p>Clique aqui para tirar uma foto do chassi</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                    </div>
                    <div className="box"> 
                        <p>Clique aqui para tirar uma foto do guidão</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                        </div>
                    <div className="box">
                        <p>Clique aqui para tirar uma foto da roda dianteira</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                        </div>
                    <div className="box">
                        <p>Clique aqui para tirar uma foto do quadro</p>
                        <button>Alterar</button>
                        <button className="btnEnviar">Enviar</button>
                    </div>
            </section>
        </main>
    )
}