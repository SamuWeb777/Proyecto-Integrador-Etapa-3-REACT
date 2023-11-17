import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container-fluid">
    <div className="row pie">
      <div className="col-3 aa">
        <h2><strong> Navegación</strong></h2>
        <Link to="/" className="link">Inicio</Link><br/>
        <Link to="/contactos" className="link">Contactos</Link><br/>
        <Link to="/nosotros" className="link">Nosotros</Link><br/>
        <Link to="/alta" className="link">Alta de producto</Link>
      </div>
      <div className="col-3 aa">
        <h2><strong> Contactanos</strong></h2>
        <p>Domicilio <br/> Email@gmail.com <br/>+54-012-4567-895</p>
      </div>
      <div className="col-3 aa">
        <h2><strong> Enlaces rápidos</strong></h2>
        <Link to="/" className="aaa link">Politica y privacidad</Link><br/>
        <Link to="/" className="aaa link">Condiciones de uso</Link><br/>
        <a href="" className="aaa link">Preguntas frecuentes</a>
      </div>
      <div className="col-3 aa">
        <h2><strong> Descarga la App</strong></h2>
        <img className="google" src="/img/google-play-badge.png" alt="google play"/>
        <img className="google" src="/img/app-store.png" alt="App Strore"/>
      </div>
    </div>
    <hr/>
    <p className="copyrigth">&copy; 2023 Samuel Acuña. Todos los derechos reservados</p>
  </footer>
  )
}

export default Footer