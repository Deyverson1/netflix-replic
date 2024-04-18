import { SearchIcon } from "../icons/Search";

export default function HeaderNet() {
  return (
    <section className="px-2 py-5 bg-gradient-to-b from-black to-neutral-900 md:px-14">
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