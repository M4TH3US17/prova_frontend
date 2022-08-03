import React, { 
  useEffect, 
  useState }           from 'react';
import Filtro          from '../../componentes/Filtro';
import NavBar          from '../../componentes/NavBar';
import ListagemService from '../../services/ListagemService';
import { useNavigate } from 'react-router-dom';

const listagemService = new ListagemService();

export default function Listagem({usuarioLogado}) {
  const [carros, setCarros] = useState([]);
  const navigate            = useNavigate();

  useEffect(() => {
      if(usuarioLogado)  listagemService.carregarCards(0).then(response => setCarros(response.data.content)) 
      else               navigate("/");
    }, []);

    return (
        <>
        <NavBar displayBtnAdmin={'block'} displayBtnSair={'block'}/>
        <Filtro/>
          
        <div className="container">
           <section className="row">
             {/*carros.map(carro => (<CardCarro key={carro.id} carro={new Carro(
                  carro.id,        carro.nome, 
                  carro.preco,     carro.urlImagem,
                  carro.reservado, carro.tipo,
                  carro.cor,       carro.km,
                  carro.ano,       {id: carro.marca.id, marca: carro.marca.marca}
             )}/>))*/}
           </section>
        </div>
      </>
    );
};