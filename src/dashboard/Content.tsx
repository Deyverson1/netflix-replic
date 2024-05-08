import '../styles/css/style.css'
export default function Content() {
  return (
    <section className="px-2 py-10 md:px-40 bg-[#000000]">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:w-5/12 ">
          <h2 className='w-full pb-3 text-5xl font-bold tracking-tighter'>Disfruta en tu TV.</h2>
          <p className='pl-1 text-lg tracking-tight text-gray-300'>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
        </div>
        <div className="flex items-center justify-center">
          <img src="img/tv.png" className='relative z-50 w-8/12' alt="" />
          <video className="absolute z-10 w-[300px] md:w-[320px] md:-translate-y-[5px] md:translate-x-0 -translate-y-[242px] translate-x-14" autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" className='z-50' /></video>
        </div>
        <div className="restaurar"></div>
      </div>
    </section>
  )
}