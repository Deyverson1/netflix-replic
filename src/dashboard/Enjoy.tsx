import '../styles/css/style.css'
export default function Enjoy() {
  return (
    <section className="disfruta">
      <div className="contenido">
        <div className="izquierda flotanteTexto">
          <h2>Disfruta donde quieras.</h2>
          <p>Películas y programas ilimitados en tu teléfono, tablet, computadora y TV sin costo extra.</p>
        </div>
        <div className="derecha flotanteImagen">
          <img src="img/device-pile.png" alt="" />
          <video className="our-story-card-video" autoPlay muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
          </video>
        </div>
        <div className="restaurar"></div>
      </div>
    </section>
  )
}