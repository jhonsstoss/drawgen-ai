import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

const Description = () => {

  const navigate = useNavigate()
  
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-[#f250b9a0] mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
          <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt=""  />
          <div className="">
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the <span className='text-[#fd47bd]'><span onClick={() => navigate('/result')}>AI</span>-Powered</span> Text to Image Generator</h2>
            <p className='text-white/80 mb-4'>Easily bring your ideas to life with our free AI image generator. Wheter you nedd stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few click. Imagine it, describe it, and watch it come to life instantly.</p>
            <p className='text-white/80'>Simply type ina  text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visual to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the relative possibilites are limitless!</p>
          </div>
      </div>
    </motion.div>
  )
}

export default Description
