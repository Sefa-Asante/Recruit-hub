import React from 'react'
import { assets } from '../assets/assets'

const SuccessCard = ({ success }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
      {/* Header with Profile Image and Company Logo */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={success.profileImage}
            alt={`${success.name}'s profile`}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg">{success.name}</h4>
            <p className="text-xs text-gray-500">{success.role}</p>
          </div>
        </div>
        <img
          className="h-8"
          src={assets.company_icon}
          alt="Company Logo"
        />
      </div>

      {/* Tags for Role and Company */}
      <div className="flex items-center gap-3 text-xs mb-4">
        <span className="bg-blue-100 text-blue-700 border border-blue-200 px-4 py-1 rounded-full">
          {success.role}
        </span>
        <span className="bg-red-100 text-red-700 border border-red-200 px-4 py-1 rounded-full">
          {success.company}
        </span>
      </div>

      {/* Description in Italics */}
      <p
        className="italic text-gray-600 text-sm mb-4"
        dangerouslySetInnerHTML={{
          __html: success.content.slice(0, 150) + '...'
        }}
      ></p>

      </div>
  );
};

export default SuccessCard

