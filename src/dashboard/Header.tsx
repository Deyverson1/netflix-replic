import '../styles/css/style.css'
export default function Header() {
  return (
    <>
      <div className="h-screen" style={{ backgroundImage: 'url(../img/FondoNetflix.jpg)' }}></div>
      <section className="cabecera px-36 pt-7">
        <nav className='flex  justify-between items-center'>
          <div className="">
            <img className="w-36" src="img/logo.png" alt="" />
          </div>
          <div className="">
            <span className='bg-[#E50914] px-4 text-sm font-semibold py-1.5 rounded-md hover:bg-[#ff3d3d] cursor-pointer'>Sign In</span>
          </div>
        </nav>

      </section>
    </>
  )
}