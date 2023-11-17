import React, { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ProductosContext from '../contexts/ProductosContext'
import Table from '../components/Table'
import { Form } from '../components/Form'


export const Alta = () => {

   const{theme} = useContext(ThemeContext)
   const{productos,crearProducto,eleminarProductoContexto,setusuarioAedita,usuarioAedita,actualizarProducto}=useContext(ProductosContext)
    useEffect(() => {
      document.title='Tecno - Alta'
    }, [])
    
  return (
    <>
    
      <div className='container justify-content-center'>
       <Form crearProducto={crearProducto} usuarioAedita={usuarioAedita}actualizarProducto={actualizarProducto} setusuarioAedita={setusuarioAedita}/>           
           <hr />
           
           <hr />
         <Table productos={productos}theme={theme} eleminarProductoContexto={eleminarProductoContexto} setusuarioAedita={setusuarioAedita}/>
     </div> 
    </>
  )
}

export default Alta