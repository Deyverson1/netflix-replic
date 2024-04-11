import '../styles/css/style.css'
export default function Content() {
  return (
    <section className="tv">
      <div className="contenido">
        <div className="izquierda flotanteTexto"><h2>Disfruta en tu TV.</h2><p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p></div>
        <div className="derecha flotanteImagen">
          <img src="img/tv.png" alt="" />
          <video className="our-story-card-video"><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" /></video>
        </div>
        <div className="restaurar"></div>
      </div>
    </section>
  )
}