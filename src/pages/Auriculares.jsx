import React, { useContext, useEffect, useState } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import Card from '../components/Card'
import ThemeContext from '../contexts/ThemeContext'


const Auriculares = () => {
  const {theme} = useContext(ThemeContext)
  const{productos} = useContext(ProductosContext)
  useEffect(() => {
    document.title='Tecno - Auriculares'
  }, [])
  
  
  return (
    <>
    <div class="contactos">
        <h1 class="my-5 animate__animated animate__bounceInRight">Auriculares</h1>
    </div>
    <hr/>
    <section className="row my-5" >
  {
    productos && productos.map(producto => (
      <Card key={producto.id} producto={producto} />
    ))
  }
      
</section>
</>
  )
}

export default Auriculares