import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Footer from '../components/Footer'
import Description from '../components/Description'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {

  return (
    <div className='text-white'>
      <Header/>
      <Steps/>
      <Description />
      <GenerateBtn />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
