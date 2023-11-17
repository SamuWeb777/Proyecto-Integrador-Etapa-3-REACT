import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'
import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'

const Inicio = () => {
  const {theme} = useContext(ThemeContext)
  const {productos} = useContext(ProductosContext)

    useEffect(() => {
      document.title='Tecno - Inicio'
    }, [])
    
    
  return (
    <>
  <section className="container-fluid carrusel ">
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/oferta-celular.webp" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/img/oferta-ban.webp" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/img/oferta-play.png" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  {/* ***************CATEGORIAS****************** */}
  <div className="categorias">
    <hr/>
    <div className="pestaña">
      <h6>Categorias</h6>
    </div>
    <h4>Buscar por categorias:</h4>
    <div className="iconos">
      <div className="icono-1">
        <NavLink to="/computadoras"><i className="fa-solid fa-laptop"></i></NavLink><br/>
        <p>Computadoras</p>
      </div>
      <div className="icono-1">
        <NavLink to="/celulares"><i className="fa-solid fa-phone"></i></NavLink><br/>
        <p>Celulares</p>
      </div>
      <div className="icono-1">
        <NavLink to="/relojes"><i className="fa-solid fa-clock"></i></NavLink><br/>
        <p>SmartWatch</p>
      </div>
      <div className="icono-1">
        <NavLink to="/camaras"><i className="fa-solid fa-camera "></i></NavLink><br/>
        <p>Camaras</p>
      </div>
      <div className="icono-1">
        <NavLink to="/auriculares"><i className="fa-solid fa-headphones"></i></NavLink><br/>
        <p>Auriculares</p>
      </div>
      <div className="icono-1">
        <NavLink to="/gamming"><i className="fa-solid fa-gamepad"></i></NavLink><br/>
        <p>Gamming</p>
      </div>
    </div>
    <hr/>
  </div>
  <main className="row container-fluid">
<section className="row my-5" >
  {
    productos && productos.map(producto => (
      <Card key={producto.id} producto={producto} />
    ))
  }
      
</section>
</main>

  {/* *****************SERVICIOS***************** */}
  <div className="caract">
    <div className="caract-1">
        <i className="fa-solid fa-truck-fast fa-2xl"></i>
      <h6><strong>ENTREGA RAPIDA Y GRATUITA</strong> </h6>
      <p>Para pedidos superiores a $10000.</p>
    </div>
    <div className="caract-1">
        <i className="fa-solid fa-headset fa-2xl"></i>
      <h6><strong> ATENCION AL CLIENTE</strong></h6>
      <p>Amigable y responsable.</p>
    </div>
    <div className="caract-1">
        <i className="fa-solid fa-shield fa-2xl"></i>
      <h6> <strong> GARANTIA</strong></h6>
      <p>Te devolvemos el dinero en 30 días.</p>
    </div>
  </div>
    </>
  )
}

export default Inicio