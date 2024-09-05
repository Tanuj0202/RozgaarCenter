import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='h-3/6 flex flex-row flex-wrap items-center pl-16'>
        <div className='border-solid border-2  h-1/4 w-1/4 rounded-b-xl m-12 overflow-hidden shadow-2xl '>
            <div className='h-2/4 bg-blue-950 py-2 '>
                <h2 className='text-white text-center font-bold text-2xl'>Results</h2>
            </div>
            <div className='h-2/4 flex justify-end'>
               <div align="right" className='mb-2.5 mr-2.5 px-1 py-2.5 font-bold text-xs shadow-2xl w-fit'> <Link to='/results'>View More</Link> </div>
            </div>
        </div>
        <div className='border-solid border-2  h-1/4 w-1/4 rounded-b-xl m-12 overflow-hidden shadow-2xl'>
            <div className='h-2/4 bg-blue-950 py-2 flex justify-center items-center'>
                <h2 className='text-white text-center font-bold text-2xl'>Latest Jobs</h2>
            </div>
            <div className='h-2/4 flex justify-end'>
               <div align="right" className='mb-2.5 mr-2.5 px-1 py-2.5 font-bold text-xs shadow-2xl  w-fit'> <Link to='/latestjobs'>View More</Link> </div>
            </div>
        </div>
        <div className='border-solid border-2  h-1/4 w-1/4 rounded-b-xl m-12 overflow-hidden shadow-2xl'>
            <div className='h-2/4 bg-blue-950 py-2 flex justify-center items-center'>
                <h2 className='text-white text-center font-bold text-2xl'>Admit Cards</h2>
            </div>
            <div className='h-2/4 flex justify-end'>
               <div align="right" className='mb-2.5 mr-2.5 px-1 py-2.5 font-bold text-xs shadow-2xl  w-fit'> <Link to='/admitcard'>View More</Link> </div>
            </div>
        </div>
        <div className='border-solid border-2  h-1/4 w-1/4 rounded-b-xl m-12 overflow-hidden shadow-2xl'>
            <div className='h-2/4 bg-blue-950 py-2 flex justify-center items-center'>
                <h2 className='text-white text-center font-bold text-2xl'>Syllabus</h2>
            </div>
            <div className='h-2/4 flex justify-end'>
               <div align="right" className='mb-2.5 mr-2.5 px-1 py-2.5 font-bold text-xs shadow-2xl  w-fit'> <Link to='/syllabus'>View More</Link> </div>
            </div>
        </div>
        <div className='border-solid border-2  h-1/4 w-1/4 rounded-b-xl m-12 overflow-hidden shadow-2xl'>
            <div className='h-2/4 bg-blue-950 py-2 flex justify-center items-center'>
                <h2 className='text-white text-center font-bold text-2xl'>Answer Keys</h2>
            </div>
            <div className='h-2/4 flex justify-end'>
               <div align="right" className='mb-2.5 mr-2.5 px-1 py-2.5 font-bold text-xs shadow-2xl  w-fit'> <Link to='/answerkeys'>View More</Link> </div>
            </div>
        </div>
        <div className='border-solid border-2  h-1/4 w-1/4 rounded-b-xl m-12 overflow-hidden shadow-2xl'>
            <div className='h-2/4 bg-blue-950 py-2 flex justify-center items-center'>
                <h2 className='text-white text-center font-bold text-2xl'>Others</h2>
            </div>
            <div className='h-2/4 flex justify-end rounded'>
               <div align="right" className='mb-2.5 mr-2.5 px-1 py-2.5 font-bold text-xs shadow-sm  w-fit'> <Link to='/others'>View More</Link> </div>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
