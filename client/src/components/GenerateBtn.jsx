import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  
  const onClickHandler = () =>{
    if(user){
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration:1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-white py-6'>See the magic. <span className='text-[#fa23af]'>Try now</span></h1> 
      <button 
      onClick={onClickHandler}
      className='inline-flex items-center gap-2 font-semibold text-[#ffffff] bg-[#fa23af] m-auto mt-8 px-12 py-3 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer'>
        Generate Images
        <img className='h-6' src={assets.star_group} alt="" />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
