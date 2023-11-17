import React, { useContext } from 'react'
import Carrito from '../pages/Carrito'
import CarritoContext from '../contexts/CarritoContext'


const ItemCarritoInicio = ({ item }) => {
  const { eliminarProductoCarritoContext } = useContext(CarritoContext)
  const handleEliminar = (id) => {
    eliminarProductoCarritoContext(id)
  }
  return (
    <>
      <tr>
        <td>
          <img src={`img/${item.foto}`} alt={item.nombre} width="100" />
        </td>
        <td>{item.nombre}</td>
        <td><span>$</span>{item.precio}</td>
        <td>
          <button className="borrar-producto fas fa-times-circle"  onClick={() => handleEliminar(item.id)}></button>
        </td>
      </tr>
    </>
  )
}

export default ItemCarritoInicio