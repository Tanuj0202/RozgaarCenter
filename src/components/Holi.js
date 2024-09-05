import React from 'react'
import './Icons.css'
import { Link } from 'react-router-dom'

const Holi = () => {
  return (
    <div id='holi' className='hidden h-5/6 lg:flex'>
      <div className='w-2/5 mt-96'>
        <Link to='/shop' id='shop' className='mb-16 ml-52 border-solid border-4 border-blue-900 bg-sky-400 rounded-e-lg px-5 py-2 text-white font-bold text-xl'>Shop Now</Link>
      </div>
      <div className='w-3/5'>
        <img src='assets/Happy.png' alt='Error' className='h-full'></img>
      </div>
    </div>
  )
}

export default Holi
