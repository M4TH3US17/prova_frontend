import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnLogin({display = 'none'}) {

    return (
        <>
          <Link className='btn' to={"/login"} style={{display: display}}>Login</Link>
        </>
    );
};