import React, { useEffect, useState }    
                from 'react';
import Filtro   from '../../componentes/Filtro';
import NavBar   from '../../componentes/NavBar';
import EditImg  from '../../assets/img/EditImg';
import TrashImg from '../../assets/img/TrashImg/index';
import { Link, 
 useNavigate}   from 'react-router-dom';
import               './style.css';
import UsuarioService from '../../services/UsuarioService';

const usuarioService = new UsuarioService();

export default function Admin({usuarioLogado}) {
    const [carros, setCarros] = useState([]);
    const navigate            = useNavigate();

    useEffect(() => {
        if(usuarioLogado === false) navigate("/");
    }, []);

    return(
        <>
          <NavBar displayBtnSair={'block'}/>
          <Filtro/>

          <section>
            <div className="container">
             <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID   </th>
                        <th scope="col">Nome </th>
                        <th scope="col">Preço</th>
                        <th scope="col">KM   </th>
                        <th scope="col">Disponível</th>
                        <th scope="col">Ano  </th>
                        <th scope="col">Cor  </th>
                        <th scope="col">Tipo </th>
                        <th scope="col">Marca</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
    
                <tbody>
                     {/*carros.map(carro => (<></>))*/}
                     <tr>
                        <td><strong>{1}</strong></td>
                        <td>{"Carro"}</td>
                        <td>{200.000}</td>
                        <td>{0}</td>
                        <td>{'true'}</td>
                        <td>{2022}</td>
                        <td>{"Amarelo"}</td>
                        <td>{"Suv"}</td>
                        <td>{"Audi"}</td>
                        <td>
                           <Link className="btn btn-primary btn-sm btn-edit btn-table" to={"/carros"}> <EditImg/> </Link>
                           <button className="btn btn-danger btn-sm btn-table" > <TrashImg/> </button>
                       </td>
                    </tr>
                </tbody>
            </table>

        </div>
        </section>
        </>
    );
};

/*
<tr>
        <td><strong>{carro.id}</strong></td>
        <td>{carro.nome}</td>
        <td>{carro.preco}</td>
        <td>{carro.km}</td>
        <td>{carro.reservado}</td>
        <td>{carro.ano}</td>
        <td>{carro.cor}</td>
        <td>{carro.tipo}</td>
        <td>{carro.marca.marca}</td>
        <td>
            <Link className="btn btn-primary btn-sm" to={"/administracao/carro/" + carro.id}>

               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"   className="bi bi-pencil-fill" viewBox="0 0 16 16">
               <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>

            </Link>

            <button className="btn btn-danger btn-sm" onClick={() => handleClick(carro.id)}><Icone.TrashFill/></button>
        </td>
    </tr>
 */