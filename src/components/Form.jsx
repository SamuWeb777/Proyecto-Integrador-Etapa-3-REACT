import React, { useEffect, useState } from 'react'

const formIncial={
    id:null,
    nombre:"",
    caracteristicas:"",
    precio:"",
    foto:""
}
/*  */
export const Form = ({crearProducto,usuarioAedita,actualizarProducto,setusuarioAedita,theme}) => {
   const[form, setform] = useState(formIncial)
   useEffect(() => {
    usuarioAedita ? setform(usuarioAedita) : setform(formIncial)
   }, [usuarioAedita])

   const handleChange=(e)=>{
    setform({
        ...form,
        [e.target.name]:e.target.value,
        [e.target.caracteristicas]:e.target.value,
        [e.target.precio]:e.target.value,
        [e.target.foro]:e.target.value
    })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (form.id==null) {
            crearProducto(form)
        }else{
            
            actualizarProducto(form)
    
        }
      handleReset()
       }
    const handleReset=(e)=>{
        setform(formIncial)
        setusuarioAedita(null)
        }
   
  return (
    <div className='container d-flex justify-content-center '>
       <div className='text-center'>
           <h1 className='animate__animated animate__zoomInDown'>{form.id ? "Editar" : "Agregar"}</h1>
           <div className='row'>
           <form action="" onSubmit={handleSubmit} className=''>
            <input type="text" name='nombre' placeholder='Nombre del producto' onChange={handleChange} value={form.nombre} className=' input-alta me-2'/>
            <input type="text" name='caracteristicas' placeholder=' Caracteristicas'onChange={handleChange} value={form.caracteristicas} className='input-alta me-2'/>
            <input type="text" name='precio' placeholder='Ingrese Precio'onChange={handleChange} value={form.precio} className='input-alta me-2'/>
            <input type="text" name='foto' placeholder='Ingrese URL de foto'onChange={handleChange} value={form.foto} className=' input-alta me-2'/>
            <br />
            <button className="btn btn-success me-1 mt-3" type='submit'>Enviar</button>
            <button  className="btn btn-dark mt-3 " type='reset' onClick={handleReset}>Limpiar</button>
           </form>
           </div>
       </div>
   </div>
  )
}
