import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='b-0 flex items-center justify-between gap-4 py-3 mt-20'>

      <img src={assets.logo_w} alt="" width={150} />
      <p className='flex-1 border-l border-white pl-4 text-sm text-white max-sm:hidden'>Copyright Jhonatas Santos | All right reserved.</p>

      <div className="flex gap-2.5">
        <img className='cursor-pointer' src={assets.facebook_icon} alt="" width={35} />
        <img className='cursor-pointer' src={assets.twitter_icon} alt="" width={35} />
        <img className='cursor-pointer' src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  )
}

export default Footer
