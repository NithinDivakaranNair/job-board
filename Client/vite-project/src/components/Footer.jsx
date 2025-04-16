import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © 2025 <span className="font-semibold">JobBoard</span>. Contact: 
        <a href="mailto:info@jobboard.com" className="text-blue-400 hover:underline ml-1">info@jobboard.com</a>
      </p>
    </footer>
  );
};

export default Footer;
