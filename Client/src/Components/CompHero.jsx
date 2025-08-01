import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';

const CompHero = () => {
  const { setIsSearched, setSearchFilter } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10 pt-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-b from-gray-500 to-gray-800  text-white py-12 text-center mx-2 rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Find the Right Talent Fast
        </h2>
        <p className="b-8 max-w-xl mx-auto text-sm font-light px-5 py-2">
          Post jobs, browse qualified candidates, and build your dream team — all in one place. Let’s help you hire with confidence.
        </p>

        {/* Search Bar */}
        <div className="flex item-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto mt-6">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="Search Icon" />
            <input
              type="text"
              placeholder="Search applicants by title"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>

          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="Location Icon" />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>

          <button
            onClick={onSearch}
            className="bg-blue-600 rounded px-6 py-2 text-white m-1"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by top employers</p>
          <img className="h-6" src={assets.microsoft_logo} alt="Microsoft" />
          <img className="h-6" src={assets.walmart_logo} alt="Walmart" />
          <img className="h-6" src={assets.accenture_logo} alt="Accenture" />
          <img className="h-6" src={assets.samsung_logo} alt="Samsung" />
          <img className="h-6" src={assets.amazon_logo} alt="Amazon" />
          <img className="h-6" src={assets.adobe_logo} alt="Adobe" />
        </div>
      </div>
    </div>
  );
};

export default CompHero;
