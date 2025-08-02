import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login.jsx';
import Company from '../Pages/Company.jsx';
import {useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../Context/AppContext.jsx';



const Navbar = () => {

  const {openSignIn} = useClerk()
  const {user} = useUser()
  const navigate=useNavigate()

  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white h-16  shadow py-4 bg-black-100'>
      <div className='container px-4 mx-auto flex justify-between items-center'>
        
       
        <div className='flex items-center gap-6'>
         <img onClick={()=> navigate('/')}  src={assets.logo} alt="Logo" className='h-10 cursor-pointer' />

          <Link className='font-medium' to='/'>Home</Link>
          <Link to='/find-talent'>Find Talent</Link>
          <Link to='/companies'>Companies</Link>
          <Link to='/statistics'>Statistics</Link>
          <Link to='/about'>About</Link>
        </div>

        {
          user
          ? <div className=' flex items-center gap-3'>
            <Link to={'/review'}>
              Applied Jobs
            </Link>
            <p> | </p>
            <p className='max-sm:hidden' >Hi , {user.firstName+""+ user.lastName}</p>
            <UserButton />
          </div>
          :<div className='flex gap-4 max-sm:text-xs'>
          
          <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600'>Recruiter Lorgin</button>
          <button onClick={ e => openSignIn()} className='bg-blue-600 text-white px-6 py-2 rounded-full'>Sign Up</button>
          </div>
        }

      
      </div>
    </div>
  );
};

export default Navbar;

