import React from 'react'
// import {FcGoogle} from 'react-icons/fc'
// import {AiFillFacebook} from 'react-icons/ai'
import loginImg from '../assets/vertex-banner.png'
import vLogo from '../assets/vertex-logo.png'
import {AiFillUnlock} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

export default function Login() {
  return (
    // <div className='relative w-full h-screen bg-zinc-900/90 rounded-3xl'>
 <div className="flex flex-col min-h-screen">
    <main className='h-screen bg-slate-500 rounded-2xl'>   
            <img 
        className='absolute w-full h-full object-cover' 
        src={loginImg} 
        alt="/" />     

    {/* <p className='font-small'> IoT Cloud Platform </p> */}
    
           
    <div className='flex lg:w-1/2 justify-center items-center h-full'>
    <img src={vLogo} 
    alt="Logo" className="w-16 h-16 mb-4" />

    {/* <h2 className='font-bold font-mono text-lg mt-4 text-white'> IoT Cloud Platform </h2> */}

        {/* card details */}
        <form className='max-w-[400px] w-full mx-auto bg-slate-50 p-7 rounded-xl relative z-10'> 
            {/* <h2 className='text-4xl font-bold text-center py-4'>VERTEX</h2> */}

            <div className='flex flex-col items-center h-full'>
                <img 
                    className='w-36 h-20 mb-4' 
                    src={vLogo} 
                    alt="/" />
            </div>
            {/* <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div> */}

            {/* <h1 className='text-3xl font-semibold'> Welcome Back! </h1> */}
            {/* <p className='font-medium text=-lg mt-4'> Welcome Back! Please enter your credentials </p> */}

            <p className='font-bold font-mono text-lg mt-4 text-blue-900'> Welcome Back! Please enter your credentials </p>


            <div className='relative mt-4 flex flex-col mb-4'>
                {/* <label>Username</label> */}
                <input className='border relative bg-gray-100 p-2 pl-14 rounded-md' 
                placeholder='Enter your username or email'
                type="text" />
                {/* Adding the icons */}
                <AiOutlineMail size="22" className='absolute top-1/2 left-3 transform -translate-y-1/2' color='grey'/> 
            </div>

            <div className='relative flex flex-col'>
                {/* <label>Password</label> */}                
                <input className='border relative bg-gray-100 p-2 pl-14 rounded-md' 
                placeholder='Enter your password'
                type="password" />
                <AiFillUnlock size="22" className='absolute top-1/2 left-3 transform -translate-y-1/2' color='grey'/>
            </div>


           <div className='mt-6 flex flex-col gap-y-4'>
                <button className='bg-amber-500 text-white py-2 font-extrabold text-md font-bold rounded-md active:scale-[.95] active:duration-75 transition-all hover:scale-[1.05] ease-in-out'> 
                    Sign In </button>
                
                    <div className="flex items-center text-gray-500">
                        <hr className="w-full border-t border-gray-300" />
                        <span className="mx-4">or</span>
                        <hr className="w-full border-t border-gray-300" />
                   </div>

                <button className='flex border-2 border-orange-400 items-center justify-center gap-4 text-blue py-2 text-md font-bold rounded-md active:scale-[.95] active:duration-75 transition-all hover:scale-[1.05] ease-in-out'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> 
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> 
                    </svg>
                Sign In With Google </button>            
           </div>

            <div className='mt-6 flex items-center justify-between'>
                <p className='flex items-center text-base'>
                    <input className='mr-2'
                    type="checkbox"/>Remember Me
                </p>       

                <div>
                    <button className='font-medium text-base text-amber-600'>                        
                        Forgot Password 
                    </button>        
                </div>
            </div>  

            {/* <div className='mt-6 flex flex-col gap-y-4'>                
                <button className='flex border-2 border-orange-400 items-center justify-center gap-4 text-white py-2 text-md font-bold rounded-md active:scale-[.95] active:duration-75 transition-all hover:scale-[1.05] ease-in-out'> 
                    Not a member? Sign Up </button>            
           </div> */}

           <div className='mt-8 flex justify-center items-center'>
                <p  className='font-medium text-sm'>Not a member? </p>
                <button className='text-amber-600 text-base font-medium p-2'> Sign up now </button> 
           </div>                
        </form>
        {/* <div className="lg:flex h-full items-center justify-center bg-gray-400">
            <div className='w-60 h-60 bg-gradient-to-tr from-blue-500 to-orange-500'/>
       </div> */}
    </div>
    </main>

    <footer className="bg-gray-900 text-white py-4 text-center">              
            <p class='font-bold'>&copy; 2023 Powered by BlueIoT Encompass Blue Mark II. All rights reserved.</p>            
    </footer>   
 </div>
  )
}
