import '../styles/css/style.css'
export default function Content() {
  return (
    <section className="tv">
      <div className="contenido">
        <div className="izquierda flotanteTexto">
          <h2 className='w-full pb-3 text-5xl font-semibold'>Disfruta en tu TV.</h2>
          <p className='pl-1 text-lg tracking-tight'>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p></div>
        <div className="derecha flotanteImagen">
          <img src="img/tv.png" className='relative z-50' alt="" />
          <video className="z-10 our-story-card-video"  autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" className='z-50' /></video>
        </div>
        <div className="restaurar"></div>
      </div>
    </section>
  )
}