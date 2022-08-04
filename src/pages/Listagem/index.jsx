import React, { 
  useEffect, 
  useState }           from 'react';
import Filtro          from '../../componentes/Filtro';
import NavBar          from '../../componentes/NavBar';
import ListagemService from '../../services/ListagemService';
import CardCarro       from '../../componentes/CardCarro'
import { useNavigate } from 'react-router-dom';
import { Carro }       from '../../utils/Object';
import './style.css';
import Paginacao from '../../componentes/Paginacao';

const listagemService = new ListagemService();

export default function Listagem({usuarioLogado}) {
  const [carros, setCarros] = useState([]);
  const navigate            = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState({
      content: [], last: true, totalPages: 0, totalElements: 0,
      size: 8, number: 0,  numberOfElements: 0, empty: true });

  let handleClick = e => {
    if(e.classList.contains('btn-proximo'))       setPageNumber(++page.number);
    if(e.classList.contains('btn-anterior'))      setPageNumber(--page.number);
    if(e.classList.contains('page-link-inicio'))  setPageNumber(0);
  };

  useEffect(() => {
      if(usuarioLogado)  listagemService.carregarCards(pageNumber).then(response => { setCarros(response.data.content); setPage(response.data);})
      else               navigate("/");
    }, [pageNumber]);

    return (
        <main className='page'>
        <NavBar displayBtnAdmin={'block'} displayBtnSair={'block'}/>
        <Filtro/>
          
        <div className="container">
           <section className="row">
             {carros.map(carro => (<CardCarro key={carro.id} carro={
              new Carro(carro.id, carro.nome, carro.preco, carro.urlImagem, carro.ano, carro.cor, carro.km, carro.tipo, carro.marca)
             }/>))}
           </section>
        </div>

        <Paginacao page={page} click={handleClick}/>
      </main>
    );
};