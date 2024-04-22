export default function Profiles() {
  const data = [
    { title: 'Anderson', image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUr3glZdPkPZFEK9pBlFSL2pfN49wiTpQMK-6CgBu0JTUOhwS-0JON5ayF5juKXsB3K9lmdAbCPB5SU6rZIPDK0KHY7onuZY2Yp6.png?r=93c' },
    { title: 'Deyverson', image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTRIX4TzkcCo0x0kZeKp8-E8pte_pi6_bkr_OJur1z9c9q6Ina-LUlxvuwD90D6x9ahjopjPm_zu1a77irxY4MO6Yn-agZzdOgRo.png?r=758' },
    { title: 'Kennys', image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABU1hVI-Ku8pWS1Cj3nuRLTq4ILF4lCWgipVb_OtIQhQBB-tfPqx9rQkJ2RLaPo8pC9fnEpPLAlDyD1-yxWtWP00DZsH3ff1kRU5r.png?r=732' },
    { title: "Ander'", image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABf5WATX3xS8cAqBGCg4FIIL7uF-vRVittLvOdD3Y56IsySusfg7N7ldSxhYQVLoPx5_AFAvqM-hZDYEo1LJyb8HwtO1bq761UE9s.png?r=805' },
  ]
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold text-gray-200">Who is watching now?</h1>
      <div className="flex items-center justify-center py-8 gap-x-6">
        {data.map((dato, index) => (
          <article key={index} className="flex flex-col items-center justify-center group gap-y-2">
            <img src={dato.image} alt="" className="duration-100 rounded-sm group-hover:border-4 group-hover:transition-all group-hover:border-gray-100 w-36" />
            <h4 className="font-medium text-gray-400 group-hover:text-gray-100">{dato.title}</h4>
          </article>
        ))}
      </div>
      <button className="px-6 py-2 text-lg font-semibold text-gray-400 bg-transparent border-2 border-gray-500 rounded-sm hover:text-gray-100 hover:border-gray-100">Manage profiles</button>
    </section>
  )
}