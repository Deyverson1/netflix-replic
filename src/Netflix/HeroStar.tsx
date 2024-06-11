import '../styles/css/netflix.css'
import { AlertIcon } from "../icons/Alert";
import { PlayerIcon } from "../icons/Player";
import { Top } from "../icons/Top";
import { useEffect, useState } from 'react';
import { HeroStarData } from '../database/HeroStar';
interface HeroStarItem {
  description: string;
  image: string;
  brand: string;
  top: string;
}
export default function HeroStar() {
  const [randomItem, setRandomItem] = useState<HeroStarItem | undefined>(undefined);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HeroStarData.length);
    setRandomItem(HeroStarData[randomIndex]);
  }, []);

  if (!randomItem) return null;
  return (
    <div className="top-0 h-screen bg-cover 2xl:pt-56 md:pt-40 px-14" style={{ backgroundImage: `${randomItem?.image}`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
      <div className="netflix"></div>
      <div className="netflix2"></div>
      <div className="relative flex flex-col w-5/12 gap-y-4">
        <img src={randomItem.brand} className="w-8/12" alt="" />
        {
          randomItem !== null && randomItem !== undefined && randomItem.top !== '' && (
            <div className="flex items-center gap-x-4">
              <div className="w-8">
                <Top />
              </div>
              <h1 className="text-xl font-bold text-white">{randomItem.top}</h1>
            </div>
          )
        }
        <h2 className="w-11/12 tracking-tight text-md">{randomItem.description}</h2>
        <div className="flex gap-x-4">
          <button className="flex items-center justify-center px-6 py-2 text-base font-bold text-black bg-white rounded-md gap-x-2 hover:bg-gray-300"><PlayerIcon /> Play</button>
          <button className="flex items-center justify-center px-6 py-2 text-base font-bold text-white rounded-md bg-opacity-80 bg-neutral-600 gap-x-2 hover:bg-opacity-60 hover:bg-neutral-700"><AlertIcon /> More info</button>
        </div>
      </div>
    </div>
  )
}