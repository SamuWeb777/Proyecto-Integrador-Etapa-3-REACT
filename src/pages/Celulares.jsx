import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import ThemeContext from '../contexts/ThemeContext'
import ProductosContext from '../contexts/ProductosContext'

const Celulares = () => {
  const {theme} = useContext(ThemeContext)
  const{productos} = useContext(ProductosContext)
  useEffect(() => {
    document.title='Tecno - Celulares'
  }, [])
  
  return (
    <>
    <div class="contactos">
        <h1 class="my-5 animate__animated animate__bounceInRight">Celulares</h1>
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

export default Celulares