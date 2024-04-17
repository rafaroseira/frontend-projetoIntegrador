import React from 'react';
import { useEffect, useState} from 'react';
import './App.css';
import Formulario from './ClienteFormulario';
import Tabela from './ClienteTabela';

function Cliente() {

  // Objeto Cliente
  const cliente = {
    id : 0,
    nome: '',
    senha: '',
    email: '',
    celular: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [objUsuario, setObjUsuario] = useState(usuarios);

  // UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/cliente/recuperar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setUsuarios(retorno_convertido));

  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjUsuario({...objUsuario, [e.target.name]:e.target.value});
  }

  // Cadastrar Cliente
  const cadastrar = () => {
    fetch('http://localhost:8080/cliente/cadastro',{
      method:'post',
      body:JSON.stringify(objUsuario),
      headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json()) 
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setUsuarios([...usuarios, retorno_convertido]);
        alert('Cliente cadastrado com sucesso!');
        limparFormulario();
      }
    })
  }

  // Alterar Cliente
  const alterar = () => {
    fetch('http://localhost:8080/cliente/atualizar',{
      method:'put',
      body:JSON.stringify(objUsuario),
      headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json()) 
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        // Mensagem
        alert('Cliente alterado com sucesso!');
        
        // Cópia do vetor de Clientes
        let vetorTemp = [...usuarios];

        // Indice
        let indice = vetorTemp.findIndex((p) =>{
          return p.id === objUsuario.id;
        });

        // Alterar cliente do vetorTemp
        vetorTemp[indice] = objUsuario;

        // Atualizar o vetor de clientes
        setUsuarios(vetorTemp);

        // Limpar o formulário
        limparFormulario();
    }
    })
  }

  // Remover Cliente
  const remover = () => {
  fetch(`http://localhost:8080/cliente/excluir/${objUsuario.id}`, {
     method: 'delete'
  })
    .then(() => {
    // Filtrar o vetor de usuários para remover o cliente excluído
    const novosUsuarios = usuarios.filter(usuario => usuario.id !== objUsuario.id);
    setUsuarios(novosUsuarios);
    alert('Cliente removido com sucesso!');
    limparFormulario();
    })
    
    .catch(error => console.error('Erro ao excluir cliente:', error));
}

  // Limpar Formulário
  const limparFormulario = () => {
    setObjUsuario(cliente);
    setBtnCadastrar(true);
  }

  // Selecionar Cliente
  const SelecionarCliente = (indice) => {
    setObjUsuario(usuarios[indice]);
    setBtnCadastrar(false);
  }

   // Retorno
   return (
      <div>
          <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objUsuario} cancelar={limparFormulario} alterar={alterar} remover={remover} />
          <Tabela vetor={usuarios} selecionar={SelecionarCliente}/>
      </div>
  );
}

export default Cliente;
