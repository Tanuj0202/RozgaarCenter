import React from 'react'
import { Link } from 'react-router-dom'
import Info from '../Info'
import { Titlename } from '../Titlefun.js'
import { useEffect } from 'react'

const AboutUs = () => {
  useEffect(() => {
    Titlename('RC About-Us')
  })
  return (
    <>
    <div className='h-4/5 flex justify-center'>
      <div className='h-full w-1/2  p-5'>
        <h1 className='mb-5 text-2xl font-bold'>About US</h1>
        <p className='text-base leading-normal'>
            "Welcome to " 
            <Link to='/'>Rozgaarcenter.com</Link>
            "! We are passionate about connecting individuals with employment opportunities and providing a seamless experience for job seekers and employers alike."
            <br></br>
            <br></br>
            <strong>Our Mission:</strong>
            <br></br>
            "At " 
            <Link to='/'>Rozgaarcenter.com</Link>
            , our mission is to simplify the job search process by offering a platform that caters to the diverse needs of our users. We strive to empower individuals to find the right job opportunities and assist employers in finding qualified candidates.
            <br></br>
            <br></br>
            <strong>What Sets Us Apart:</strong>
            <br></br>
            - Comprehensive Job Listings: Explore a wide range of job listings from various industries.
            <br></br>
            - User-Friendly Platform: Our website is designed to be intuitive and easy to navigate, ensuring a positive user experience.
            <br></br>
            - Dedicated Support: Our team is committed to providing excellent customer support to address any queries or concerns.
            <br></br>
            <br></br>
            <strong>Contact Us:</strong>
            <br></br>
            Have questions or feedback? We'd love to hear from you! Reach out to us at 
            <a href="mailto:rozgaarcenter2024@gmail.com" >rozgaarcenter2024@gmail.com</a>
            .
        </p>
      </div>
    </div>
      <Info/>
    </>
  )
}

export default AboutUs
