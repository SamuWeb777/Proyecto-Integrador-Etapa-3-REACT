import React from 'react'

export const TableRow = ({productos,eleminarProductoContexto,setusuarioAedita}) => {
  return (
    <tr >
    <td className='align-middle'>{productos.id}</td>
    <td className='align-middle'>{productos.precio}</td>
    <td className='align-middle'>{productos.nombre}</td>
    <td className='align-middle'>{productos.foto}</td>
    <td>
    <button className='btn btn-primary m-2' onClick={()=>setusuarioAedita(productos)}>Modificar</button>
    <button className='btn btn-danger' onClick={()=>eleminarProductoContexto(productos.id)}>Eliminar</button>
    </td>
    
</tr>
  )
}

