import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contactos from './pages/Contactos.jsx'
import Auriculares from './pages/Auriculares.jsx'
import Camaras from './pages/Camaras.jsx'
import Computadoras from './pages/Computadoras.jsx'
import Celulares from './pages/Celulares.jsx'
import Gamming from './pages/Gamming.jsx'
import Relojes from './pages/Relojes.jsx'
import Carrito from './pages/Carrito.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Alta from './pages/Alta.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ProductosProvider>
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/auriculares" element={<Auriculares />} />
          <Route path="/camaras" element={<Camaras />} />
          <Route path="/computadoras" element={<Computadoras />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/gamming" element={<Gamming />} />
          <Route path="/relojes" element={<Relojes />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarritoProvider>
    </ProductosProvider>
  </ThemeProvider>
)
