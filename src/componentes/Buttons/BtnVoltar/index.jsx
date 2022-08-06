import React           from 'react';
import { useNavigate } from 'react-router-dom';

export default function BtnVolat({display = 'none'}) {
    let navigate = useNavigate();

    const handleClick = () => navigate('/carros');

    return (
        <>
         <button className='btn btn-voltar' style={{display: display}}
          onClick={handleClick}>Carros <i className="bi bi-eye-fill"></i></button>
        </>
    )
};