import React from 'react';

const ProductCard = ({ producto, onAgregarAlCarrito }) => {
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
    </div>
  );
};


export default ProductCard;