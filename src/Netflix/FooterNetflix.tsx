
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import YouTube from '../icons/Youtube'
import '../styles/css/netflix.css'
export default function FooterNetflix() {
  return (
    <footer className="bg-[#141414] flex flex-col justify-center items-start  py-10 px-60">
      <section className='flex items-center justify-center mb-3 gap-x-8'>
        <Facebook fill='transparent'/>
        <Instagram/>
        <Twitter />
        <YouTube/>
      </section>
      <section className="flex text-sm gap-x-32 ">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Help center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </section>

      <button className="px-2 mt-8 mb-3 py-1 text-sm  text-[#808080] border-2 border-[#808080] w-fit">Service Code</button>

      <span className="text-[#808080]">
        © 1997-2024 Netflix, Inc.
      </span>
    </footer>
  )
}