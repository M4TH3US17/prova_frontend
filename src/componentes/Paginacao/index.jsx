import React from 'react';
import './style.css';

export default function Paginacao({page, click}) {
  let pageNumber = page.number;
  if(pageNumber !== 0)      document.querySelector('.page-item').classList.remove('disabled');
  else if(pageNumber === 0) document.querySelector('.page-item').classList.add('disabled');

    return (
    <div className='d-flex justify-content-center'>
        <nav>
          <ul className="pagination justify-content-center">

             <li className="page-item disabled">
               <button className="page-link btn-anterior" disabled={page.first} onClick={e => click(e.target)}>Anterior</button>
             </li>

            <li className="page-item" onClick={e => click(e.target)}><span className="page-link page-link-inicio">Inicio</span></li>
            
            <li className="page-item">
                <button className="page-link btn-proximo" disabled={page.last} onClick={e => click(e.target)}>Próximo</button>
            </li>
        </ul>
        </nav>
    </div>)};