export default function FooterLogin() {
  const firstRow = ['FAQ', 'Help Center', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information']

  return (
    <section className="px-40 bg-black py-28 bg-opacity-85">
      <div className='pb-10'>
        <h2 className='text-md text-[#ffffffb3]'>Questions? Call <span className='underline text-[#ffffffb3]'>01 800 917 1564</span></h2>
      </div>
      <section>
      <div className='flex justify-between'>
          {firstRow.map((dato, index) => (
            <a className='text-sm text-[#ffffffb3] underline cursor-pointer' key={index}>{dato}</a>
          ))}
        </div>
      </section>
    </section>
  )
}