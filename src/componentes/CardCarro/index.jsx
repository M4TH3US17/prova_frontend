import React from 'react';
import './style.css';

export default function CardCarro({carro}) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-2">

            <div className='cardCarro card'>
              <img src={carro.urlImagem} alt={"Foto de um " + carro.nome}/>
              <div>
                 <h3>{carro.nome}</h3>
                 <span>{'R$ '+carro.preco +' | '+ carro.ano +' | KM: ' + carro.km + ' | ' + carro.tipo}</span>
             </div>
            </div>

        </div>
    );
};