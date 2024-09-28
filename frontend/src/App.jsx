import { useState } from 'react'


import toast,{Toaster} from 'react-hot-toast'


import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Courses from './courses/Courses'
import Signup from './Components/Signup'

import { useAuth } from './Context/AuthProvider'
import Home from './home/HomePage'



function App() {

  const [auth,setAuth]=useAuth()

  console.log(auth)


  return (
    <div className='dark:bg-slate-900 dark:text-white'>

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/course' element={auth?<Courses/>:<Navigate to='/signup' />} />

        <Route path='/signup' element={<Signup/>}/>

       
      </Routes>

      <Toaster/>

    </div>
  )
}

export default App
