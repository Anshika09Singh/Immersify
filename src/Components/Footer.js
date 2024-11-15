
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
          <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
          <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-center text-gray-400">&copy; 2024 IMMERSIFY. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
