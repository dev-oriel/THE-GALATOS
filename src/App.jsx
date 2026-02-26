import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col selection:bg-primary/20">
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
