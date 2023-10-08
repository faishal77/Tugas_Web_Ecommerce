import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
    return (
   <>
   {/* !! Components */}
<div className="bg-white flex justify-center lg:mt-0 md:mt-0 sm:mt-0 mt-[-5vmax] items-center h-[100dvh]">
    {/* <!-- Left: Image --> */}
<div className="w-1/2 h-max mt-[-5vmax] hidden lg:block">
<div className="navbar ml-14">
<img className="h-14 w-14" src="https://i.pinimg.com/736x/c1/88/8a/c1888a724d78d6fc944e28a604659c52.jpg" alt="" srcset="" />
  <a className="btn btn-ghost normal-case text-xl text-blue-900">FR_Ecommerce</a>
</div>
      
    <div className="w-[100%] ml-3 m-auto mt-[-1vmax] bg-slate-500 h-[70dvh]">
    <img className="object-cover w-full h-full" src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1696213841~exp=1696214441~hmac=5b76edf86419782c77d5ed77107223b1ad45a49d24840902abf8ad61e30bad56" alt="" srcset="" />
    <h1 className="text-center mt-[1vmax] text-[1.3rem] font-sans font-semibold">Explore for free and get <br/>attractive offers.</h1>
    </div>
  </div>
{/* <!-- Right: Login Form --> */}
<div className="lg:p-36 md:p-52 lg:ml-[-1vmax] lg:mt-[-6.5vmax] sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-3xl font-bold mb-4">Welcome to FR_Ecommerce</h1>
  <p className="text-[.8rem] mt-[-10px] text-slate-400">Don't have an account? <Link href={'../Register'} className="text-orange-400">Register</Link></p>
    <div className="lg:w-full flex-col flex lg:flex-row md:flex-row h-max md:gap-4 lg:gap-4">
    <button className="btn  mt-8 h-[1vmax] btn-outline">
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
 
  <p className="text-[.7rem] font-bold">Sign Up with Google</p>
</button>
  <button className="btn bg-blue-600 text-white lg:mt-8 md:mt-8 mt-3 h-[1vmax] btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" x="0px" y="0px" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>

{/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
style="fill:#FFFFFF;">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
</svg> */}
 
 
  <p className="text-[.7rem] font-bold">Sign Up with Facebook</p>
</button>
    </div>
    <div className="divider mt-[30px]">OR</div>
  {/* !! Form */}
  <form action="#" method="POST" className="mt-5">
      {/* <!-- Email Input --> */}
      <div className="mb-4">
      <label className="block text-gray-600">Email address</label>
      <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    {/* <!-- Password Input --> */}
    <div className="mb-4">
      <label  className="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    {/* <!-- Remember Me Checkbox --> */}
    <div className="mb-4 flex justify-end">
      <p className="font-sans font-bold"><Link href={'../Forgot-password'}>Forgot Password?</Link></p>
    </div>

    <button type="submit" className="bg-orange-400 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
</div>
</div>
   
   </>
  )
}
