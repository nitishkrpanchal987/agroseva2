import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Intro from './intro/Intro'
import Form from './form/Form'
import Reciept from './reciept/Reciept'
// import Checkout from './form/Checkout'

const Routing = () => {
  return (
    <div>
      <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Intro/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/reciept' element={<Reciept/>}/>
        </Routes>
      </>
    </div>
  )
}

export default Routing
