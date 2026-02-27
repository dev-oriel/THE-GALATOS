import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';

export default function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-text-main dark:bg-background-dark dark:text-slate-100 font-display transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<StoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}