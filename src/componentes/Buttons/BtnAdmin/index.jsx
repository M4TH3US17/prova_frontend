import React from 'react';
import './style.css';

export default function BtnAdmin({display = 'none'}) {

    return (
        <>
          <button className='btn btn-admin' style={{display: display}}>Admin</button>
        </>
    );
};