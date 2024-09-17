import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ producto, onAgregarAlCarrito }) => {
  const navigate = useNavigate();
  return (
    
    <div className="producto-card">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="producto-imagen"
      />
      <h2 className="producto-nombre">{producto.nombre}</h2>
      <p className="producto-precio">${producto.precio}</p>
      <button
        onClick={() => onAgregarAlCarrito(producto)}
        className="boton-agregar"
      >
        Agregar al carrito
      </button>
      <button
        onClick={() => navigate(`/producto/${producto.id}`)}
        className="boton"
      >
        Ver Mas
      </button>
    </div>
  );
};


export default ProductCard;