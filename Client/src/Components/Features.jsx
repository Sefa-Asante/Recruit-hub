import React from  'react'
import { FaUserCircle, FaBuilding, FaVideo, FaFileAlt, FaSearch, FaChartBar, FaCommentDots, FaAward } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserCircle className="h-6 w-6 text-blue-600" />,
    title: "Multimedia Profiles",
    description: "Create rich profiles with videos, audio, and images to showcase your skills beyond text.",
  },
  {
    icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
    title: "Company Interface",
    description: "Dedicated portal for companies to search, review, and connect with potential candidates.",
  },
  {
    icon: <FaVideo className="h-6 w-6 text-blue-600" />,
    title: "Video Presentations",
    description: "Upload video introductions and demonstrations of your work and skills.",
  },
  {
    icon: <FaFileAlt className="h-6 w-6 text-blue-600" />,
    title: "CV Management",
    description: "Upload and manage your CV and other professional documents in one place.",
  },
  {
    icon: <FaSearch className="h-6 w-6 text-blue-600" />,
    title: "Advanced Search",
    description: "Find the perfect candidate or job opportunity with powerful filtering options.",
  },
  {
    icon: <FaChartBar className="h-6 w-6 text-blue-600" />,
    title: "Employment Statistics",
    description: "Track employment metrics and see which companies are leading in hiring.",
  },
  {
    icon: <FaCommentDots className="h-6 w-6 text-blue-600" />,
    title: "Direct Communication",
    description: "Connect directly with candidates or companies through our integrated messaging system.",
  },
  {
    icon: <FaAward className="h-6 w-6 text-blue-600" />,
    title: "Company Rankings",
    description: "Companies earn badges and rankings based on their hiring success and platform engagement.",
  },
];

function Features() {
  return (
    <section className="w-full py-16 bg-gray-170">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Platform Features</h2>
<p className="text-lg text-gray-700">
  Tools for job seekers and employers to simplify and enhance the recruitment journey.
</p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition">
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
