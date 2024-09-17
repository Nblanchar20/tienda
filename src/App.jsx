import React , { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TiendaVirtual from "./view/TiendaVirtual";
import DetalleProducto from "./view/DetalleProducto";
const productos = [
  { id: 1, nombre: 'Camiseta Colombia', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd3211ccf3b8485091d5825e4b2bc913_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_21_model.jpg' },
  { id: 2, nombre: 'Camiseta Argentina', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_21_model.jpg' },
  { id: 3, nombre: 'Camiseta Deportiva', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ee24b019f8640e886ffd3e19a6f2fc8_9366/Camiseta_de_Entrenamiento_Power_Rosa_IX9092_HM1.jpg' },
];

const App =()=>{
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarAlCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (productoId) => {
    const index = carrito.findIndex(item => item.id === productoId);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };
  return(
    <Router>
      <Routes>
        <Route path="/" element={<TiendaVirtual carrito={carrito} productos={productos} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} vaciarAlCarrito={vaciarAlCarrito}/>}/>
        <Route path="/producto/:id" element={<DetalleProducto productos={productos}/>}/>
      </Routes>
    </Router>
  )
}

export default App