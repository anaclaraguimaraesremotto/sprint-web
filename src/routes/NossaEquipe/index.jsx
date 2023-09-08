import ana from '../../image/ana.jpg'
import antonio from '../../image/antonio.jpg'
import giovanni from '../../image/giovanni.jpg'
import leonardo from '../../image/leonardo.png'
import gabriel from '../../image/gabriel.jpg'

export default function NossaEquipe(){

    return(
        <main>
            <h1>Nossa Equipe</h1>
            <div className="equipe">
                <div id='ana'>
                    <img src={ana} alt="Ana Clara" />
                    <p>Ana Clara Aguiar Guimarães Perin Remotto</p>
                </div>
                <div id='antonio'>
                    <img src={antonio} alt="Antônio" />
                    <p>Antônio Felipe Araujo Junior</p>
                </div>
                <div id='giovanni'>
                    <img src={giovanni} alt="Giovanni" />
                    <p>Giovanni Paschoalatto Ibelli</p>
                </div>
                <div id='leo'>
                    <img src={leonardo} alt="Leonardo" />
                    <p>Leonardo Shoiti Araki</p>
                </div>
                <div id='gabriel'>
                    <img src={gabriel} alt="Gabriel" />
                    <p>Gabriel Lopes Pereira</p>
                </div>
            </div>
        </main>
    )
}