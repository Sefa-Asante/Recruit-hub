import React, { useState } from 'react';
import { FileUpload } from '../Components/FileUpload';
import { User, Briefcase, FileText, Video, Mic, Send, CheckCircle } from 'lucide-react';

function CandidatePage() {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    description: '',
    profilePicture: null,
    cv: null,
    video: null,
    audio: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Job description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitted(true);
      console.log('Application submitted:', formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileSelect = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600">
              Thank you for your interest. We'll review your application and get back to you soon.
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                jobTitle: '',
                description: '',
                profilePicture: null,
                cv: null,
                video: null,
                audio: null,
              });
            }}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative py-8 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Job Application</h1>
          <p className="text-lg text-blue-100 drop-shadow">
            Fill out the form below to submit your application
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h2 className="text-2xl font-bold text-white">Application Details</h2>
            <p className="text-blue-100 mt-1">
              Please provide your information and optional supporting materials
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Picture</h3>
                <FileUpload
                  accept=".jpg,.jpeg,.png,.gif,.webp"
                  icon={<User className="h-8 w-8 text-blue-500" />}
                  onFileSelect={(file) => handleFileSelect('profilePicture', file)}
                  file={formData.profilePicture}
                  isProfilePicture={true}
                />
            </div>

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Job Title *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.jobTitle ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Position you're applying for"
                  />
                </div>
                {errors.jobTitle && (
                  <p className="text-sm text-red-600">{errors.jobTitle}</p>
                )}
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Why are you interested in this position? *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Tell us about your interest in this role, relevant experience, and what you can bring to the team... (minimum 50 characters)"
              />
              <div className="flex justify-between items-center">
                {errors.description ? (
                  <p className="text-sm text-red-600">{errors.description}</p>
                ) : (
                  <p className="text-sm text-gray-500">
                    {formData.description.length}/50 minimum characters
                  </p>
                )}
              </div>
            </div>

            {/* File Uploads */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Supporting Materials (Optional)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <FileUpload
                  label="Resume/CV"
                  accept=".pdf,.doc,.docx"
                  icon={<FileText className="h-10 w-10 text-blue-500" />}
                  onFileSelect={(file) => handleFileSelect('cv', file)}
                  file={formData.cv}
                />

                <FileUpload
                  label="Video Introduction"
                  accept=".mp4,.mov,.avi,.mkv"
                  icon={<Video className="h-10 w-10 text-blue-500" />}
                  onFileSelect={(file) => handleFileSelect('video', file)}
                  file={formData.video}
                />

                <FileUpload
                  label="Audio Portfolio"
                  accept=".mp3,.wav,.m4a,.aac"
                  icon={<Mic className="h-10 w-10 text-blue-500" />}
                  onFileSelect={(file) => handleFileSelect('audio', file)}
                  file={formData.audio}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t pt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Submit Application</span>
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Fields marked with * are required
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-100 drop-shadow">
            Having trouble? Contact our support team for assistance.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CandidatePage;