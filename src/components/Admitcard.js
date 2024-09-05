import React from 'react'
import Connect from './Connect'
import Info from './Info'
import { Titlename } from './Titlefun'
import { useEffect } from 'react'

const Admitcard = ({name,heading}) => {
  useEffect(() => {
    Titlename(heading)
  })
  return (
    <>
    <div className='h-3/6 flex '>
      <div className='w-2/3 h-full '>
        <center><div className='w-2/3 p-5 mt-10  m-2.5 rounded-lg bg-slate-200'>
        <center><h2 className='text-white bg-blue-900 h-10 pt-1 font-bold text-xl'>{name}</h2></center>
        </div></center>
      </div>
      <div className='w-1/3 h-full flex justify-center items-center'>
        <Connect/>
      </div>
    </div>
      <Info/>
    </>
  )
}

export default Admitcard
