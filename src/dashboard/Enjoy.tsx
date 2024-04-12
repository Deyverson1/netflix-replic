import '../styles/css/style.css'
export default function Enjoy() {
  return (
    <section className="px-40 py-20">
      <div className="flex items-center justify-center w-full">
        <div className="max-w-6/12">
          <h2 className='w-full pb-3 text-5xl font-semibold'>Disfruta donde quieras.</h2>
          <p className='pl-1 text-lg tracking-tight'>Películas y programas ilimitados en tu teléfono, tablet, computadora y TV sin costo extra.</p>
        </div>
        <div className="flex items-center justify-center w-6/12 ">
          <img src="img/device-pile.png" className='z-50' alt="" />
          <video className="absolute z-10 disfruta-video" autoPlay muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
          </video>
        </div>
        <div className=""></div>
      </div>
    </section>
  )
}