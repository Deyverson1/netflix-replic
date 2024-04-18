import { Link } from "react-router-dom";
import FooterLogin from "./FooterLogIn";
import { useRef, useState } from "react";
import { XIcon } from "../icons/AnX";

export default function LogIn() {
  const [nameValue, setNameValue] = useState(false)
  const [passwordValue, setPassword] = useState(false)
  const inputName = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  function handleInputName() {
    const value = inputName.current ? inputName?.current?.value : ''
    if (value.length > 8 && value.includes('.com') && value.includes('@')) {
      setNameValue(false)
    } else {
      setNameValue(true)
    }
  }
  function handleInputPassword() {

    const value = inputPassword.current ? inputPassword?.current?.value : ''
    if (value.length > 4 && value.length < 60) {
      setPassword(false)
    } else {
      setPassword(true)
    }
  }

  return (
    <section className="bg-cover " style={{ backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/19824ecf-794c-44aa-ae8a-d987a8feee3e/CO-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg)' }}>
      <section className="py-6 bg-black px-44 bg-opacity-55">
        <Link to={'/'}>
          <div>
            <img className="w-20 md:w-36" src="img/logo.png" alt="" />
          </div>
        </Link>
        <section className="flex items-center justify-center pt-10 pb-10">
          <main className="flex flex-col w-5/12 py-10 pb-20 bg-black rounded-md gap-y-4 px-14 bg-opacity-70">
            <h1 className="pb-8 text-3xl font-bold">Sign In</h1>
            <div className="flex flex-col justify-center w-full gap-y-4">
              <input ref={inputName} onChange={handleInputName} type="text" className="w-full px-4 py-4 bg-opacity-75 border-2 border-gray-400 rounded-md focus:placeholder:pt-1 placeholder:text-gray-400 bg-neutral-900" placeholder="Email or phone number" />
              {nameValue && (<div className="text-[#eb3942] items-center gap-x-1 flex text-sm"><XIcon />Please enter a valid email or phone number</div>)}
              <input ref={inputPassword} onChange={handleInputPassword} type="password" className="w-full px-4 py-4 bg-opacity-75 border-2 border-gray-400 rounded-md placeholder:text-gray-400 bg-neutral-900" placeholder="Password" />
              {passwordValue && (<div className="text-[#eb3942] gap-x-1 flex text-sm"><XIcon />Your password must contain between 4 and 60 characters.</div>
              )}
              <button className="w-full px-3 py-2 font-semibold bg-[#E50914] rounded-md">Sign In</button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-900 border-gray-100 rounded" />
              <label htmlFor="checked-checkbox" className="font-medium text-white text-md ms-2 ">Remember me</label>
            </div>
            <div className="flex gap-x-2">
              <h1 className="text-gray-400">New to Netflix?</h1>
              <button className="">Sing up now</button>
            </div>
            <div className="pt-2 ">
              <h1 className="text-sm text-gray-400">This page is for educational purposes only, this is not the original Netflix page. <span className="text-blue-500">Learn more.</span></h1>
            </div>
          </main>
        </section>
      </section>
      <FooterLogin />
    </section>
  )
}