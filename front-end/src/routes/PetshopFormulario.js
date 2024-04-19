function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
             {
                botao
                ?
                <>
                    <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Nome do PetShop' className="form-control"/>
                    <input type='text' value={obj.senha} onChange={eventoTeclado} name='senha' placeholder='Senha' className="form-control"/>
                    <input type='text' value={obj.email} onChange={eventoTeclado} name='email' placeholder='Email' className="form-control"/>
                    <input type='text' value={obj.telefone} onChange={eventoTeclado} name='telefone' placeholder='Telefone' className="form-control"/>
                    <input type='text' value={obj.celular}onChange={eventoTeclado} name='celular' placeholder='Celular' className="form-control"/>
                    <input type='text' value={obj.estado} onChange={eventoTeclado} name='estado' placeholder='Estado' className="form-control"/>
                    <input type='text' value={obj.cidade} onChange={eventoTeclado} name='cidade' placeholder='Cidade' className="form-control"/>
                    <input type='text' value={obj.rua} onChange={eventoTeclado} name='rua' placeholder='Rua' className="form-control"/>
                    <input type='text' value={obj.numero} onChange={eventoTeclado} name='numero' placeholder='Numero' className="form-control"/>
                    <input type='text' value={obj.bairro} onChange={eventoTeclado} name='bairro' placeholder='Bairro' className="form-control"/>
                    <input type='text' value={obj.cep} onChange={eventoTeclado} name='cep' placeholder='CEP' className="form-control"/>
                </>
                :
                <div>
                    <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Nome do PetShop' className="form-control"/>
                    <input type='text' value={obj.telefone} onChange={eventoTeclado} name='telefone' placeholder='Telefone' className="form-control"/>
                    <input type='text' value={obj.celular}onChange={eventoTeclado} name='celular' placeholder='Celular' className="form-control"/>
                </div>
            }

            {
                botao
                ?
                    <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary" />
                :
                <div>
                    <input type='button' value='Alterar' onClick={alterar} className="btn btn-warning"/>
                    <input type='button' value='Remover' onClick={remover} className="btn btn-danger"/>
                    <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-secondary"/>
                </div>
            }
        </form>
    )
}

export default Formulario;
