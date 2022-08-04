import React, { useEffect, useState }    
                from 'react';
import Filtro   from '../../componentes/Filtro';
import NavBar   from '../../componentes/NavBar';
import EditImg  from '../../assets/img/EditImg';
import TrashImg from '../../assets/img/TrashImg/index';
import {Link, useNavigate}
                       from 'react-router-dom';
import ListagemService from '../../services/ListagemService';
import               './style.css';
import Paginacao from '../../componentes/Paginacao';

const listagemService = new ListagemService();

export default function Admin({usuarioLogado}) {
    const [carros, setCarros]    = useState([]);
    const [display, setDisplay]  = useState('');
    const navigate               = useNavigate();

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
        if(window.matchMedia('(max-width: 414px)').matches) setDisplay('none');

        if(usuarioLogado === false) navigate("/");
        listagemService.carregarCards(pageNumber).then(response => {setCarros(response.data.content); setPage(response.data);});
    }, [pageNumber]);

    return(
        <>
          <NavBar displayBtnSair={'block'} displayBtnVoltar={'block'}/>
          <Filtro/>

          <section>
            <div className="container">
             <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID   </th>
                        <th scope="col">Nome </th>
                        <th scope="col" style={{display: display}}>Preço</th>
                        <th scope="col" style={{display: display}}>KM   </th>
                        <th scope="col" style={{display: display}}>Disponível</th>
                        <th scope="col" style={{display: display}}>Ano  </th>
                        <th scope="col" style={{display: display}}>Cor  </th>
                        <th scope="col" style={{display: display}}>Tipo </th>
                        <th scope="col" style={{display: display}}>Marca</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
    
                <tbody>
                    {carros.map(carro => (
                    <tr key={carro.id}>
                        <td><strong>{carro.id}</strong></td>
                        <td>{carro.nome}</td>
                        <td style={{display: display}}>{carro.preco}</td>
                        <td style={{display: display}}>{carro.km}</td>
                        <td style={{display: display}}>{carro.reservado ? 'sim' : 'não'}</td>
                        <td style={{display: display}}>{carro.ano}</td>
                        <td style={{display: display}}>{carro.cor}</td>
                        <td style={{display: display}}>{carro.tipo}</td>
                        <td style={{display: display}}>{carro.marca.marca}</td>
                        <td>
                           <Link className="btn btn-primary btn-sm btn-edit btn-table" to={"/carros"}> <EditImg/> </Link>
                           <button className="btn btn-danger btn-sm btn-table"> <TrashImg/> </button>
                       </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <Paginacao page={page} click={handleClick}/>
        </section>
        </>
    );
};