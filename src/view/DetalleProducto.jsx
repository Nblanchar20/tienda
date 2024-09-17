import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetalleProducto =({productos})=>{
    const {id}=useParams()
    const navigate = useNavigate()
    const producto = productos.find(producto=> producto.id=== parseInt(id))
    console.log(producto)


    return(
        <div>
            <h1>Hola Mundo {id}</h1>
            <button onClick={()=>navigate('/')}>Volver</button>
        </div>
    )
}

export default DetalleProducto