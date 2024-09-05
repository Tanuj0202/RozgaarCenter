import React from 'react'
import { Link } from 'react-router-dom'
import Info from '../Info'
import { Titlename } from '../Titlefun.js'
import { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    Titlename('RC Privacy-Policy')
  })
  return (
    <>
    <div className='min-h-fit flex justify-center'>
      <div className='h-full w-1/2  p-5'>
      <h1 className='mb-5 text-2xl font-bold'>Privacy Policy</h1>
      <p className='text-base leading-normal'>
      Last Updated: 05/01/2024
      <br></br>
      <br></br>
      <strong>Introduction:</strong>
      <br></br>
      This Privacy Policy (“Policy”) outlines the practices of Rozgaarcenter.com ("we," "us," or "our") concerning the collection, use, disclosure, and protection of the personal information of users ("you" or "user") who visit or use our website, located at 
      <Link to='/'>https://www.rozgaarcenter.com</Link>
      , and any associated services, platforms, or mobile/internet-connected devices ("Services"). This Policy is an integral part of the Terms of Use. Terms used herein but not defined shall have the meaning given to them in these Terms of Use.
      <br></br>
      <br></br>
      <strong>Information Collection:</strong>
      <br></br>
      When you visit or use Rozgaarcenter.com, we may collect various types of information, including but not limited to:
      <ul className='list-none'>
        <li>Personal Information: Information provided by users during the signup/order process, such as name, email address, contact details, and delivery address.</li>
        <li>Log Information: Details automatically received from your browser and device, including IP address, device ID, network operator details, operating system, browser type, and version.</li>
        <li>Cookies and Web Beacons: We use cookies to enhance user experience, store preferences, and optimize our website. Third-party services may also use cookies for advertising purposes.</li>
      </ul>
      <br></br>
      <br></br>
      <strong>Use of Information:</strong>
      <br></br>
      We collect and use your information for the following purposes:
      <ul className='list-none'>
        <li>To provide and personalize our Services.</li>
        <li>To process and fulfill orders placed on our platform.</li>
        <li>To improve our website's functionality and user experience.</li>
        <li>To communicate with users regarding orders, updates, and promotional offers.</li>
        <li>To comply with legal obligations and resolve disputes.</li>
      </ul>
      <br></br>
      <br></br>
      <strong>Data Protection Rights:</strong>
      <br></br>
      If you are a resident of a jurisdiction with data protection laws, such as the European Economic Area (EEA), you may have certain rights regarding your personal information. These rights include:
      <ul className='list-none'>
        <li>The right to access, update, or delete your information.</li>
        <li>The right of rectification.</li>
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability.</li>
        <li>The right to withdraw consent.</li>
      </ul>
      To exercise your data protection rights, please contact us at
      <a href='mailto:rozgaarcenter2024@gmail.com.'>rozgaarcenter2024@gmail.com.</a>
      <br></br>
      <br></br>
      <strong>Third-Party Links:</strong>
      <br></br>
      Rozgaarcenter.com may include links to third-party websites. Please note that these third-party sites are not governed by our Privacy Policy. Your interactions with such sites are at your own risk, and we are not responsible for the privacy practices of these external sites.\
      <br></br>
      <br></br>
      <strong>Children's Information:</strong>
      <br></br>
      Rozgaarcenter.com is committed to protecting the privacy of children. We do not knowingly collect personal information from individuals under the age of 13. If you believe that your child has provided us with their information, please contact us, and we will promptly take steps to remove such data from our records.
      <br></br>
      <br></br>
      <strong>Security Measures:</strong>
      <br></br>
      We employ appropriate security measures, including encryption, firewalls, and regular internal reviews, to protect your data from unauthorized access, alteration, disclosure, or destruction. While we strive to safeguard your information, no security system is entirely foolproof.
      <br></br>
      <br></br>
      <strong>Updates and Changes:</strong>
      <br></br>
      We reserve the right to update and amend this Privacy Policy periodically. Any changes will be effective immediately upon posting on our website. We encourage you to review this Policy regularly to stay informed of how we collect, use, and protect your information.
      <br></br>
      <br></br>
      <strong>Contact Information:</strong>
      <br></br>
      For any concerns, complaints, or inquiries related to this Privacy Policy, please contact: Rozgaarcenter.com Email:
      <a href="mailto:rozgaarcenter2024@gmail.com">rozgaarcenter2024@gmail.com</a>
      <br></br>
      <br></br>
      <strong>Consent:</strong>
      <br></br>
      By using Rozgaarcenter.com, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
      </p>
      </div>
    </div>
      <Info/>
    </>
  )
}

export default PrivacyPolicy
