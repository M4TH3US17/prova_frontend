import React, { 
  useEffect, 
  useState }           from 'react';
import Filtro          from '../../componentes/Filtro';
import NavBar          from '../../componentes/NavBar';
import ListagemService from '../../services/ListagemService';
import CardCarro       from '../../componentes/CardCarro'
import { useNavigate } from 'react-router-dom';
import { Carro }       from '../../utils/Object';

const listagemService = new ListagemService();

export default function Listagem({usuarioLogado}) {
  const [carros, setCarros] = useState([]);
  const navigate            = useNavigate();

  useEffect(() => {
      if(usuarioLogado)  listagemService.carregarCards(0).then(response => setCarros(response.data.content)) 
      else               navigate("/");
    }, []);

    return (
        <>
        <NavBar displayBtnAdmin={'block'} displayBtnSair={'block'}/>
        <Filtro/>
          
        <div className="container">
           <section className="row">
             {carros.map(carro => (<CardCarro key={carro.id} carro={
              new Carro(carro.id, carro.nome, carro.preco, carro.urlImagem, carro.ano, carro.cor, carro.km, carro.tipo, carro.marca)
             }/>))}
           </section>
        </div>
      </>
    );
};