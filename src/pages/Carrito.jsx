import React, { useContext, useEffect } from 'react'
import ItemCarrito from '../components/ItemCarrito'
import CarritoContext from '../contexts/CarritoContext'


const Carrito = () => {
  const {carrito,cantidadArticulosCarritoContext,precioTotalArticulosCarrito, guardarCarritoContext,productoSinIva,precioTotalArticulosCarritoSinIVA}=useContext(CarritoContext)

  useEffect(() => {
    document.title='Tecno - Carrito'
  }, [])
  
  return (
    <section className="container my-5">
      <div className="row d-flex justify-content-center contenedor">
        <div className="col-8">
          <div className="card mb-4 carrito">
            <div className="card-header bg-dark text-white py-4">
              <h5 className="mb-0">Carrito - {cantidadArticulosCarritoContext()}</h5>
            </div>
            <div className="card-body" id="lista-compra">
              {
                carrito && carrito.map(item => (
                  <ItemCarrito key={item.id} itemProducto={item} />
                ))
              }
              </div>
            </div>
          <div className="card mb-4">
            <div className="card-body tarjetas">
              <p><strong>Metodos de pago aceptados</strong></p>
              <img className="me-2" src="/img/amex.svg" alt="American Express"/>
              <img className="me-2" src="/img/master.svg" alt="MasterCard"/>
              <img className="me-2" src="/img/visa.svg" alt="Visa"/>
              <img className="me-2" src="/img/paypal.svg" alt="Paypal"/>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="card md-4">
            <div className="card-header py-3 bg-dark text-white">
              <h5 className="mb-0"><strong>Resumen carrito</strong></h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between aling-items-center border-0 px-0 pb-0">
                  Productos (sin iva)
                  <span id="sub-total">$ {precioTotalArticulosCarritoSinIVA()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between aling-items-center border-0 px-0 pb-0">
                  Envio
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>IVA</strong>
                  </div>
                  <p><strong id="iva">$ {productoSinIva()}</strong></p>
                </li>
                <li className="list-group-item d-flex justify-content-between aling-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total de la compra</strong>
                    <strong>(IVA incluido)</strong>
                  </div>
                  <p><strong>$ARS {precioTotalArticulosCarrito()}</strong></p>
                </li>
              </ul>
              <button type="button" className="btn btn-success btn-lg btn-block mt-4 btn-pagar" onClick={guardarCarritoContext}>Ir a pagar <i className="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrito