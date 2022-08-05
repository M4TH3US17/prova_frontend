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
  const [ordem, setOrdem]   = useState('id,asc');

  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState({
      content: [], last: true, totalPages: 0, totalElements: 0,
      size: 8, number: 0,  numberOfElements: 0, empty: true });

  let handleClick = e => {
    if(e.classList.contains('btn-proximo'))       setPageNumber(++page.number);
    if(e.classList.contains('btn-anterior'))      setPageNumber(--page.number);
    if(e.classList.contains('page-link-inicio'))  setPageNumber(0);
  };

  document.addEventListener('click', e => {
    let filtro = e.target.value;

    if(filtro === 'Menor KM') setOrdem('km,asc');
    if(filtro === 'Maior KM') setOrdem('km,desc');
    if(filtro === 'Menor Preço') setOrdem('preco,asc');
    if(filtro === 'Mais Novos') setOrdem('ano,desc');
  });

  useEffect(() => {
      if(usuarioLogado)  listagemService.carregarCards(pageNumber, ordem).then(response => { setCarros(response.data.content); setPage(response.data);})
      else               navigate("/");
    }, [pageNumber, ordem]);

    return (
        <main className='page'>
        <NavBar displayBtnAdmin={'block'} displayBtnSair={'block'}/>
        <Filtro />
          
        <div className="container">
           <section className="row">
             {carros.map(carro => (<CardCarro key={carro.id} carro={
              new Carro(carro.id, carro.nome, carro.preco, carro.urlImagem, carro.ano, carro.cor, carro.km, carro.tipo, carro.marca)
             }/>))}
           </section>
        </div>

        <Paginacao page={page} click={handleClick}/>

        <footer className='footer-container'>
          <div className='container'>
            <div className='d-flex justify-content-between'>
              <div>
                <span><a href="https://www.instagram.com/math3us.css/" target={"_blank"}><i className="bi bi-instagram"></i></a></span>
                <span><a href="https://www.linkedin.com/in/matheus-dalvino-478400207/" target={"_blank"}><i className="bi bi-linkedin"></i></a></span>
                <span><a href="https://github.com/M4TH3US17" target={"_blank"}><i className="bi bi-git"></i></a></span>
              </div>

              <h2 className='footer-author'>Matheus Dalvino</h2>
            </div>
            <hr/>
          </div>
        </footer>
      </main>
    );
};