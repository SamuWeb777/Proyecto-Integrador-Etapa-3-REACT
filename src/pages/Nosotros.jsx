import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Nosotros = () => {
    useEffect(() => {
      document.title='Tecno - Nosotros'
    }, [])
    
  return (
    <>
    <main className="container nosotros">
    <div className="row my-5">
      <div className="col-7  ">
        <h1 className="titulo-nosotros animate__animated animate__zoomIn">Todo Sobre <span>nosotros</span></h1>
        <h3>Nuestra Misión: Innovación, Integridad y Compromiso en Cada Paso</h3>
        <p>"En TecnoNautas-EIT, nuestra pasión es crear soluciones innovadoras que marcan la diferencia. Desde nuestros
          humildes comienzos,
          nos hemos esforzado por ofrecer productos/servicios de alta calidad que satisfagan las necesidades de nuestros
          clientes. Nuestra empresa
          se basa en valores sólidos de integridad, compromiso y excelencia. Con un equipo apasionado y diverso de
          profesionales altamente capacitados,
          estamos dedicados a impulsar el cambio y el progreso en la industria. Creemos en la importancia de establecer
          relaciones sólidas con nuestros
          clientes, colaboradores y comunidades locales.
          Estamos emocionados de ser parte de su historia y esperamos continuar siendo su socio confiable en el futuro."
        </p>

        <div className="nosotros-iconos">
          <ul>
            <li><NavLink to="https://facebook.com"><i className="fa-brands fa-facebook-square fa-3x fb"></i></NavLink></li>
            <li><NavLink to="https://twitter.com"><i className="fa-brands fa-twitter-square fa-3x twi"></i></NavLink></li>
            <li><NavLink to="https://instagram.com"><i className="fa-brands fa-instagram-square fa-3x ins"></i></NavLink></li>
            <li><NavLink to="mailt:max@gmail.com"><i className="fa fa-envelope-square fa-3x mail"></i></NavLink></li>
          </ul>
        </div>
      </div>
      <div class="col-5 ">
        <div class="nosotros-imagen">
          <img className="img-fluid" src="/img/aboutt.webp" alt="oficina"/>
        </div>
      </div>
      <h1 className="titulo-nosotros animate__animated animate__zoomIn"><span>Estamos aqui:</span></h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6190300170038!2d-65.
                30354302471758!3d-24.185090184802945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f43ac7b8b3b%3A0xb6d57014df9bdb52!
                2sGral.%20Belgrano%20563%2C%20Y4600ABI%20San%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1ses-419!2sar!4v1697072379331!5m2!1ses-
                419!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-
                when-downgrade"></iframe>
    </div>
  </main>
    </>
  )
}

export default Nosotros