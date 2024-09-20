import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemListProduct = ({ producto, EliminarProducto }) => {
    const navigate = useNavigate();
    return (

        <div className="item-product">
            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
            />
            <div style={{padding:'10px'}}>
                <h2 className="producto-nombre">{producto.nombre}</h2>
                <div  style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                    <button
                        onClick={() => navigate(`/edit-producto/${producto.id}`)}
                        className="boton-agregar"
                    >
                        Editar
                    </button>
                    <button className='boton-eliminar' onClick={() => EliminarProducto(producto.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};


export default ItemListProduct;