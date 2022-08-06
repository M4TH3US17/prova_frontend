import React, { useState, useEffect }   from 'react';
import NavBar from '../../componentes/NavBar/index';
import { useNavigate, useParams } from 'react-router-dom';
import ListagemService from '../../services/ListagemService';
import './style.css';

const listagemService = new ListagemService();

export default function Modify({isUpdate = false, usuarioLogado = false}) {
    const [carro,     setCarro]     = useState('');
    const [preco,     setPreco]     = useState(0.0);
    const [ano,       setAno]       = useState(0);
    const [cor,       setCor]       = useState('');
    const [tipo,      setTipo]      = useState('');
    const [marcaId,   setMarcaId]   = useState(0);
    const [reservado, setReservado] = useState(false);
    const [urlImg,    setUrlImg]    = useState('');
    const [km,        setKm]        = useState(0);
    const [modelo,    setModelo]    = useState('');
    let   [obj, setObj]             = useState({});
    let tituloPagina                = '';
    let obrigatorio                 = '';
    const {carroId}                 = useParams(); 
    const navigate                  = useNavigate();

    const marcas = [
        {id: 1, marca: "Audi"},      {id: 2, marca: "Nissan"}, {id: 3, marca: "Bmw"}, {id: 4, marca: "Chery"},
        {id: 5, marca: "Chevrolet"}, {id: 6, marca: "Citroen"}, {id: 7, marca: "Dodge"}, ];

    if(isUpdate)  tituloPagina = 'Atualizar';
    else         {tituloPagina = 'Salvar Carro'; obrigatorio = '*'};

    useEffect(() => {
        if(isUpdate) {
        listagemService.carregaCardPorId(carroId)
                  .then(response => {
                    const carroDoBanco = response.data;
        
                    setCarro(  carroDoBanco.nome);
                    setAno(    carroDoBanco.ano);
                    setKm(     carroDoBanco.km);
                    setMarcaId(carroDoBanco.marca.id);
                    setCor(    carroDoBanco.cor);
                    setUrlImg( carroDoBanco.urlImagem);
                    setPreco(  carroDoBanco.preco);
                    setTipo(   carroDoBanco.tipo);
                    setReservado(carroDoBanco.reservado);
                    setObj(carroDoBanco);
                });}
    }, [setObj]);

    const SubmitEv = e => {
        e.preventDefault();

        const corpoRequisicao = {
            nome:      carro,
            preco:     Number(preco),
            ano:       Number(ano),
            cor:       cor,
            urlImagem: urlImg,
            tipo:      tipo,
            km:        Number(km),
            marcaId:   marcaId,
            reservado: reservado,
            modelo:    modelo
        };

        if(typeof(carroId) === 'undefined') {
            listagemService.criarCard(corpoRequisicao).then(() => console.log('Carro Salvo'))
            .catch(error => console.log(error));
        }
        else if(Number.isInteger(Number(carroId))) {
            listagemService.atualizarCard(carroId, corpoRequisicao)
            .then(() => {console.log('carro atualizado')})
            .catch(error => console.log(error));
    }};


    if(usuarioLogado === false) {
        navigate("/");
        return;
    }

    return (
        <>
          <NavBar displayBtnAdmin='block'/>

          <section className='atualizar-carro-container'>
            <div className='carro-modify-title'><h3>{tituloPagina}</h3></div>
        <form onSubmit={SubmitEv}>
        <div className="container form-update">
          <div>
            <div>
                <label>Carro {obrigatorio}</label> 
                <input onChange={e => setCarro(e.target.value)} type="text"/>
            </div>

            <div>
                <label>Preço {obrigatorio}</label>
                <input className="form-control" onChange={e => setPreco(Number(e.target.value))} type="text"/>
            </div>

            <div>
                <label>Ano {obrigatorio}</label>
                <input className="form-control" onChange={e => setAno(Number(e.target.value))} type="text"/>
            </div>

            <div className='mb-2'>
                <label>Km {obrigatorio}</label>
                <input className="form-control" onChange={e => setKm(Number(e.target.value))} type="text"/>
            </div>

            <div>
                <label>Url da Imagem {obrigatorio}</label>
                <input className="form-control" onChange={e => setUrlImg(e.target.value)} type="text"/>
            </div>

            <div>
                <label>Modelo {obrigatorio}</label>
                <input className="form-control" onChange={e => setModelo(e.target.value)} type="text"/>
            </div>
        </div>

        <div>
            <div className='mb-2'>
             <select className="form-select form-select-tipo"
             onChange={e => setTipo(e.target.value)}>
                <option disabled>Tipo</option>
                <option value="Suv">SUV</option>
                <option value="Van">Van</option>
                <option value="Sedan">Sedan</option>
                <option value="Pickup">Pickup</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
              </select>
            </div>

            <div className="mb-2">
             <select className="form-select" aria-label="Default select example"
             onChange={e => setCor(e.target.value)}>
                <option disabled>Cor</option>
                <option value="Vermelho">Vermelho</option>
                <option value="Amarelo">Amarelo</option>
                <option value="Prata">Prata</option>
                <option value="Azul">Azul</option>
                <option value="Preto">Preto</option>
                <option value="Dourado">Dourado</option>
                <option value="Branco">Branco</option>
                <option value="Cinza">Cinza</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="mb-2">
             <select value={marcaId} className="form-select" aria-label=".form-select-lg example" 
              onChange={e => setMarcaId(e.target.value)}>
                {marcas.map(item => (<option key={item.id} value={item.id}>{item.marca}</option>))}
              </select>
            </div>

            <div className="form-check form-switch mb-2">
                <div className="d-flex">
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"><strong>Indisponível</strong></label>
                    <input className="form-check-input" onChange={e => setReservado(true)} type="checkbox" id="flexSwitchCheckChecked"/>
                </div>
                <div>
                    <label className="form-check-label" onChange={e => setReservado(false)} htmlFor="flexSwitchCheckChecked"><strong>Disponível</strong></label>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                </div>
            </div>
          </div>

        </div>

        <div className="container d-flex align-items-center">
            <button className='btn btn-primary btn-md form-update-btn mb-2'>Salvar Carro</button>
        </div>
        </form>
    </section>
        </>
    )
};