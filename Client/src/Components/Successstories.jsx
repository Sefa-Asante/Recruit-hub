import React from 'react'
import { testimonials } from '../assets/assets'
import SuccessCard from './SucessCard'




 
  
  const Successstories = () => {
    return (
      <div>
         <div>

        {/*Job listings  */}
        <section className='w-full lg:w=3/4 text-gray-800 max-lg:px-4 pt-20 pb-20'>
            <h3 className='bold font-large text-6xl py-2 text-center'id='job-list'>Success Stories</h3>
            <p className='mb-8 text-center font-medium'> Hear from candidates and companies who have transformed their recruitment experience with our platform.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-60'>
              {testimonials.map((success,index)=>(
                <SuccessCard key={index} success={success}/>
              ))}
            </div>
        </section>  
    </div>
      </div>
    )
  }
  
  export default Successstories