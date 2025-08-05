import React,{useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Company from './Pages/Company'
import CandidateData from './Pages/CandidateData'
import Review from './Pages/Review'
import RecruiterLogin from './Components/RecruiterLogin'
import { AppContext } from './Context/AppContext'
import Dashboard from './Pages/Dashboard'
import AddJob from './Pages/Addjob'
import ManageJobs from './Pages/Managejobs'
import ViewApplications from './Pages/ViewApplications'
import AboutPage from './Pages/About'
import  'quill/dist/quill.snow.css'
import CandidatePage from './Pages/CandidatePage'


const App = () => {
  const {showRecruiterLogin, setShowRecruiterLogin}=useContext(AppContext)
  return (
    <div>
    {showRecruiterLogin && <RecruiterLogin />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
       <Route path='/candidate-page' element={<CandidatePage />} />
      <Route path='/Company' element={<Company />} />
      <Route path='/about'  element ={<AboutPage />} />
      <Route path='/company/candidateData/:id' element={<CandidateData />} />
      <Route path='/review' element={<Review />} />
      <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/manage-jobs' element={<ManageJobs />} />
        <Route path='/view-applications' element={<ViewApplications />} />
      
    </Routes>
    </div>
  )
}

export default App