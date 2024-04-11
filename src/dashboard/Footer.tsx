import '../styles/css/style.css'
export default function Footer() {
  const firstRow = ['FAQ', 'Investor Relations', 'Ways to Watch', 'Corporate information', 'Only on Netflix']
  const secondRow = ['Help Center', 'Jobs', 'Terms of Use', 'Contact US']
  const thirdRow = ['Account', 'Redeem Gift Cards', 'Privacy', 'Speed Test']
  const fourthRow = ['Media Center', 'Buy Gifth Cards', 'Cookies Preferences', 'Legal Notices']

  return (
    <section style={{ borderBottom: 'none' }} className="w-full pb-20 px-44">
      <div className='pb-10'>
        <h2 className='text-md text-[#ffffffb3]'>Questions? Call <span className='underline text-[#ffffffb3]'>01 800 917 1564</span></h2>
      </div>
      <div className="flex gap-x-32 ">
        <div className='flex flex-col gap-y-4'>
          {firstRow.map((dato, index) => (
            <a className='text-sm text-[#ffffffb3] underline cursor-pointer' key={index}>{dato}</a>
          ))}
        </div>
        <div className='flex flex-col gap-y-4'>
          {secondRow.map((dato, index) => (
            <a className='text-sm text-[#ffffffb3] underline cursor-pointer' key={index}>{dato}</a>
          ))}
        </div>
        <div className='flex flex-col gap-y-4'>
          {thirdRow.map((dato, index) => (
            <a className='text-sm text-[#ffffffb3] underline cursor-pointer' key={index}>{dato}</a>
          ))}
        </div>
        <div className='flex flex-col gap-y-4'>
          {fourthRow.map((dato, index) => (
            <a className='text-sm text-[#ffffffb3] underline cursor-pointer' key={index}>{dato}</a>
          ))}
        </div>
      </div>
      <div>
        <h4 className='text-sm pb-6 text-[#ffffffb3] pt-20'>Netflix Colombia</h4>
      </div>
    </section>
  )
}