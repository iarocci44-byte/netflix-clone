import React from 'react'

function Footer() {
  return (
    <div className='py-10 text-gray-400'>
        <div className='pb-10 underline'>
            Questions? Call 1-866-952-4456
        </div>
        <div className='grid grid-cols-4 gap-4 p-4 underline'>
            <ul className=''>
                <li>FAQ</li>
                <li>Media Center</li>
                <li>Redeem Gift Cards</li>
                <li>Privacy</li>
                <li>Speed Test</li>
                <li>Ad Choices</li>
            </ul>
            <ul>
                <li>Help Center</li>
                <li>Investor Relations</li>
                <li>Buy Gift Cards</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </ul>
            <ul>
                <li>Account</li>
                <li>Jobs</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </ul>
            <ul>
                <li>Netflix House</li>
                <li>Netflix Shop</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Do Not Sell or Share My Personal Information</li>
            </ul>

        </div>
        <div className='pt-10 no-underline text-gray-200'>
             <div>
                    <select className="pr-25 border p-1 mr-2 border-gray-500 rounded" name="" id="">
                        <option className="text-black" value="English">English</option>
                        <option className="text-black" value="Spanish">Spanish</option>
                    </select>
                </div>
        <div className='text-gray-400 py-10'>
            Netflix USA
        </div>
        <div className='text-gray-400'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-600 underline'>Learn more</span>.
        </div>
        </div>
       
    </div>
  )
}

export default Footer