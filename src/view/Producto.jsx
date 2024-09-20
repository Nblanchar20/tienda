import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../Components/Nav';


const CrearProducto = ({ productos, agregarProducto, editarProducto }) => {
    const navigate = useNavigate();
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        imagen: '',
        imagen1: '',
        imagen2: '',
        imagen3: '',
        descripcion: ''
    });
    const { id } = useParams()
    const editar = !!id;


    useEffect(() => {
        if (editar && id) {
            const editarProducto = productos.find(p => p.id === parseInt(id));
            setProducto({
                id: editarProducto.id,
                nombre: editarProducto.nombre,
                precio: editarProducto.precio,
                imagen: editarProducto.imagen,
                imagen1: editarProducto.imagenes[0],
                imagen2: editarProducto.imagenes[1],
                imagen3: editarProducto.imagenes[2],
                descripcion: editarProducto.descripcion
            })
        }
    }, [id, editar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto(prevProducto => ({
            ...prevProducto,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editar && id) {
            const productoEditado = {
                ...producto,
                imagenes: [producto.imagen1, producto.imagen2, producto.imagen3],
                precio: parseFloat(producto.precio)
            };
            editarProducto(productoEditado)
        } else {

            const nuevoProducto = {
                ...producto,
                id: Date.now(),
                imagenes: [producto.imagen1, producto.imagen2, producto.imagen3],
                precio: parseFloat(producto.precio)
            };
            delete producto.imagen1;
            delete producto.imagen2;
            delete producto.imagen3;
            agregarProducto(nuevoProducto);
        }
        navigate('/');
    };
    return (
        <div className="principal">
            <Nav />
            <div className="crear-producto">
                <h2>Crear Nuevo Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="crear-producto-info">
                        <div>
                            <div>
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={producto.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="precio">Precio:</label>
                                <input
                                    type="number"
                                    id="precio"
                                    name="precio"
                                    required
                                    value={producto.precio}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                />
                            </div>
                            <div>
                                <label htmlFor="imagen">URL de la Imagen Principal:</label>
                                <input
                                    type="url"
                                    id="imagen"
                                    name="imagen"
                                    value={producto.imagen}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="imagen">URL de la Imagen:</label>
                                <input
                                    type="url"
                                    id="imagen1"
                                    name="imagen1"
                                    value={producto.imagen1}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="imagen">URL de la Imagen:</label>
                                <input
                                    type="url"
                                    id="imagen2"
                                    name="imagen2"
                                    value={producto.imagen2}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="imagen">URL de la Imagen:</label>
                                <input
                                    type="url"
                                    id="imagen3"
                                    name="imagen3"
                                    value={producto.imagen3}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={producto.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">{ editar?"Editar":"Crear"} Producto</button>
                </form>
            </div>
        </div>
    );
}

export default CrearProducto