import React from 'react'
import './Icons.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Info = () => {
  return (
    <div className='h-2/4 bg-stone-800 pt-16 pb-0 px-24 flex text-white'>
        <div className='w-1/4 h-full px-4'>
            <h4 className='font-semibold text-xl'>Rozgaar Center</h4>
            <div className='border-solid border-2 border-pink-600 w-12 mt-2.5 mb-7'></div>
            <Link id='links' to='/' className='font-light text-sm text-gray-300 mb-4 block'>
            Get Latest info about Latest job, Results, Admit Cards, Syllabus only at Rozgaar Center
            </Link>
            <Link id='links' to='/' className='block font-light text-base text-gray-300 mb-2'><FontAwesomeIcon icon="fa-solid fa-house"  style={{color: "#d1d5db",}} />  India</Link>
            <Link id='links' to='/' className='block font-light text-base text-gray-300 mb-2'><FontAwesomeIcon icon="fa-solid fa-phone"  style={{color: "#d1d5db",}} />  +91 xxxxxxxxxx</Link>
            <a id='links' href='mailto:rozgaarcenter2024@gmail.com' className='block font-light text-base text-gray-300 mb-2'><FontAwesomeIcon icon="fa-solid fa-envelope-open"  style={{color: "#d1d5db",}} />  rozgaarcenter2024@gmail.com</a>
        </div>
        <div className='w-1/4 h-full px-4'>
            <h4 className='font-semibold text-xl'>Company</h4>
            <div className='border-solid border-2 border-pink-600 w-12 mt-2.5 mb-7'></div>
            <Link id='links' to='/about-us' className='block font-light text-base text-gray-300 mb-2'>About Us</Link>
            <Link id='links' to='/our-services' className='block font-light text-base text-gray-300 mb-2'>Our Services</Link>
            <Link id='links' to='/privacy-policy' className='block font-light text-base text-gray-300 mb-2'>Privacy Policy</Link>
        </div>
        <div className='w-1/4 h-full px-4'>
            <h4 className='font-semibold text-xl'>Online Shop</h4>
            <div className='border-solid border-2 border-pink-600 w-12 mt-2.5 mb-7'></div>
            <Link id='links' to='/shop' className='block font-light text-base text-gray-300 mb-2'>Patang</Link>
            <Link id='links' to='/shop' className='block font-light text-base text-gray-300 mb-2'>Manja</Link>
            <Link id='links' to='/shop' className='block font-light text-base text-gray-300 mb-2'>Lantern</Link>
            <Link id='links' to='/shop' className='block font-light text-base text-gray-300 mb-2'>Kids Section</Link>
        </div>
        <div className='w-1/4 h-full px-4'>
            <h4 className='font-semibold text-xl'>Follow Us</h4>
            <div className='border-solid border-2 border-pink-600 w-12 mt-2.5 mb-7'></div>
            <div className='flex'>
            <a href='https://www.youtube.com/' className='font-light text-base text-gray-300 mb-2'>
                <div id='icons' className='h-10 w-10 border-solid rounded-full bg-gray-500 pt-1 pl-1'>
                    <center><img id='logo' src='assets/youtubeblack.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                    <center><img id='logo2' src='assets/youtubewhite2.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                </div>
            </a>
            <a href='https://twitter.com/?lang=en' className='font-light text-base text-gray-300 mb-2 ml-2.5'>
                <div id='icons' className='h-10 w-10 border-solid rounded-full bg-gray-500 pt-1 pl-1'>
                    <center><img id='logo' src='assets/twitterblack.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                    <center><img id='logo2' src='assets/twitter.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                </div>
            </a>
            <a href='https://www.youtube.com/' className='font-light text-base text-gray-300 mb-2 ml-2.5'>
                <div id='icons' className='h-10 w-10 border-solid rounded-full bg-gray-500 pt-1 pl-1'>
                    <center><img id='logo' src='assets/youtubeblack.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                    <center><img id='logo2' src='assets/youtubewhite2.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                </div>
            </a>
            <a href='https://telegram.org/' className='font-light text-base text-gray-300 mb-2 ml-2.5'>
                <div id='icons' className='h-10 w-10 border-solid rounded-full bg-gray-500 pt-1 pl-1'>
                    <center><img id='logo' src='assets/telegramwhitepng.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                    <center><img id='logo2' src='assets/telegramblack.png' alt='youtubeicon' className='size-7 absolute'></img></center>
                </div>
            </a>
            </div>
        </div>
        
      
    </div>
  )
}

export default Info
