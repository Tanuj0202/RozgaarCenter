import React from 'react'
import { Link } from 'react-router-dom'
import { Titlename } from '../Titlefun.js'
import { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    Titlename('RC Login')
  })
  return (
    <div className='h-screen flex justify-center items-center '>
        <div className='border-solid border border-slate-200 h-fit w-fit rounded-lg bg-slate-300 pb-10'>
            <h2 className='mt-4 mb-1.5 text-lg text-center'>Log In</h2>
            <label for="Email-address" className='text-sm py-2.5 px-12 text-left block'>Email Address :</label>
            <input type="email" placeholder="johndoe@gmail.com"  className='border-solid border border-slate-300 text-sm w-64 p-2 mx-12 mb-2.5 block'></input>
            <label for="Email-address" className='text-sm py-2.5 px-12 text-left block'>Password :</label>
            <input type="password" placeholder="**********"  className='border-solid border border-slate-300 text-sm w-64 p-2 mx-12 mb-2.5 block'></input>
            <center><button className='bg-sky-900 text-base rounded-xl font-semibold w-64 py-2 px-4 mt-3 mb-4 text-white'>Log In</button></center>
            <center><Link to="/signup" className='text-base font-semibold w-64 mx-5 '>Create New Account</Link></center>
        </div>
      
    </div>
  )
}

export default Login
