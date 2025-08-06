import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Statistics() {
  const [timeRange, setTimeRange] = useState("month");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectOpen, setSelectOpen] = useState(false);

  const topCompanies = [
    {
      id: 1,
      name: "TechCorp",
      avatar: "TC",
      hires: 45,
      responseRate: "95%",
      badges: ["Top Hirer", "Fast Responder"],
    },
    {
      id: 2,
      name: "InnovateTech",
      avatar: "IT",
      hires: 38,
      responseRate: "92%",
      badges: ["Top Hirer"],
    },
    {
      id: 3,
      name: "Global Solutions",
      avatar: "GS",
      hires: 32,
      responseRate: "88%",
      badges: ["Fast Responder"],
    },
    {
      id: 4,
      name: "CreativeStudio",
      avatar: "CS",
      hires: 29,
      responseRate: "90%",
      badges: ["Diversity Champion"],
    },
    {
      id: 5,
      name: "WebStudio",
      avatar: "WS",
      hires: 25,
      responseRate: "85%",
      badges: [],
    },
  ];

  const monthlyStats = [
    { month: "Jan", hires: 98, interviews: 312, views: 2850 },
    { month: "Feb", hires: 105, interviews: 348, views: 3110 },
    { month: "Mar", hires: 124, interviews: 415, views: 3595 },
    { month: "Apr", hires: 137, interviews: 462, views: 4130 },
    { month: "May", hires: 156, interviews: 520, views: 4720 },
  ];

  const industryStats = [
    { industry: "Technology", hires: 485, candidates: 3250 },
    { industry: "Healthcare", hires: 320, candidates: 2180 },
    { industry: "Finance", hires: 275, candidates: 1950 },
    { industry: "Education", hires: 210, candidates: 1540 },
    { industry: "Manufacturing", hires: 185, candidates: 1320 },
  ];

  const skillDemand = [
    { skill: "JavaScript", demand: 78, growth: "+12%" },
    { skill: "React", demand: 72, growth: "+15%" },
    { skill: "Python", demand: 65, growth: "+8%" },
    { skill: "AWS", demand: 60, growth: "+20%" },
    { skill: "Data Analysis", demand: 55, growth: "+5%" },
  ];

const getBadgeColor = (badge) => {
  switch (badge) {
    case "Top Hirer":
      return "bg-blue-600 text-white";
    case "Fast Responder":
      return "bg-blue-500 text-white";
    case "Diversity Champion":
      return "bg-purple-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

  };

  const timeRangeOptions = [
    { value: "week", label: "Last Week" },
    { value: "month", label: "Last Month" },
    { value: "quarter", label: "Last Quarter" },
    { value: "year", label: "Last Year" },
  ];

  const selectedTimeRangeLabel = timeRangeOptions.find(option => option.value === timeRange)?.label;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Platform Statistics</h2>
          <div className="relative">
            <button
              onClick={() => setSelectOpen(!selectOpen)}
              className="flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <span>{selectedTimeRangeLabel}</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            {selectOpen && (
              <div className="absolute right-0 z-10 w-48 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {timeRangeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTimeRange(option.value);
                      setSelectOpen(false);
                    }}
                    className="block w-full px-3 py-2 text-sm text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="pb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Hires</h3>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1,248</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 font-medium">+12%</span>
                <span className="text-xs text-gray-500 ml-1">from last {timeRange}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="pb-2">
              <h3 className="text-sm font-medium text-gray-600">Active Companies</h3>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">324</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 font-medium">+8%</span>
                <span className="text-xs text-gray-500 ml-1">from last {timeRange}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="pb-2">
              <h3 className="text-sm font-medium text-gray-600">Registered Candidates</h3>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10,482</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 font-medium">+15%</span>
                <span className="text-xs text-gray-500 ml-1">from last {timeRange}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="pb-2">
              <h3 className="text-sm font-medium text-gray-600">Avg. Time to Hire</h3>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">18 days</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 font-medium">-3 days</span>
                <span className="text-xs text-gray-500 ml-1">from last {timeRange}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'companies', label: 'Top Companies' },
                { id: 'industries', label: 'Industries' },
                { id: 'skills', label: 'Skills Demand' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Monthly Trends Chart */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Monthly Hiring Trends</h3>
                    <p className="text-sm text-gray-600 mt-1">Overview of hiring activity across the platform</p>
                  </div>
                  <div className="p-6">
                    <div className="h-80 flex items-end justify-between gap-4">
                      {monthlyStats.map((stat) => (
                        <div key={stat.month} className="flex flex-col items-center gap-2 flex-1">
                          <div className="flex flex-col items-center gap-1 w-full">
                            <div 
                              className="bg-blue-200 w-full rounded-t-md transition-all duration-500 hover:bg-blue-300" 
                              style={{ height: `${Math.max(stat.views / 25, 10)}px` }}
                            ></div>
                            <div
                              className="bg-blue-400 w-full rounded-t-md transition-all duration-500 hover:bg-blue-500"
                              style={{ height: `${Math.max(stat.interviews / 3, 10)}px` }}
                            ></div>
                            <div 
                              className="bg-blue-600 w-full rounded-t-md transition-all duration-500 hover:bg-blue-700" 
                              style={{ height: `${Math.max(stat.hires * 1.2, 10)}px` }}
                            ></div>
                          </div>
                          <div className="text-sm font-medium text-gray-700">{stat.month}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-6 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                        <span className="text-sm text-gray-600">Profile Views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">Interviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">Hires</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Rate and Growth */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Employment Success Rate</h3>
                      <p className="text-sm text-gray-600 mt-1">Percentage of candidates who found employment</p>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col items-center">
                        <div className="relative w-40 h-40">
                          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="8"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#2563eb"
                              strokeWidth="8"
                              strokeDasharray="283"
                              strokeDashoffset="70"
                              className="transition-all duration-1000"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold text-gray-900">75%</span>
                          </div>
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-600">
                          75% of candidates on our platform find employment within 3 months
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Platform Growth</h3>
                      <p className="text-sm text-gray-600 mt-1">Growth in users and activity over time</p>
                    </div>
                    <div className="p-6">
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Candidate Growth</span>
                            <span className="text-sm font-medium text-green-600">+32%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: "32%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Company Growth</span>
                            <span className="text-sm font-medium text-green-600">+24%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: "24%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Hiring Activity</span>
                            <span className="text-sm font-medium text-green-600">+45%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: "45%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'companies' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Top Hiring Companies</h3>
                    <p className="text-sm text-gray-600 mt-1">Companies with the most successful hires on the platform</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {topCompanies.map((company, index) => (
                        <div key={company.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-lg font-bold text-gray-700">
                              {index + 1}
                            </div>
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                              {company.avatar}
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
                              <div className="flex gap-2 mt-1">
                                {company.badges.map((badge, i) => (
                                  <span key={i} className={`px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor(badge)}`}>
                                    {badge}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{company.hires} hires</div>
                            <div className="text-sm text-gray-500">{company.responseRate} response rate</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Hiring Efficiency</h3>
                    <p className="text-sm text-gray-600 mt-1">Average time to hire by company size</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Small Companies (1-50 employees)</span>
                          <span className="text-sm font-medium text-gray-900">15 days</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Medium Companies (51-200 employees)</span>
                          <span className="text-sm font-medium text-gray-900">22 days</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Large Companies (201+ employees)</span>
                          <span className="text-sm font-medium text-gray-900">28 days</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Industry Breakdown</h3>
                    <p className="text-sm text-gray-600 mt-1">Hiring statistics by industry</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {industryStats.map((stat) => (
                        <div key={stat.industry} className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="font-medium text-gray-900">{stat.industry}</h3>
                              <p className="text-sm text-gray-600">
                                {stat.hires} hires from {stat.candidates.toLocaleString()} candidates
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold text-gray-900">{Math.round((stat.hires / stat.candidates) * 100)}%</span>
                              <p className="text-sm text-gray-500">Success rate</p>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                              style={{ width: `${(stat.hires / stat.candidates) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Industry Growth</h3>
                    <p className="text-sm text-gray-600 mt-1">Year-over-year growth in hiring by industry</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {[
                        { name: "Technology", growth: 24, width: 80 },
                        { name: "Healthcare", growth: 18, width: 65 },
                        { name: "Finance", growth: 12, width: 50 },
                        { name: "Education", growth: 8, width: 35 },
                        { name: "Manufacturing", growth: 5, width: 25 }
                      ].map((industry) => (
                        <div key={industry.name}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                            <span className="text-sm font-medium text-green-600">+{industry.growth}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${industry.width}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Most In-Demand Skills</h3>
                    <p className="text-sm text-gray-600 mt-1">Skills most frequently requested by employers</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {skillDemand.map((skill) => (
                        <div key={skill.skill} className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="font-medium text-gray-900">{skill.skill}</h3>
                              <p className="text-sm text-green-600">{skill.growth} YoY</p>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold text-gray-900">{skill.demand}%</span>
                              <p className="text-sm text-gray-500">of job listings</p>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${skill.demand}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Emerging Skills</h3>
                    <p className="text-sm text-gray-600 mt-1">Fastest growing skills in demand</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {[
                        { skill: "Artificial Intelligence", growth: 78 },
                        { skill: "Blockchain", growth: 65 },
                        { skill: "Cybersecurity", growth: 52 },
                        { skill: "Data Science", growth: 45 },
                        { skill: "Cloud Computing", growth: 38 }
                      ].map((skill) => (
                        <div key={skill.skill}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{skill.skill}</span>
                            <span className="text-sm text-green-600">+{skill.growth}% YoY</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${skill.growth}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );


export default Statistics;