import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard'


const TiendaVirtual = ({ productos, carrito, agregarAlCarrito, vaciarAlCarrito, eliminarDelCarrito }) => {

    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Mi Tienda Virtual</h1>

            <div >
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="buscador-input"
                />
            </div>

            <div className="productos-grid">
                {productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregarAlCarrito={agregarAlCarrito}
                    />
                )) : (
                    <p> No se encontraron registros </p>
                )}
            </div>

            <div className="carrito">
                <h2>Carrito</h2>
                <div className="boton-agregar">
                    <span>{carrito.length} artículos</span>
                    <button className='boton-eliminar' onClick={vaciarAlCarrito}>Vaciar</button>
                </div>
                <ul>
                    {carrito.map((item, index) => (
                        <div key={index} className="carrito-item">
                            <img
                                src={item.imagen}
                                alt={item.nombre}
                                className="carrito-item-imagen"
                            />
                            <span>{item.nombre} - ${item.precio}</span>
                            <button className='boton-eliminar' onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </ul>
                <p className="carrito-total">
                    Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
                </p>
            </div>
        </div>
    );
};

export default TiendaVirtual;