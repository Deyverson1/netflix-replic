import '../styles/css/style.css'
export default function Enjoy() {
  return (
    <section className="px-2 py-5 md:py-20 md:px-40">
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <div className="w-5/12">
          <h2 className='w-full pb-3 text-4xl font-semibold md:text-5xl'>Disfruta donde quieras.</h2>
          <p className='pl-1 text-lg tracking-tight'>Películas y programas ilimitados en tu teléfono, tablet, computadora y TV sin costo extra.</p>
        </div>
        <div className="flex items-center justify-center w-full md:w-6/12 ">
          <img src="img/device-pile.png" className='z-50' alt="" />
          <video className="absolute z-10 w-7/12 -translate-y-12 md:w-[350px] md:-translate-y-16 disfruta-video" autoPlay muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
          </video>
        </div>
        <div className=""></div>
      </div>
    </section>
  )
}