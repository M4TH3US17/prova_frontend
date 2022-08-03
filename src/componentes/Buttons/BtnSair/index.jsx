import React from 'react';
import './style.css';

export default function BtnSair({display = 'none'}) {

    return (
        <>
         <button className='btn btn-sair' style={{display: display}}>Sair</button>
        </>
    )
};