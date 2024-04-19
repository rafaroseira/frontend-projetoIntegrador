// ServicoTabela.js
import React from 'react';

function Tabela({ vetor, selecionar, exibirFormulario }) {
  const handleExibirFormulario = (opcaoSelecionada) => {
    exibirFormulario(opcaoSelecionada);
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Cadastrar Profissional</th>
          <th>Cadastrar Servico</th>
        </tr>
      </thead>

      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.nome}</td>
            <td><input type='button' value='Opção 1' className="btn btn-success" onClick={() => handleExibirFormulario('opcao1')} /></td>
            <td><input type='button' value='Opção 2' className="btn btn-success" onClick={() => handleExibirFormulario('opcao2')} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
