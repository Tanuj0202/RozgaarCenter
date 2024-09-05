import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div className='bg-white h-2/6 justify-center flex items-center  gap-5 mt-16'>
     <div className='bg-blue-300 h-3/6 w-52 border-solid border-2 border-cyan-200 p-2.5 text-center flex flex-col items-center'><a href='https://web.whatsapp.com/' >
        <center><img src='assets/whatsapp.svg' alt='whatsapp' className='size-14'></img></center>
     <p>Connect on Whatsapp</p></a></div>
     <div className='bg-blue-300 h-3/6 w-52 border-solid border-2 border-cyan-200 p-2.5 text-center flex justify-around'><a href='https://telegram.org/'>
        <center><img src='assets/telegram.svg' alt='telegram' className='size-14'></img></center>
     <p>Connect on Telegram</p></a></div>
     <div className='bg-blue-300 h-3/6 w-52 border-solid border-2 border-cyan-200 p-2.5 text-center flex justify-around'><a href='https://telegram.org/'>
        <center><img src='assets/news.svg' alt='news' className='size-14'></img></center>
     <p>Get Latest News</p></a></div>
     <div className='bg-blue-300 h-3/6 w-52 border-solid border-2 border-cyan-200 p-2.5 text-center flex justify-around'><Link to='/admitcard'>
        <center><img src='assets/admitcard.svg' alt='admitcard' className='size-14'></img></center>
     <p>Admit cards</p></Link></div>
    </div>
  )
}

export default Social
