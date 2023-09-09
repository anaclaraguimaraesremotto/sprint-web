import './login.css'

export default function Login(){

    return(
        <main>
            <section className="login">
                <h2>Acessar conta</h2>
            <section className="form">
                <form action="/logar" name="login" method="post">
                        <div>
                            <label for="documento">CPF/CNPJ:</label>
                            <input type="number"  name="documento" required/>
                        </div>
                        <div>
                            <label for="senha">Senha:</label>
                            <input type="password" name="senha" required/>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
            </section>
            </section>
    </main>
    )
}