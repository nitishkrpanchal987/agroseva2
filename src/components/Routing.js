import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Intro from './intro/Intro'

const Routing = () => {
  return (
    <div>
      <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Intro/>}/>
        </Routes>
      </>
    </div>
  )
}

export default Routing