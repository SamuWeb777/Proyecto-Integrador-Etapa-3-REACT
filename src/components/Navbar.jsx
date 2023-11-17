import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "../index.css"
import CarritoContext from '../contexts/CarritoContext'
import ItemCarritoInicio from './ItemCarritoInicio'
import ThemeContext from '../contexts/ThemeContext'
const Navbar = () => {
  const {handleTheme, cargarLocalStorage}= useContext(ThemeContext)

  useEffect(() => {
    cargarLocalStorage()
    }, [])
    
    const {carrito,vaciarCarritoContext}=useContext(CarritoContext)
    const navigate=useNavigate()

  const handleComprar = () => {
    
    if ( carrito.length !== 0 ) {
      navigate('/carrito')
    } else {
      Swal.fire({
        title: 'Atencion!',
        html: '<strong>No hay productos en el carrito de compras!</strong> ',
        imageUrl: 'https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png',
        imageWidth:200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: '#E4EFE7',
        confirmButtonText:'Ir comprar',
        confirmButtonColor: '#343D58'
      })
    }
  }
  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }

  return (
    <div className="container-fluid ">
    <div className="row cont-1" >
        <div className=" my-5 titulo-principal" >
          <h1 className="tit-1 animate__animated animate__heartBeat">TecnoNautas-EIT</h1>
          <img src="/img/Icono.svg" height={100} alt="principal" className='animate__animated animate__heartBeat'/>
        </div>
      </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid d-flex justify-content-between">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <form className="d-flex" role="search">
        <input className="form-control ms-1 pe-5" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-secondary ms-2" type="submit">Buscar</button>
    </form>
    <div className="collapse navbar-collapse navegador" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link link active" aria-current="page" to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link link active" to="/nosotros">Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link link active" to="/contactos">Contactos</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </NavLink>
          <ul className="dropdown-menu ">
            <li><NavLink className="dropdown-item" to="/auriculares">Auriculares</NavLink></li>
            <li><NavLink className="dropdown-item" to="/camaras">Camaras</NavLink></li>
            <li><NavLink className="dropdown-item" to="/computadoras">Computadoras</NavLink></li>
            <li><NavLink className="dropdown-item" to="/celulares">Celulares</NavLink></li>
            <li><NavLink className="dropdown-item" to="/gamming">Gamming</NavLink></li>
            <li><NavLink className="dropdown-item" to="/relojes">SmartWatch</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link link active" aria-disabled="true" to="/alta">Alta</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
        <ul className="ul-modo">
            <li className="p-2 switch"> 
            <i className="fa-solid fa-sun" id='cambio' onClick={handleTheme}></i> 
            <i className="fa-solid fa-moon" id='cambio'onClick={handleTheme} ></i>
            </li>
        </ul>
        <div className="d-flex cabece">
            <div className="d-flex">
              <div className="dropdown dropstart">
          
                <a type="button" className="me-5 p-3 carrito-po" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-store fa-2xl" ></i>
                </a>
                <ul id="carrito" className="dropdown-menu mx-2">
                  <table id="lista-carrito" className="table">
                    <thead>
                      <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                          carrito && carrito.map(item =>(
                            <ItemCarritoInicio key={item.id} item={item}/>
                          ))
                        }
                    </tbody>
                  </table>
                  <div className="d-grid gap-2 d-md-block justify-content-md-center ms-1">
                    <button id="vaciar-carrito" className="btn btn-danger" disabled={carrito.length===0} onClick={handleVaciarCarrito}>Vaciar Carrito</button>
                    <button id="procesar-pedido" className="btn btn-success" onClick={handleComprar}>Procesar Compra</button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
</nav>
</div>
  )
  }
export default Navbar