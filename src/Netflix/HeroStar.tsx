import { AlertIcon } from "../icons/Alert";
import { PlayerIcon } from "../icons/Player";
import { Top } from "../icons/Top";
import '../styles/css/netflix.css'
export default function HeroStar() {
  return (
    <div className="w-screen h-screen pt-8 bg-cover px-14" style={{ backgroundImage: 'url(https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRUkbJwNTG0p1FjCUzBvhlwLHrUFzLoFl10gpbOtGZ27MSt8zyMBzXg2IS6xmYQI42W986k6brypXdB_V1c5xKbd-ls_IGowW1O_.webp?r=18e)', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col w-5/12 gap-y-4">
        <img src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbTSepjlQfmc_FE0RQsQjT8bTl091nyRHz0C0sG-vAtSgS34oaxKSAQ5NxEg8XrsAzyjwCsNFwh7vyhEZAqmeeDOymFtR-XwEEOnu9GKRoJw.webp?r=fac" className="w-11/12" alt="" />
        <div className="flex items-center gap-x-4">
          <div className="w-8">
            <Top />
          </div>
          <h1 className="text-xl font-bold">N.º 9 en series en Niños hoy</h1>
        </div>
        <h2 className="w-11/12 text-lg">Inspirado por un campeonato que vio en televisión, el joven Hinata comienza a entrenar con un equipo de vóleibol sin importarle su pequeña estatura.</h2>
        <div className="flex gap-x-4">
          <button className="flex items-center justify-center px-6 py-3 text-base font-bold text-black bg-white rounded-sm gap-x-2"><PlayerIcon /> Reproducir</button>
          <button className="flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-600 rounded-sm gap-x-2"><AlertIcon /> Mas información</button>
        </div>
      </div>
    </div>
  )
}