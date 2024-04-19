// Servico.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Formulario from './SP_Formulario';
import Tabela from './SP_Tabela';

function Servico_Profissional() {

// Objeto servico
  const profissional = {
    id : 0,
    nome : ''
  }

  // Objeto servico
  const servico = {
      preco : '',
      descricao : ''
    }

  // UseState PetShop
  const [petshops, setPetShops] = useState([]);
  const [setObjPetShop] = useState();
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const[objProfissional, setObjProfissional] = useState(profissional);
  const[objServico, setObjServico] = useState(servico);

  useEffect(() => {
    fetch("http://localhost:8080/petshop/recuperar/todos")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setPetShops(retorno_convertido));
  }, []);

  const selecionarPetShop = (indice) => {
    setObjPetShop(petshops[indice]);
  }

  const LimparFormulario = () => {
    setOpcaoSelecionada('');
  }

  // Cadastrar Servico
  const cadastrarServico = () => {
    fetch("http://localhost:8080/servico/cadastro", {
      method: 'post',
      body: JSON.stringify(objServico),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {  
          alert('Serviço cadastrado com sucesso!');
          LimparFormulario();
        }
      })
      .catch(error => {
        console.error('Erro ao cadastrar serviço:', error);
        alert('Erro ao cadastrar serviço. Por favor, tente novamente mais tarde.');
      });
  }

  // Cadastrar Profissional
  const cadastrarProfissional = () => {
    fetch("http://localhost:8080/profissional/cadastro", {
      method: 'post',
      body: JSON.stringify(objProfissional),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert('Profissional cadastrado com sucesso!');
          LimparFormulario();
        }
      })
      .catch(error => {
        console.error('Erro ao cadastrar o Profissional:', error);
        alert('Erro ao cadastrar o Profissional. Por favor, tente novamente mais tarde.');
      });
  }

  const exibirFormulario = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  // Obtendo os dados do formulário Servico
  const aoDigitarS = (e) => {
    setObjServico({...objServico,[e.target.name]:e.target.value});
  }

  // Obtendo os dados do formulário Profissional
  const aoDigitarP = (e) => {
    setObjProfissional({...objProfissional,[e.target.name]:e.target.value});
  }

  // RETORNO
  return (
    <div>
      {opcaoSelecionada ? (
        <Formulario cancelar={LimparFormulario} cadastrar={cadastrarServico} opcaoSelecionada={opcaoSelecionada} cadastrarProfissional={cadastrarProfissional} eventoTeclado1={aoDigitarS} eventoTeclado2={aoDigitarP} />
      ) : (
        <Tabela vetor={petshops} selecionar={selecionarPetShop} exibirFormulario={exibirFormulario} />
      )}
    </div>
  );
}

export default Servico_Profissional;
