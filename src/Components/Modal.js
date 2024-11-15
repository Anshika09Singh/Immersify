

import React from 'react';

const Modal = ({ show, onClose }) => {
  return (
    show ? (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Modal Title</h3>
          <p className="mt-2">This is a simple modal.</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Close</button>
        </div>
      </div>
    ) : null
  );
};

export default Modal;
