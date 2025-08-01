import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">TalentHub</h3>
            <p className="mt-2 text-sm text-gray-500">
              Connecting talent with opportunities through multimedia profiles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">For Candidates</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/register?type=candidate" className="text-gray-500 hover:text-blue-600">Create Profile</Link></li>
              <li><Link to="/companies" className="text-gray-500 hover:text-blue-600">Browse Companies</Link></li>
              <li><Link to="/resources/candidates" className="text-gray-500 hover:text-blue-600">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">For Companies</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/register?type=company" className="text-gray-500 hover:text-blue-600">Register Company</Link></li>
              <li><Link to="/candidates" className="text-gray-500 hover:text-blue-600">Find Talent</Link></li>
              <li><Link to="/resources/companies" className="text-gray-500 hover:text-blue-600">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-500 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-blue-600">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} TalentHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
