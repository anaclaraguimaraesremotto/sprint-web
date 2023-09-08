
export default function Contato(){

    return(
        <main className="contato">
            <section>
                <h2>Entre em Contato</h2>
            </section>
            <section className="form">
                <form action="#">
                <div>
                    <label for="l-contato">E-mail de contato:</label>
                    <input type="text" id="txt-contato" name="contato" required autofocus/>
                </div>
                <div>
                    <label for="l-assunto">Assunto:</label>
                    <input type="text" id="txt-assunto" name="assunto" required/>
                </div>
                <div>
                    <label for="l-comentario">Deixe seu comentário:</label>
                    <textarea name="comentario" id="txt-comentario" cols="30" rows="10" required></textarea>
                </div>
                <button>Enviar</button>
                </form>
            </section>
        </main>
    )
}