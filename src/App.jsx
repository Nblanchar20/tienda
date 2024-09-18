import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import TiendaVirtual from './view/TiendaVirtual';
import DetalleProducto from './view/DetalleProducto';
const App = () => {
  const [carrito, setCarrito] = useState([]);
  const productos = [
    {
      id: 1, nombre: 'Camiseta Colombia', precio: 20, 
      descripcion: 'PERSONALIZA TU CAMISETA NUEVA Lleva con orgullo tu pasión. Recuerda que al personalizar un artículo, el mismo no entra en nuestra política de cambios y devoluciones. No aplica ningún descuento.',
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd3211ccf3b8485091d5825e4b2bc913_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_21_model.jpg',
      imagenes: [
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/563469a049544d4bb5d17a89b50ec25a_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_23_hover_model.jpg',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82f4dff24d6a410a98bb161127e3e982_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_01_laydown.jpg',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/253fa22c844c4dcdb2548c8fffe20c89_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_02_laydown.jpg'
      ]
    },
    { id: 2, nombre: 'Camiseta Argentina', precio: 20, 
      descripcion: 'PERSONALIZA TU CAMISETA NUEVA Lleva con orgullo tu pasión. Recuerda que al personalizar un artículo, el mismo no entra en nuestra política de cambios y devoluciones.', 
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_21_model.jpg',
      imagenes:[
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/999df66fd6074e868808403d691edfed_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_23_hover_model.jpg',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d580c3e2e46248cdbfb71cff58d13d0a_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_25_model.jpg',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b9426d354b24b4da71048fe172ee10b_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_25_outfit.jpg',
      ],
    },
    { id: 3, nombre: 'Camiseta Deportiva', precio: 20, 
      descripcion: 'Equipación Deportiva 2024', 
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ee24b019f8640e886ffd3e19a6f2fc8_9366/Camiseta_de_Entrenamiento_Power_Rosa_IX9092_HM1.jpg' ,
      imagenes:[
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9357e77e6184e7bb88d5a54bfb33cec_9366/Camiseta_de_Entrenamiento_Designed_for_Training_Rosa_IX9149_23_hover_model.jpg',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb5504b8b5c6416ea3d9b8aa87cc8bc8_9366/Camiseta_de_Entrenamiento_Designed_for_Training_Rosa_IX9149_01_laydown.jpg',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0ff27da3095543d1968caabd9e9ec6cc_9366/Camiseta_de_Entrenamiento_Designed_for_Training_Rosa_IX9149_21_model.jpg'
      ]
    },
  ];

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

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <TiendaVirtual
            carrito={carrito}
            setCarrito={setCarrito}
            agregarAlCarrito={agregarAlCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
            vaciarAlCarrito={vaciarAlCarrito}
            productos={productos} />
        } />
        <Route path='/producto/:id' element={<DetalleProducto productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
      </Routes>
    </Router>
  );
};

export default App;
