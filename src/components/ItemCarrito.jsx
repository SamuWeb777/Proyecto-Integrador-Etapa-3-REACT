import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import CarritoContext from '../contexts/CarritoContext'




 const ItemCarrito = ({itemProducto}) => {
    const {cambiarCantidadCarritoContext,eliminarProductoCarritoContext}=useContext(CarritoContext)

    let precioCantidad=itemProducto.precio*itemProducto.cantidad

    const [total, setTotal] = useState(precioCantidad)  
  const [cantidadInput,handleChange]=useForm({
    cantidad:itemProducto.cantidad
  })
  useEffect(() => {
    let totalReCalculado=Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
    setTotal(totalReCalculado)
    itemProducto.cantidad=cantidadInput.cantidad
    cambiarCantidadCarritoContext(itemProducto)
  
  }, [cantidadInput.cantidad])
  return (
    <div className="row py-3 mb-3">
    <div className="col-4 mb-1">
      
      <div className="bg-image rounded"><img className="w-100 borderImg" src={`/img/${itemProducto.foto}`} alt={itemProducto.caracteristicas}/></div>
      </div>
  {
   
  }
      <div className="col-5">
      <div className="container" >
          <p className="CarritoFontP text-body-secondary">{itemProducto.caracteristicas}"
          </p>
  
      </div>
      <ul> 
          <li className="CarritoFont text-body-secondary"><i className=""> Colores:Todos los colores</i></li>
          <li className="CarritoFont text-body-secondary"><i className="bi bi-journal-bookmark">${itemProducto.nombre} </i></li>
          <li className="CarritoFont text-body-secondary"><i className="bi bi-cash-coin">$${itemProducto.precio}</i></li>
          
      </ul>
      <button  className="btn-danger fa-solid fa-trash  me-1 mb-2 mx-3 tachito "  
      style={{ color: '#931528' }} 
      onClick={() =>eliminarProductoCarritoContext(itemProducto.id)}>
      </button>
       </div>
      {/*  */}
      <div className="col-3">
      <input
        type="number"
        min="1"
        className="form-control text-center cantidad"
        placeholder="Cantantidad"
        name='cantidad'
        value={cantidadInput.cantidad}
        onChange={handleChange} />
      <p className="text-center  CarritoFont"><strong className="precio text-body-secondary">${total}</strong>
      </p>
      <div className="d-flex justify-content-end LugarDiv ">
        </div>
  </div>

  <hr/>
  </div>
  )
}

export default ItemCarrito