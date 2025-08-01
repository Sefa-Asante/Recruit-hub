import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Company from './Pages/Company'
import CandidateData from './Pages/CandidateData'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Company' element={<Company />} />
       <Route path='/company/candidateData/:id' element={<CandidateData />} />
    </Routes>
  )
}

export default App