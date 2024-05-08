import { ArrowRight } from "../icons/ArrowRight";
import '../styles/css/style.css'
export default function GetStartedInput() {
  return (
    <section className='flex flex-col w-full pt-10 pb-5 md:pt-0 gap-y-4'>
      <h3 className="font-medium">Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className='flex flex-col justify-start gap-y-4 md:flex-row md:items-center gap-x-2'>
        <input type="email" placeholder="Email address" className='w-full p-2 text-lg border-2 border-gray-500 rounded-sm md:p-3 md:w-7/12 text-md bg-neutral-950' />
        <button className='bg-[#E50914] w-fit text-lg md:text-xl p-3.5 px-5 gap-x-2 flex justify-center items-center font-bold rounded-md hover:bg-[#ff3d3d]'>Get Started <div>
          <ArrowRight />
        </div></button>
      </div>
    </section>
  )
}