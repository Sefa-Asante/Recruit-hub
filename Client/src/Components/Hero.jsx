import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Hero() {
  return (
    <section className="w-full py-42 pt-40 bg-gradient-to-b from-gray-900 to-gray-800 text-white ">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Showcase Your Talent Beyond the CV
          </h1>
          <p className="text-lg max-w-md">
            Our platform connects job seekers and employers through rich multimedia profiles, making the recruitment process more engaging and effective.
          </p>
          <div className="flex gap-4">
            <Link to=" /">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                Create Your Profile
              </button>
            </Link>
            <Link to="/">
              <button className="border border-white px-6 py-2 rounded-md">
                Find Talent
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md h-100 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
            <img
              src={assets.hero_image}
              alt="Recruitment Platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
