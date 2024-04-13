import { ArrowRight } from "../icons/ArrowRight";
import '../styles/css/style.css'
export default function GetStartedInput() {
  return (
    <section className='flex flex-col w-full pb-5 gap-y-4'>
      <h3 className="font-medium">Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className='flex items-center justify-start gap-x-2'>
        <input type="email" placeholder="Email address" className='w-8/12 p-4 border-2 border-gray-500 rounded-md text-md bg-neutral-900' />
        <button className='bg-[#E50914] text-xl p-3.5 px-5 gap-x-2 flex justify-center items-center font-bold rounded-md hover:bg-[#ff3d3d]'>Get Started <div>
          <ArrowRight />
        </div></button>
      </div>
    </section>
  )
}