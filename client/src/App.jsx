import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-black to-[#250351] overflow-y-hidden'>
      <Navbar/>
     {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/result' element={<Result />}/>
        <Route path='/buy' element={<BuyCredit />}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
