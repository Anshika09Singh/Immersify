import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Modal from './Components/Modal';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import MainInterface from './Components/MainInterface';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainInterface />} />
        <Route path="/modal" element={<ModalRoute />} /> {/* Route to show modal */}
      </Routes>
      <Footer />
    </Router>
  );
}


const ModalRoute = () => {
  const navigate = useNavigate();

  
  const closeModal = () => {
    navigate(-1); // Goes back to the previous page
  };

  return <Modal show={true} onClose={closeModal} />;
};

export default App;
