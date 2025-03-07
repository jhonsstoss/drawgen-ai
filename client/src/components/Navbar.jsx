import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {user, setShowLogin} = useContext(AppContext)

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <img src={assets.logo_w} alt="" className='w-28 sm:w-32 lg:w-40' />
      </Link>
      
      <div className="">
        {user 
        ? <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-[#F250B9] px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>
            <img className="w-5" src={assets.credit_star} alt="" />
            <p className='text-white sm:text-sm font-medium'>Credits left : 50</p>
          </button>
          <p className='text-white max-sm:hidden pl-4'>Hi, JhonSantoss</p>
          <div className="relative group cursor-pointer">
            <img className="w-10 drop-shadow" src={assets.profile_icon}  alt="" />
            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-white rounded pt-12">
              <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                <li className='text-[#F250B9] font-semibold py-1 px-2 cursor-pointer pr-10'>Logout</li>
              </ul>
            </div>
          </div>
        </div>
        : <div className="flex items-center gap-2 sm:gap-5">
          <p onClick={() => navigate('/buy')} className='cursor-pointer text-white'>Pricing</p>
          <p className='text-white bg-[#F250B9] px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer' onClick={()=>setShowLogin(true)}>Login</p>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
