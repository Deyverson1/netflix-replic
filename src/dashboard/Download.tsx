import '../styles/css/style.css'
export default function Download() {
  return (
    <section className="flex items-center justify-center px-2 md:py-20 pb-28 md:px-40 bg-[#000000]">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="w-6/12 izquierda ">
          <div className="flex items-center justify-center md:flex-row ">
            <img className='w-8/12' src="img/mobile-0819.jpg" alt="" />
            <div className="absolute p-2 translate-y-24 md:translate-y-40  border-2 border-[#434343] flex items-center justify-center bg-black rounded-md w-fit">
              <div className="flex items-center justify-center w-4/5 ">
                <div className="">
                  <img className='w-10 py-2 mr-3' src="img/boxshot.png" alt="" />
                </div>
                <div className="">
                  <p className='text-sm font-bold'>Stranger Things</p>
                  <p className='text-sm' >Descargando...</p>
                </div>
                <div className="restaurar"></div>
              </div>
              <div className="text-center gif derecha">
                <img className='w-6/12' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-20 md:w-5/12 derecha flotanteTexto">
          <h2 className='w-full pb-5 text-5xl font-bold tracking-tighter md:text-54l'>Descarga contenidos para ver donde vayas.</h2>
          <p className='pl-1 text-lg tracking-tight text-gray-300'>Disfruta offline tus películas y programas favoritos.</p>
        </div>
      </div>
    </section>
  )
}