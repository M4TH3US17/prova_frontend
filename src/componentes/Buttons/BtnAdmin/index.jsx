import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function BtnAdmin({display = 'none'}) {

    return (
        <>
          <Link className='btn btn-admin' to={"/administracao"} style={{display: display}}>Voltar</Link>
        </>
    );
};