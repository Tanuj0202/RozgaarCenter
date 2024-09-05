import React from 'react'
import './Icons.css'

const Connect = () => {
  return (
    <div className='w-4/5 h-4/5 bg-blue-950 my-10 border-solid border-1 border-blue-700 rounded-md pt-5 px-5 pb-10'>
      <h2 className='text-white text-2xl mb-4 font-bold'>Connect With Us</h2>
      <p className='text-white text-base leading-normal mx-2.5 mt-2.5 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with us for the latest updates and job opportunities.</p>
      <a id='connectlink' href='mailto:info@example.com' className='bg-white text-blue-600 font-bold py-2.5 px-5 rounded-md m-1.5'>Email us</a>
      <p className='text-white text-base leading-normal mx-2.5 my-2.5'>Follow us on social media:</p>
      <div className='flex'>
      <a id='connectlink' href='https://twitter.com/?lang=en' className='bg-white text-blue-600 font-bold py-2.5 px-5 rounded-md m-1.5'>Twitter</a>
      <a id='connectlink' href='https://in.linkedin.com/' className='bg-white text-blue-600 font-bold py-2.5 px-5 rounded-md m-1.5'>LinkedIn</a>
      <a id='connectlink' href='https://www.facebook.com/' className='bg-white text-blue-600 font-bold py-2.5 px-5 rounded-md m-1.5'>Facebook</a>
      </div>
    </div>
  )
}

export default Connect
