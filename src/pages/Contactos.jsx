import React, { useEffect } from 'react'

const Contactos = () => {
  useEffect(() => {
    document.title='Tecno - Contactos'
  }, [])
  
  return (
    <>
    <section className="container contactos my-5">
      <h5>¿Tenes alguna consulta?</h5>
      <h1 className='animate__animated animate__fadeInDown'>Estamos para ayudarte</h1>
      <hr/>
      <div className="row">
        <div className="col-md-6 bloque-1 ">
          <h4>TecnoNautas</h4>
          <h1>Habla con nosotros</h1>
          <p>Comunicate con nosotros facilmente a través de nuestro formulario de <br/> contacto.</p>
        </div>
        <div className="col-md-6  ">
          <div className="cont-form">
            <form action="https://formspree.io/f/xpzgwgeb" method="post" className="formulario">
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="NOMBRE" required/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="EMAIL" required/>
              </div>
              <div className="mb-3 ">
                <textarea name="asunto" className="form-control" id="" cols="30" rows="10" placeholder="ASUNTO"
                  required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contactos