import React           from 'react';
import { useNavigate } from 'react-router-dom';

export default function BtnVolat({display = 'none'}) {
    let navigate = useNavigate();

    const handleClick = () => navigate('/');

    return ( <button className='btn btn-voltar btn-nav' style={{display: display}}  onClick={handleClick}>
        Carros <i className="bi bi-eye"></i></button>)
};