import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnAdmin({display = 'none'}) {

    return (
        <>
          <Link className='btn btn-admin btn-nav' to={"/administracao"} style={{display: display}}>Voltar</Link>
        </>
    );
};