import React from 'react'
import { Link } from 'react-router-dom'
import Info from '../Info'
import { Titlename } from '../Titlefun.js'
import { useEffect } from 'react'

const OurServices = () => {
  useEffect(() => {
    Titlename('RC Our-Services')
  })
  return (
    <>
    <div className='min-h-fit flex justify-center'>
      <div className='h-full w-1/2  p-5'>
      <h1 className='mb-5 text-2xl font-bold'>Our Services</h1>
      <p className='text-base leading-normal'>
      Explore the services offered by 
      <Link to="/">Rozgaarcenter.com</Link> 
      to enhance your job search and recruitment experience.
      <br></br>
      <br></br>
      <strong>1. Job Listings:</strong>
      <br></br>
      Browse through a diverse range of job listings from various industries. Our platform provides comprehensive information about each job opportunity to help you make informed decisions.
      <br></br>
      <br></br>
      <strong>2. Ecommerce Store:</strong>
      <br></br>
      Choose from various different products and list them to your wishlist or order them with our seamless platform.
      <br></br>
      <br></br>
      <strong>3. User-Friendly Platform:</strong>
      <br></br>
      Our website is designed with user experience in mind. Easily navigate through job listings, create your profile, and manage your applications effortlessly.
      <br></br>
      <br></br>
      <strong>4. Job Alerts::</strong>
      <br></br>
      Stay updated on the latest job opportunities with our job alert feature. Receive notifications based on your preferences, ensuring you never miss out on relevant opportunities.
      <br></br>
      <br></br>
      <strong>5. Support and Resources:</strong>
      <br></br>
      We are dedicated to providing support to both job seekers and employers. Access resources, FAQs, and reach out to our support team for assistance.
      <br></br>
      <br></br>
      <strong>Contact Us:</strong>
      <br></br>
      Have questions or feedback? We'd love to hear from you! Reach out to us at 
      <a href="mailto:rozgaarcenter2024@gmail.com">rozgaarcenter2024@gmail.com</a>
      .
      </p>
      </div>
    </div>
      <Info/>
      </>
  )
}

export default OurServices
