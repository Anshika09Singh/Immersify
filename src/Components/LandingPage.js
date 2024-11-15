// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-4 animate-bounce">Welcome to the Immersive Learning Platform</h1>
      <p className="text-lg mb-6">A new way to experience learning with VR and AR content.</p>
      <button
        className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform"
        onClick={() => navigate('/main')}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
