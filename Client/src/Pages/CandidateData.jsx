import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import { assets, jobsData } from "../assets/assets";
import moment from "moment";
import kconvert from "k-convert";
import ApplicantCard from "../Components/ApplicantCard";
import Footer from "../Components/Footer";

const CandidateData = () => {
  const { id } = useParams();
  const [JobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };
  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return JobData ? (
    <>
      <Navbar />
<div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto pt-20">
  <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded">
    
    {/* Left Side: Company Info */}
    <div className="flex flex-col md:flex-row items-center">
      <img src={JobData.companyId.image} alt="" className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border" />
      
      <div className="text-center md:text-left text-neutral-700">
        <h1 className="text-2xl sm:text-4xl font-medium">{JobData.title}</h1>

        <div className="flex flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
          <span className="flex items-center gap-1">
            <img src={assets.suitcase_icon} alt="" className="h-5 w-5" />
            {JobData.companyId.name}
          </span>
          <span className="flex items-center gap-1">
            <img src={assets.location_icon} alt="" className="h-5 w-5" />
            {JobData.location}
          </span>
          <span className="flex items-center gap-1">
            <img src={assets.person_icon} alt="" className="h-5 w-5" />
            {JobData.label}
          </span>
          <span className="flex items-center gap-1">
            <img src={assets.money_icon} alt="" className="h-5 w-5" />
            CTC: {kconvert.convertTo(JobData.salary)}
          </span>
        </div>
      </div>
    </div>

    {/* Right Side: Actions */}
    <div className="text-end text-sm">
      <button className="bg-blue-600 text-white px-10 py-2.5 rounded hover:bg-blue-700">
        Apply Now
      </button>
      <p className="mt-1 text-sm text-gray-500">
        Posted {moment(JobData.date).fromNow()}
      </p>
    </div>

  </div>
  <div className=" flex flex-col lg: flex-row justify-between items-start ">
  <div className="w-full lg:w-2/3">
       <h2 className="font-bold text-2xl mb-4">Job description</h2>
    <div className="rich-text" dangerouslySetInnerHTML={{__html:JobData.description}}></div>
    <button className="bg-blue-600 text-white px-10 py-2.5 rounded hover:bg-blue-700 mt-10">Apply Now</button>
  </div>
  {/* right section of the candidate data */}
  <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
    <h2>More jobs from {JobData.companyId.name}</h2>
    {jobs.filter(job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id)
    .filter(job=> true).slice(0,4)
    .map((job, index)=> <ApplicantCard key={index} job={job} />)}
  </div>
  
  </div>
</div>

<Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CandidateData;
