import React from 'react'
import { TableRow } from './TableRow'

export const Table = ({productos,eleminarProductoContexto,setusuarioAedita,theme}) => {
  return (
    <div className='container'>
        <h1>Tabla de productos</h1>
        <table className={`table table-${theme}`}  >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Precio</th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
                <tbody>
                   {
               productos && productos.map((productos)=>(
                <TableRow productos={productos} eleminarProductoContexto={eleminarProductoContexto} setusuarioAedita={setusuarioAedita} key={productos.id}/>
                ))
                   }
                </tbody>
        </table>
    </div>
  )
}

export default Table