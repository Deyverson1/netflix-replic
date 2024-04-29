import { Link } from 'react-router-dom'
import '../styles/css/style.css'
export default function Header() {
  return (
    <>
      <section className="z-50 py-56 -2 z- md:px-40 cabecera pt-7">
        <nav className='flex items-center justify-between'>
          <div className="">
            <img className="w-20 md:w-36" src="img/logo.png" alt="" />
          </div>
          <div className="">
            <Link to={'/login'}><span className='bg-[#E50914] px-4 text-sm font-semibold py-1.5 rounded-md hover:bg-[#ff3d3d] cursor-pointer'>Sign In</span></Link>
          </div>
        </nav>
      </section>
    </>
  )
}