import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-blue-100'> 
        <h1 className='text-4xl font-bold mb-4 text-center pt-30'> Ready to Transform Your Recruitment Process?</h1>
        <h4 className='text-center text-gray-800 pt-5 '>Join our platform today and connect with the right talent or opportunities.</h4>
        <div className='flex gap-4 items-center justify-center pb-10 pt-10'>
           <Link to=" /">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Join  as Candidate
              </button>
            </Link>
            <Link to="/">
              <button className="border border-white-900 px-6 py-2 rounded-full">
                Join  as Company
              </button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Start