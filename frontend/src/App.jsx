import { useState } from 'react'
import Home from './home/home'


import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Courses from './courses/Courses'
import Signup from './Components/Signup'
import Footer from './Components/Footer'



function App() {


  return (
    <div className='dark:bg-slate-900 dark:text-white'>

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/course' element={<Courses/>} />

        <Route path='/signup' element={<Signup/>}/>

       
      </Routes>

    </div>
  )
}

export default App
