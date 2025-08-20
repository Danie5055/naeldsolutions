// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import NotesAndTrainers from './components/NotesAndTrainers'; // ✅ Updated import
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/NotesAndTrainers" element={<NotesAndTrainers />} /> {/* ✅ Updated route */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
