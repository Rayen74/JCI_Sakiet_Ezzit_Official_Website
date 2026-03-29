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
      {/* The Navbar already has a blue gradient. 
          The min-h-screen ensures the footer stays at the bottom on short pages.
      */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Welcome />} />
            <Route path="/our-board" element={<Bureau />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/activities" element={<Activity />} />
            {/* Fallback for undefined routes */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>

        <FooterB />
      </div>
    </BrowserRouter>
  );
}

export default App;