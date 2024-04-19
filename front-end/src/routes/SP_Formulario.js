function Formulario({ cancelar, cadastrar, opcaoSelecionada, cadastrarProfissional, eventoTeclado1, eventoTeclado2 }) {
  return (
    <form>
      {opcaoSelecionada === 'opcao1' ? (
        <div>
          <input type='text' onChange={eventoTeclado2} name='nome' placeholder='Profissional' className="form-control" />
          <input type='button' value='Cadastrar' onClick={cadastrarProfissional} className="btn btn-primary" />
          <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-secondary" />
        </div>
      ) : (
        <div>
          <input type='text'  onChange={eventoTeclado1} name='preco' placeholder='Preço' className="form-control" />
          <input type='text' onChange={eventoTeclado1} name='descricao' placeholder='Descrição' className="form-control" />
          <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary" />
          <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
}

export default Formulario;
