import { SearchIcon } from "../icons/Search";
import '../styles/css/netflix.css'

export default function HeaderNet() {
  return (
    <section className="fixed z-50 w-full px-2 py-5 md:px-14 header-background">
      <nav className='flex items-center justify-between '>
        <div className="flex items-center gap-x-11">
          <img className="w-20 md:w-24" src="img/logo.png" alt="" />
          <ul className="flex text-sm font-bold gap-x-5">
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Novedades populares</li>
            <li>Mi lista </li>
            <li>Explora por idiomas</li>
          </ul>
        </div>
        <div>
          <SearchIcon/>
        </div>
      </nav>
    </section>
  )
}