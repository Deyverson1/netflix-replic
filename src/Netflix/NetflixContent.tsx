import '../styles/css/netflix.css'
import CarouselNetflix from "./CarouselNetflix";
import { populars } from '../database/Populars';
import { Trending } from '../database/TrendingNow';
import { UsaTv } from '../database/USTv';
export default function NetflixContent() {
  return (
    <section className="relative z-10 pt-12 pb-0 bg-transparent -mb-36 h-fit -top-48">
      <section className="flex flex-col py-5 px-14 gap-y-2">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix content={populars} />
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">Trending Now</h1>
        <CarouselNetflix content={Trending} />
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">US TV Shows Dubbled in Spanish</h1>
        <CarouselNetflix content={UsaTv} />
      </section>
      {/* <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix content={populars} />
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix content={populars} />
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix content={populars} />
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix content={populars} />
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 ">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix content={populars} />
      </section> */}
    </section>
  )
}