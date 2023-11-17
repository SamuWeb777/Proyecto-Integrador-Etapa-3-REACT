import React, { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ProductosContext from '../contexts/ProductosContext'
import Card from '../components/Card'

const Relojes = () => {
  const {theme} = useContext(ThemeContext)
  const{productos} = useContext(ProductosContext)
  useEffect(() => {
    document.title='Tecno - SmartWatch'
  }, [])
  
  return (
    <>
    <div class="contactos">
        <h1 class="my-5 animate__animated animate__bounceInRight">Smart Watch</h1>
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

export default Relojes