import '../styles/css/style.css'
export default function Download() {
  return (
    <section className="descarga">
      <div className="contenido">
        <div className="izquierda w-6/12 flotanteImagen">
          <div className="tarjeta">
            <img className='relative -mb-36' src="img/mobile-0819.jpg" alt="" />
            <div className="tarjetaInt">
              <div className="portada w-4/5 izquierda">
                <div className="imgPortada izquierda">
                  <img className='w-14 mr-3' src="img/boxshot.png" alt="" />
                </div>
                <div className="textoPortada derecha">
                  <p className='text-sm font-bold'>Stranger Things</p>
                  <p className='text-sm' >Descargando...</p>
                </div>
                <div className="restaurar"></div>
              </div>
              <div className="gif derecha text-center">
                <img className='w-6/12' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
              </div>
              <div className="restaurar"></div>
            </div>
          </div>
        </div>
        <div className="derecha w-6/12 flotanteTexto">
          <h2>Descarga contenidos para ver donde vayas.</h2>
          <p>Disfruta offline tus películas y programas favoritos.</p>
        </div>
        <div className="restaurar"></div>
      </div>
    </section>
  )
}