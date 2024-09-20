import React, { useState } from 'react';
import ItemListProduct from '../Components/ItemListProduct'
import Nav from '../Components/Nav';


const ListaProductos = ({ productos, eliminarProducto }) => {

    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className='principal'>
            <Nav />
            <div className="container">
                <h1>Lista de Productos</h1>

                <div >
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="buscador-input"
                    />
                </div>

                <div className="">
                    {productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
                        <ItemListProduct
                            key={producto.id}
                            producto={producto}
                            EliminarProducto={eliminarProducto}
                        />
                    )) : (
                        <p> No se encontraron registros </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListaProductos;