import '../styles/css/style.css'
export default function Content() {
  return (
    <section className="px-2 py-10 md:px-40">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:w-4/12 ">
          <h2 className='w-full pb-3 text-5xl font-semibold'>Disfruta en tu TV.</h2>
          <p className='pl-1 text-lg tracking-tight'>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p></div>
        <div className="derecha flotanteImagen">
          <img src="img/tv.png" className='relative z-50' alt="" />
          <video className="absolute z-10 w-[300px] md:w-[500px] md:-translate-y-[380px] md:translate-x-20 -translate-y-[242px] translate-x-14"  autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" className='z-50' /></video>
        </div>
        <div className="restaurar"></div>
      </div>
    </section>
  )
}