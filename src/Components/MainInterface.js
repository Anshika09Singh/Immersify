
import React from 'react';

const MainInterface = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold text-center mb-6 animate-fadeIn">Immersive Learning Dashboard</h2>
      

      <div className="flex justify-center gap-6 mb-8 animate-slideIn">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition transform duration-200">Courses</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transition transform duration-200">Chat</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-200">Profile</button>
        
      </div>

      {/* Progress Tracking */}
      <div className="my-8 animate-grow">
        <p className="text-lg font-medium">Your Progress:</p>
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: '75%' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 animate-widthGrow"
            >
              75%
            </div>
          </div>
        </div>
      </div>

    
      <div className="my-8">
        <h3 className="text-2xl text-center mb-4">VR/AR Learning Experience</h3>
        <div className="border-dashed border-4 border-gray-300 p-4 rounded-lg">
          <p className="text-center text-gray-500 animate-pulse">
            VR/AR content placeholder (Integrate with WebXR API here)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInterface;
