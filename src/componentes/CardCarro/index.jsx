import React from 'react';
import './style.css';

export default function CardCarro({carro}) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3">

            <div className='cardCarro card'>
              <img src={carro.urlImagem} alt={"Foto de um " + carro.nome}/>
              <div>
                 <h3>{carro.nome}</h3>
                 <span className='card-descricao'>{carro.ano +' • ' + carro.km + ' Km • ' + carro.tipo + ' • ' + carro.cor}</span><br/>
                 <span className='card-preco'>{'R$ ' +carro.preco}</span>
             </div>
            </div>
        </div>
    );
};