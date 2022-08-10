import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnLogin({display = 'none'}) {

    return (
        <>
          <Link className='btn btn-nav' to={"/login"} style={{display: display}}>Login</Link>
        </>
    );
};