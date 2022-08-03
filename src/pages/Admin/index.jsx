import React from 'react';
import Filtro from '../../componentes/Filtro';
import NavBar from '../../componentes/NavBar';

export default function Admin() {
    return(
        <>
          <NavBar displayBtnSair={'block'}/>
          <Filtro/>

          <section>
            <div className="container">
             <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID   </th>
                        <th scope="col">Nome </th>
                        <th scope="col">Preço</th>
                        <th scope="col">KM   </th>
                        <th scope="col">Reservado</th>
                        <th scope="col">Ano  </th>
                        <th scope="col">Cor  </th>
                        <th scope="col">Tipo </th>
                        <th scope="col">Marca</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
    
                <tbody>
                     {/*carros.map(carro => (<></>))*/}
                </tbody>
            </table>
            </div>
        </section>
        </>
    );
};

/*
<LinhaTabela key={carro.id} 
                    carro={new Carro(
                        carro.id, 
                        carro.nome, 
                        carro.preco, 
                        carro.urlImagem,
                        carro.reservado,
                        carro.tipo,
                        carro.cor,
                        carro.km,
                        carro.ano,
                        {id: carro.marca.id, marca: carro.marca.marca})}
                    />)
 */