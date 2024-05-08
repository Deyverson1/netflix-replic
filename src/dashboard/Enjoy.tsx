import '../styles/css/style.css'
export default function Enjoy() {
  return (
    <section className="px-2 py-5  md:py-24 md:px-40 bg-[#000000]">
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <div className="w-5/12">
          <h2 className='w-full pb-4 text-4xl font-bold tracking-tighter md:text-5xl'>Disfruta donde quieras.</h2>
          <p className='pl-1 text-lg tracking-tight text-gray-300'>Películas y programas ilimitados en tu teléfono, tablet, computadora y TV sin costo extra.</p>
        </div>
        <div className="flex items-center justify-center ">
          <img src="img/device-pile.png" className='z-50 w-9/12' alt="" />
          <video className="absolute z-10 w-7/12 -translate-y-12 md:w-[285px] md:-translate-x-1 md:-translate-y-14 disfruta-video" autoPlay muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
          </video>
        </div>
        <div className=""></div>
      </div>
    </section>
  )
}