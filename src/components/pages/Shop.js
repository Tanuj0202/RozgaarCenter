import React from 'react'
import { Titlename } from '../Titlefun.js'
import { useEffect } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { Link } from 'react-router-dom'


const Shop = () => {
  useEffect(() => {
    Titlename('RC Shop') 
  })
  const notify = () => {
    toast.success("Cleared Filters!")
  }
  // const relode = () => {
  //   document.getElementById('#inp').value = 'fgh'
  // }
  return (
    <div className=' h-full flex'>
      <div className='h-full w-1/5  p-8 border-r border-solid border-black'>
        <div className='flex text-xl justify-between '>
            <h3 className='font-bold'>Filters</h3>
            <h3 className='cursor-pointer underline' onClick={() => {
                notify()
                // relode()
            }}>Clear</h3>
        </div>
        <div className='flex flex-col text-lg mt-6 '>
            <label className='my-5'>Price <span>(not more than)</span></label>
            <div className='flex justify-between cursor-pointer mt-1 text-sm mb-1'>
              <p>100</p>
              <p>500</p>
              <p>1000</p>
            </div>
            <input id='inp' type="range" name="price" min="10" step="10" ></input>
        </div>
        <div className='flex flex-col text-lg mt-6'>
          <h3>Category</h3>
        </div>
        <div className='flex flex-col text-lg mt-6'>
          <h3 className='my-5'>Sort by</h3>
          <label className='mb-2.5 cursor-pointer'><input id='inp' type='radio' name='sort' className='mr-1'></input>Price - Low to High</label>
          <label className='cursor-pointer'><input id='inp' type='radio' name='sort' className='mr-1'></input>Price - High to Low</label>
        </div>
        <div className='flex flex-col text-lg mt-6'>
          <h3 className='my-5'>Rating</h3>
          <label className='mb-2.5 cursor-pointer'><input id='inp' type='radio' name='Rating' className='mr-1'></input>1 Stars & above</label>
          <label className='mb-2.5 cursor-pointer'><input id='inp' type='radio' name='Rating' className='mr-1'></input>2 Stars & above</label>
          <label className='mb-2.5 cursor-pointer'><input id='inp' type='radio' name='Rating' className='mr-1'></input>3 Stars & above</label>
          <label className='mb-2.5 cursor-pointer'><input id='inp' type='radio' name='Rating' className='mr-1'></input>4 Stars & above</label>
        </div>
      </div>
      <div className='h-full w-4/5 '>
        <h1 className='text-xl mt-5 mb-10 ml-10'>Showing Our Collection <span className='text-sm'>(0 products)</span></h1>
        
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Shop
