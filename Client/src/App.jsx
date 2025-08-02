import React,{useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Company from './Pages/Company'
import CandidateData from './Pages/CandidateData'
import Review from './Pages/Review'
import RecruiterLogin from './Components/RecruiterLogin'
import { AppContext } from './Context/AppContext'

const App = () => {
  const {showRecruiterLogin, setShowRecruiterLogin}=useContext(AppContext)
  return (
    <div>
    {showRecruiterLogin && <RecruiterLogin />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Company' element={<Company />} />
       <Route path='/company/candidateData/:id' element={<CandidateData />} />
       <Route path='/review' element={<Review />} />
    </Routes>
    </div>
  )
}

export default App