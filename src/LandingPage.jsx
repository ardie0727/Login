import React from "react";
import { Link, useNavigate } from "react-router-dom";
import medwellLogo from './medwell_logo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      <nav className="flex items-center justify-between px-4 py-3 shadow-lg bg-white">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={medwellLogo} alt="MedWell Logo" className="w-10 h-10 mr-2" />
        </div>
        <ul className="flex space-x-4 text-base">
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate('/')}>Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/login">Login/Signup</Link>
          </li>
        </ul>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center p-8">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to MedWell</h1>
        <p className="text-xl text-gray-700 mb-8">Empowering health, one patient at a time.</p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Get Started</button>
          <button className="px-6 py-3 font-semibold text-blue-500 bg-white rounded-lg border border-blue-500 hover:bg-blue-50 transition">Learn More</button>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">MedWell is committed to providing the best health services. From virtual consultations to advanced health tracking, we're here to support your wellness journey.</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Report Summerization</h3>
            <p className="text-gray-600">Easily distinguish key components of your report </p>
          </div>
          <div className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Patient Management</h3>
            <p className="text-gray-600">Organize and manage patient information easily.</p>
          </div>
          <div className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Health Tracking</h3>
            <p className="text-gray-600">Monitor your health with detailed records.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Cost Tracker</h3>
            <p className="text-gray-600">Track your medical expense.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p className="text-gray-600">Easily schedule and manage appointments.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Medical Records Access</h3>
            <p className="text-gray-600">Access and manage your medical records securely.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
            <p className="text-gray-600">Track health metrics and improvements.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Privacy </h3>
            <p className="text-gray-600">Make sure your data is private and inaccessible without your consent</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Personal Helper</h3>
            <p className="text-gray-600">Chat with Rajni to get to know your nutrition and calorie needs</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <blockquote className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600">"Andheri mai auto nahi hai"</p>
            <cite className="block mt-2 font-semibold">- Vivek</cite>
          </blockquote>
          <blockquote className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600">"Nabila "</p>
            <cite className="block mt-2 font-semibold">- Nishi</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="w-full px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">Send Message</button>
        </form>
      </section>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} MedWell. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
