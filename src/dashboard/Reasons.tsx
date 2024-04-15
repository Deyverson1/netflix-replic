import { ArrowDown } from "../icons/ArrowDownNetflix"
import { Profiles } from "../icons/ProfilesNetflix"
import { Telescope } from "../icons/TelescopeNetflix"
import { TvIcon } from "../icons/TvNetflix"

export default function Reason() {
  const data = [
    { title: 'Enjoy on your TV', description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.', icon: TvIcon },
    { title: 'Download your shows to watch offline', description: 'Save your favorites easily and always have something to watch.', icon: ArrowDown },
    { title: 'Watch everywhere', description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.', icon: Telescope },
    { title: 'Create profiles for kids', description: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.', icon: Profiles },
  ]
  return (
    <section className="flex flex-col px-40 pt-10 bg-gradient-to-bottom-right from-gray-500 via-purple-500 to-pink-500">
      <h3 className="text-2xl font-semibold text-gray-100">More Reasons to Join</h3>
      <main className="flex flex-1 gap-4 pt-4">
        {data.map((dato, index) => (
          <article key={index} className="flex flex-col justify-between flex-1 p-4 py-5 bg-gradient-to-br from-[#192247] to-[#210e17] rounded-xl">
            <div>
              <h1 className="pb-2 text-2xl font-semibold">{dato.title}</h1>
              <h2 className="tracking-tight text-gray-400">{dato.description}</h2>
            </div>
            <div className="flex items-end justify-end pt-14">
              <dato.icon />
            </div>
          </article>
        ))}
      </main>
    </section>

  )
}