import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'

export const Card = ({producto}) => {
  const{agregarCarritoContext}= useContext(CarritoContext)
    const handleComprar = (producto) =>{
      console.log(producto)
      agregarCarritoContext(producto)

    }
  return (
    <div className="card col-3 m-3 p-3 mb-2 bg-dark-subtle text-emphasis-dark" >
        <img src={`/img/${producto.foto}`} className="card-img-top img-producto" alt="Acer"/>
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <ul className="list-unstyled mt-3 mb-4">
            <li className="list-group-item text-uppercase color">{producto.color}</li>
            <li className="list-group-item">{producto.caracteristicas}</li>
            <li className="list-group-item precio">{producto.precio}</li>
          </ul>
          <hr/>
          <button className="btn btn-secondary agregar-carrito" onClick={()=>handleComprar(producto)}>Agregar al carrito</button>
        </div>
      </div>
  )
}

export default Card