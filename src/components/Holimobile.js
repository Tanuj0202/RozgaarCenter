import React from 'react'
import {Link} from 'react-router-dom'

const Holimobile = () => {
  return (
    <div className='h-1/2 lg:hidden'>
      <div>
            <img src='assets/holimobile.png' alt="Error" className='h-full w-full'/>
        </div>
        <Link to='/shop' className='absolute top-80 right-32 bg-sky-700 border-4 border-solid border-sky-950 text-white rounded-lg px-4 py-2 font-bold'>Shop Now</Link>
    </div>
  )
}

export default Holimobile
