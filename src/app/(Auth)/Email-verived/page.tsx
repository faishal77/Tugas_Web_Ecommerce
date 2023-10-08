import Link from "next/link"

const page = () => {
  return (
   <>
     <div className="navbar ">
      <Link href={'../Forgot-password'}>
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
      <h1 className="title-font sm:text-4xl text-2xl mb-4 mt-[-4vmax] font-medium  text-gray-900">Email has been sent!</h1>
      <p className="mb-8 text-gray-400 leading-relaxed ">Please check your inbox and click<br/>in the receive link to reset a password</p>
      {/* !! Image for mobile  responsive */}
      <div className="w-[75%] lg:hidden mt-[-2vmax] sm:block block md:block h-[10vmax]">
    <img src="https://i.pinimg.com/564x/82/30/4a/82304a4a4bde2325b2e1822dc0eea21e.jpg" alt=""  />
    </div>
      <div className="flex mt-[33vmax] lg:mt-0 flex-col w-full justify-center items-end">
        <div className="relative m-auto lg:w-full xl:w-1/2 w-[90%] md:w-full text-left mt-[-8vmax]">
        </div>
        <button className=" text-white lg:mt-[8vmax] bg-orange-400 hover:bg-orange-600 border-0 m-auto lg:w-[40%] sm:[10vmax]  h-[7vmax] lg:h-[4vmax] md:mt-[7vmax] focus:outline-none rounded-md md:w-[70%] sm:mt-[17vmax] sm:w-[50%] py-2 px-4 w-[50%] mt-[3vmax]">
          <h1 className='text-center'>Login</h1>
          </button>
      </div>
          <p className='text-[.9rem] font-sans mt-[2vmax] text-center text-slate-500'>Didn't receive the link? <Link className='text-orange-400' href={'../Forgot-password'}>Resend</Link></p> 
    </div>
  </div>
</section>
   </>
  )
}

export default page