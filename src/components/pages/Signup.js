import React from 'react'
import { Link } from 'react-router-dom'
import { Titlename } from '../Titlefun.js'
import { useEffect } from 'react'

const Signup = () => {
  useEffect(() => {
    Titlename('RC SignUp')
  })
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='border-solid border border-slate-200 h-fit w-fit rounded-lg bg-slate-300 pb-10'>
            <h2 className='mt-4 mb-1.5 text-lg text-center'>Sign Up</h2>
            <div className='flex justify-between mt-5 ml-12'>
                <div className='flex flex-col'>
                <label for="first-name" className='text-sm my-2.5 '>First Name :</label>
                <input type="text" placeholder="John" className='border-solid border border-slate-200 p-2 w-28 '></input>
                </div>
                <div className='flex flex-col'>
                <label for="last-name" className='text-sm my-2.5  '>Last Name :</label>
                <input type="text" placeholder="Doe" className='border-solid border border-slate-200 p-2 w-28 mr-12'></input>
                </div>
            </div>
            <div>
            <label for="username" className='text-sm py-2.5 px-12 text-left block'>Mobile :</label>
            <input type="number" placeholder="+91"  className='border-solid border border-slate-300 text-sm w-64 p-2 mx-12 mb-2.5 block'></input>
            <label for="Email-address" className='text-sm py-2.5 px-12 text-left block'>Email Address :</label>
            <input type="email" placeholder="johndoe@gmail.com"  className='border-solid border border-slate-300 text-sm w-64 p-2 mx-12 mb-2.5 block'></input>
            <label for="Email-address" className='text-sm py-2.5 px-12 text-left block'>Password :</label>
            <input type="password" placeholder="**********" className='border-solid border border-slate-300 text-sm w-64 p-2 mx-12 mb-2.5 block'></input> 
            <center><button className='bg-sky-900 text-base rounded-xl font-semibold w-48 py-2 px-4 mt-3 mb-4 text-white'>Create New Account</button></center>
            <center><Link to="/login" className='text-base font-semibold w-64 mx-5 '>Already have an Account?</Link></center>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
