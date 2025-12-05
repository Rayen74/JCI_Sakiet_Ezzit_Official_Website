import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Welcome from './components/Welcome';
import Bureau from './components/Bureau';
import Projects from './components/Projects';
import FooterB from './components/FooterB';
import Contact from './components/Contact';
import Activity from './components/Activity';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex-1 min-h-screen pt-2 pb-2 text-white bg-white">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/our-board" element={<Bureau />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activities" element={<Activity />} />
          {/* Add your other routes here */}
        </Routes>
      </div>
      <FooterB />
    </BrowserRouter>
  );
}

export default App;