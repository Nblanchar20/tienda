import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Nav from "../Components/Nav";

const DetalleProducto = ({ productos, agregarAlCarrito }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const producto = productos.find(p => p.id === parseInt(id));
    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(producto);
        navigate('/');
    };

    return (
        <div className="principal">
            <Nav />
            <div className="producto-detalle">
                <div className="producto-imagenes">
                    <img src={producto.imagen} alt="Producto" className="detalle-imagen" />
                    {producto.imagenes.map((imagen) => (
                        <img src={imagen} alt="Producto" className="detalle-imagen" />


                    ))}
                </div>
                <div className="detalle-producto">
                    <h2 className="producto-nombre">{producto.nombre}</h2>
                    <p className="producto-precio" style={{ margin: '0' }}>Precio: ${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                    <button className="boton-agregar" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );

}

export default DetalleProducto