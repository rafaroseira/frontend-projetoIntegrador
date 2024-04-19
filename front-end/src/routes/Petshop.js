import React from 'react';
import { useEffect, useState} from 'react';
import './App.css';
import Formulario from './PetshopFormulario';
import Tabela from './PetshopTabela';

function Petshop() {

  // Objeto petsop
  const petshop = {
    id : 0,
    nome : '',
    senha : '',
    email : '',
    telefone : '',
    celular : '',
    endereco : '',
    estado : '',
    cidade : '',
    rua : '',
    numero : '',
    bairro : '',
    cep : ''
  }

  // UseState
  const[btnCadastrar, setBtnCadastrar] = useState(true);
  const[petshops, setPetShops] = useState([]);
  const[objPetShop, setObjPetShop] = useState(petshop)

  // UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/petshop/recuperar/todos")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setPetShops(retorno_convertido));
  }, [])

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjPetShop({...objPetShop,[e.target.name]:e.target.value});
  }

  // Cadastrar PetShop
  const cadastrar = () => {
    fetch("http://localhost:8080/petshop/cadastro",{
      method:'post',
      body:JSON.stringify(objPetShop),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setPetShops([...petshops, retorno_convertido]);
        alert('PetShop cadastrado com sucesso!');
        limparFormulario();
      }
    })
  }

  // Alterar PetShop
  const alterar = () => {
    fetch('http://localhost:8080/petshop/atualizar-dados',{
      method:'put',
      body:JSON.stringify(objPetShop),
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
        alert('PetShop alterado com sucesso!');
        
        // Cópia do vetor de Petshops
        let vetorTemp = [...petshops];

        // Indice
        let indice = vetorTemp.findIndex((p) =>{
          return p.id === objPetShop.id;
        });

        // Alterar o PetShop do vetorTemp
        vetorTemp[indice] = objPetShop;

        // Atualizar o vetor de PetShops
        setPetShops(vetorTemp);

        // Limpar o formulário
        limparFormulario();
    }
    })
  }

  // Remover PetShop
  const remover = () => {
    fetch(`http://localhost:8080/petshop/excluir/${objPetShop.id}`, {
       method: 'delete'
    })
      .then(() => {
      // Filtrar o vetor para remover o Petshop
      const novosPetShops = petshops.filter(petshop => petshop.id !== objPetShop.id);
      setPetShops(novosPetShops);
      alert('PetShop removido com sucesso!');
      limparFormulario();
      })
      
      .catch(error => console.error('Erro ao excluir o PetShop:', error));
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjPetShop(petshop);
    setBtnCadastrar(true);
  }

  // Selecionar PetShop
  const selecionarPetShop = (indice) => {
    setObjPetShop(petshops[indice]);
    setBtnCadastrar(false);
  }

  // Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objPetShop} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={petshops} selecionar={selecionarPetShop} />
    </div>
  );
}


export default Petshop;