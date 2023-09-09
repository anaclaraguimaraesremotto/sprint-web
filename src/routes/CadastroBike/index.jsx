import './cadastro-bike.css'

export default function CadastroBike(){

    return(
        <main className="cadastroBike">
            <section>
                <h2>Cadastre sua bike</h2>
            </section>
            <section className="formBike">
                    <form action="/cadastrar-bike" method="post">
                        <div class="form-group">
                            <label for="marca">Marca</label>
                            <input type="text" id="marca" name="marca"
                                placeholder="Digite a marca da bike" required/>
                        </div>
                        <div class="form-group">
                            <label for="modelo">Modelo</label>
                            <input type="text" id="modelo" name="modelo"
                                placeholder="Digite o modelo da bike" required/>
                        </div>
                        <div class="form-group">
                            <label for="modelo">Modelo</label>
                            <input type="text" id="modelo" name="modelo"
                                placeholder="Digite o modelo da bike" required/>
                        </div>
                        <div class="form-group">
                        <label for="valor">Valor</label>
                        <select name="valor">
                            <option value="1000-3000">De 1000 até 3000 reais</option>
                            <option value="3000-7000">De 3000 até 7000 reais</option>
                            <option value="7000-12000">De 7000 até 12000 reais</option>
                            <option value="12000-30000">De 12000 até 30000 reais</option>
                            <option value="+30000">Mais de 30000 reais</option>
                        </select>
                        </div>
                        <div class="form-group">
                            <label for="numero_serie">Número de série</label>
                            <input type="number"name="numero_serie" placeholder="Digite o número de série" required/>
                        </div>
                        <div class="form-group">
                            <label for="modificacoes">Sua bike possui modificações?</label>
                            <div>
                            <input type="checkbox" id="modificacoes" name="modificacoes" required/>
                            <label class="checkbox" for="modificacoes">Sim</label>
                            <input type="checkbox" id="cb-sim" name="modificacoes" required/>
                            <label class="checkbox" 
                            for="modificacoes">Não</label>
                            </div>
                            <textarea id="cb-nao" class="form-control" name="modificacoes" cols="30" rows="10"placeholder="Se sim, digite aqui" required></textarea>
                        </div>
                    

                        <button type="submit" >Enviar</button>
                    </form>
                </section>
        </main>
    )
}