import React from 'react'
import './Icons.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-sky-900 h-14 p-4 sticky top-0 left-0 right-0 shadow-2xl shadow-black'>
     <nav className='flex items-center justify-between lg:px-10 '>
      <a href='/'><div className='text-white font-bold lg:text-2xl flex'><div id='kite'>🪁</div>Rozgaar Center</div></a>
      <div>
      <ul className='hidden lg:flex gap-6 text-white font-medium text-lg'>
        <li><Link to='/admitcard'>Admit Card</Link></li>
        <li><Link to='/latestjobs'>Latest Jobs</Link></li>
        <li><Link to='/results'>Results</Link></li>
        <li><Link to='/syllabus'>Syllabus</Link></li>
        <li><Link to='/answerkeys'>Answer Keys</Link></li>
        <li><Link to='/others'>Others</Link></li>
      </ul></div>
        <div className='flex'>
          <Link to='/login'>
            <img id='navimg' src='assets/heart.png' alt='' className='lg:h-7 h-5 pl-3'></img>
          </Link>
          <Link to='/login'>
            <img id='navimg' src='assets/cart.png' alt='' className='lg:h-7 h-5 pl-3 lg:pl-6'></img>
          </Link>
          <Link to='/login'>
            <img id='navimg' src='assets/user.png' alt='' className='lg:h-7 h-5 pl-3 lg:pl-6'></img>
          </Link>
        </div>
     </nav>
    </div>
    
  )
}


export default Navbar
