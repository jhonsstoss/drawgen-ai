import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

const Steps = () => {

  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration:1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-[#ffffff] text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>

      <p className='text-lg text-[#f250b998] mb-8'>Transform Words Into Stunning Images</p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div className="flex items-center gap-4 p-5 px-8 bg-white/10 shadow-lg shadow-white/20 border rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-300" key={index}>
            <img width={40} src={item.icon} alt="" />
            <div className="">
              <h2 className='text-[#F250B9] text-xl font-semibold'>{item.title}</h2>
              <p className='text-white'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
