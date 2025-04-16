import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">JobBoard</div>
        <nav className="flex space-x-9 font-semibold">
          <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link to="/jobs" className="hover:text-yellow-500 transition-colors">Jobs</Link>
          <Link to="/post-job" className="hover:text-yellow-500 transition-colors">Post a Job</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>  
        </nav>
      </div>
    </header>
  );
};

export default Header;
