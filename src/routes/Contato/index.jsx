import './contato.css'

export default function Contato(){

    return(
        <main >
            <section className="contato">
                <h2>Entre em Contato</h2>
                <section className="form">
                    <form action="/contato/sucesso">
                    <div>
                        <label for="l-contato">E-mail de contato:</label>
                        <input type="text" name="contato" required autofocus/>
                    </div>
                    <div>
                        <label for="l-assunto">Assunto:</label>
                        <input type="text" name="assunto" required />
                    </div>
                    <div>
                        <label for="l-comentario">Deixe seu comentário:</label>
                        <textarea name="comentario" cols="30" rows="10" required></textarea>
                    </div>
                    <button>Enviar</button>
                    </form>
                </section>
            </section>
        </main>
    )
}