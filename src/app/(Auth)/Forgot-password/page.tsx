import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
    <>
    <div className="navbar ">
      <Link href={'../Login'}>
      <img className='h-10 w-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO3YuQrCQBRG4YO+laWouHRu2Gip4kNro41gIeICLpGBKSQkWCjRe/k/mD6HJJM7ARERERGRAvWBLbAHxhg1Am5AEleIKWPMALi+RIS1A0oY0suICHdmiCFt4JKKuAMTDGllRDyAKYY0gXNGxAxDGjkRcwyp50QsMKQGnKxHVIFjKqLItYqby0cqwOGHEUlca4X80aO1jFv+V7h42V1tv64+iK5GFFdDo6sx/t3BKpzf8XDU3eDk58MGw7oxIMxFnV9fjIiIiIgIaU9zyuryINMk1gAAAABJRU5ErkJggg=="></img>
       </Link>
      </div>
      <section className="text-gray-600 lg:mt-[-30vmax] body-font z-[-4] ">
  <div className="container mt-[-16vmax] lg:mt-[-10vmax] m-auto flex  lg:flex-row flex-col px-5 py-24 justify-center items-center">
    {/* !! image */}
    <div className="w-[90%] hidden lg:block sm:hidden md:hidden h-[10vmax]">
    <img src="https://i.pinimg.com/564x/82/30/4a/82304a4a4bde2325b2e1822dc0eea21e.jpg" alt=""  />
    </div>
    <div className="w-full md:w-2/3 flex flex-col lg:mt-[35vmax] mt-[10vmax] lg:mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 mt-[-4vmax] font-medium sm:text-blue-700 lg:text-red-700 sm:text-green-600 text-gray-900">Forgot your password?</h1>
      <p className="mb-8 text-gray-500 leading-relaxed">Enter your registered email below<br/>to receive password reset instruction</p>
      {/* !! Image for mobile  responsive */}
      <div className="w-[75%] lg:hidden mt-[-2vmax] sm:hidden block md:hidden h-[10vmax]">
    <img src="https://i.pinimg.com/564x/82/30/4a/82304a4a4bde2325b2e1822dc0eea21e.jpg" alt=""  />
    </div>
      <div className="flex mt-[33vmax] lg:mt-0 flex-col w-full justify-center items-end">
        <div className="relative m-auto lg:w-full xl:w-1/2 w-[90%] md:w-full text-left mt-[-8vmax]">
        <form action="#" method="POST" className="lg:mt-[-1vmax]">
      {/* <!-- Email Input --> */}
      <div className="mb-4">
      <input type="email" placeholder='Email' id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
      <p className='text-[.9rem] font-sans mt-[2vmax] text-center text-slate-500'>Remember password? <Link className='text-orange-400' href={'../Login'}>Login</Link></p>
    </div>
    </form>
        </div>
        <button className=" text-white mt-[2vmax] bg-orange-400 hover:bg-orange-600 border-0 m-auto lg:w-[40%]  h-[7vmax] lg:h-[4vmax] focus:outline-none rounded-md py-2 px-4 w-full">
          <h1 className='text-center'>Send</h1>
          </button>
      </div>
     
    </div>
  </div>
</section>
    </>
  )
}

export default ForgotPassword;