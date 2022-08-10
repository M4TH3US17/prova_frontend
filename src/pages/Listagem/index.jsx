import React, { 
  useEffect, 
  useState }           from 'react';
import Filtro          from '../../componentes/Filtro';
import NavBar          from '../../componentes/NavBar';
import ListagemService from '../../services/ListagemService';
import CardCarro       from '../../componentes/CardCarro'
import { Carro }       from '../../utils/Object';
import './style.css';
import Paginacao from '../../componentes/Paginacao';
import UsuarioService from '../../services/UsuarioService';
import Footer from '../../componentes/Footer';

const listagemService = new ListagemService();

export default function Listagem() {
  const [carros, setCarros] = useState([]);
  const [ordem, setOrdem]   = useState('preco,desc');
  const [filtro, setFiltro] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState({
      content: [], 
      last: true, 
      totalPages: 0, 
      totalElements: 0,
      size: 8, 
      number: 0,  
      numberOfElements: 0, 
      empty: true });
  const [exibirBtnAdmin, setExibirBtnAdmin] = useState('none');
  const [exibirBtnLogin, setExibirBtnLogin] = useState('none');

  let handleClick = e => {
    if(e.classList.contains('btn-proximo'))       setPageNumber(++page.number);
    if(e.classList.contains('btn-anterior'))      setPageNumber(--page.number);
    if(e.classList.contains('page-link-inicio'))  setPageNumber(0);
  };

  document.addEventListener('click', e => {
    let ordenacao = e.target.value;

    if(ordenacao === 'Menor KM')    setOrdem('km,asc');
    if(ordenacao === 'Maior KM')    setOrdem('km,desc');
    if(ordenacao === 'Menor Preço') setOrdem('preco,asc');
    if(ordenacao === 'Mais Novos')  setOrdem('ano,desc');

    let filtro = e.target.classList;

    if(filtro.contains('bi-search') || filtro.contains('btn-default')) {
      let value = document.querySelector('.form-control-search').value;
      setFiltro(value);
    }
  });

  useEffect(() => {
        if(new UsuarioService().estaAutenticado()) {
          setExibirBtnAdmin('block');
          setExibirBtnLogin('none');
        } else {
          setExibirBtnAdmin('none');
          setExibirBtnLogin('block');
        }
        listagemService.carregarCards(pageNumber, ordem, filtro).then(response => { setCarros(response.data.content); setPage(response.data);})
    }, [pageNumber, ordem, filtro]);

    return (
        <main className='page'>
        <NavBar displayBtnLogin={exibirBtnLogin} displayBtnAdmin={exibirBtnAdmin} displayBtnSair={exibirBtnAdmin}/>
        <Filtro />

        <div className="container">
           <section className="row">
             {carros.map(carro => (<CardCarro key={carro.id} carro={
              new Carro(carro.id, carro.nome, carro.preco, carro.urlImagem, carro.ano, carro.cor, carro.km, carro.tipo, carro.marca, 
                carro.modelo)
             }/>))}
           </section>
        </div>

        <Paginacao page={page} click={handleClick}/>
        <Footer/>
      </main>
    );
};