import React from 'react';
import {
  FaUserCircle,
  FaBuilding,
  FaVideo,
  FaFileAlt,
  FaSearch,
  FaChartBar,
  FaCommentDots,
  FaAward,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaUserCircle className="h-8 w-8 text-blue-600" />,
    title: 'Multimedia Profiles',
    description:
      'Showcase your skills with video, audio, and images to go beyond traditional resumes.',
  },
  {
    icon: <FaBuilding className="h-8 w-8 text-blue-600" />,
    title: 'Company Interface',
    description:
      'A sleek portal for companies to search, evaluate, and connect with talent directly.',
  },
  {
    icon: <FaVideo className="h-8 w-8 text-blue-600" />,
    title: 'Video Presentations',
    description:
      'Add personal flair through video introductions and real-time demos of your expertise.',
  },
  {
    icon: <FaFileAlt className="h-8 w-8 text-blue-600" />,
    title: 'CV Management',
    description:
      'Keep your documents organized with a dedicated space for resumes and certificates.',
  },
  {
    icon: <FaSearch className="h-8 w-8 text-blue-600" />,
    title: 'Advanced Search',
    description:
      'Precision filtering to help you find the perfect role or candidate faster.',
  },
  {
    icon: <FaChartBar className="h-8 w-8 text-blue-600" />,
    title: 'Employment Statistics',
    description:
      'Gain insight into job trends and company hiring performance across the platform.',
  },
  {
    icon: <FaCommentDots className="h-8 w-8 text-blue-600" />,
    title: 'Direct Communication',
    description:
      'Seamless messaging between candidates and recruiters for real-time engagement.',
  },
  {
    icon: <FaAward className="h-8 w-8 text-blue-600" />,
    title: 'Company Rankings',
    description:
      'Celebrate hiring excellence with achievement badges and leaderboard rankings.',
  },
];

function Features() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Platform Features
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Empowering job seekers and companies with smart, interactive tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 text-center"
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
