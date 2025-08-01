import React from 'react'
import { Users, Building, Award, TrendingUp } from "lucide-react"

function Stat() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      label: "Registered Candidates",
      value: "10,000+",
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      label: "Partner Companies",
      value: "500+",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      label: "Successful Placements",
      value: "5,000+",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      label: "Retention Rate",
      value: "85%",
    },
  ]

  return (
    <section className="w-full py-16 bg-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Platform Statistics</h2>
          <p className="text-lg text-gray-600">
            Tracking our impact on employment and recruitment success.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <div className="bg-blue-100 rounded-full p-3 mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold">{item.value}</h3>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stat;
