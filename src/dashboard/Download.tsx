import '../styles/css/style.css'
export default function Download() {
  return (
    <section className="flex items-center justify-center px-40 py-20">
      <div className="contenido">
        <div className="w-6/12 izquierda ">
          <div className="flex flex-col items-center justify-center ">
            <img className='w-full' src="img/mobile-0819.jpg" alt="" />
            <div className="absolute p-2 translate-y-40  border-2 border-[#434343] flex items-center justify-center bg-black rounded-md w-fit">
              <div className="flex items-center justify-center w-4/5 ">
                <div className="">
                  <img className='w-10 py-2 mr-3' src="img/boxshot.png" alt="" />
                </div>
                <div className="textoPortada derecha">
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
        <div className="w-7/12 derecha flotanteTexto">
          <h2 className='w-full pb-5 text-5xl font-semibold'>Descarga contenidos para ver donde vayas.</h2>
          <p className='pl-1 text-lg tracking-tight'>Disfruta offline tus películas y programas favoritos.</p>
        </div>
      </div>
    </section>
  )
}