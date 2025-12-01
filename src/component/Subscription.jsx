import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Subscription() {
  return (
    <div className=''>
        <div className='text-center'>
        Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className='flex justify-center p-5'>
            <input className="w-150 border border-gray-500 rounded p-5 mr-5" type="email" name="" placeholder="Email address..." id="" />
            <button className='bg-red-600 px-5 text-2xl rounded flex items-center'>Get Started <MdOutlineKeyboardArrowRight /></button>
        </div>
    </div>
  )
}

export default Subscription