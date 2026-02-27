import React from "react";
import AboutHero from "../components/About/AboutHero";
import LineageSection from "../components/About/LineageSection";
import PhilosophyGrid from "../components/About/PhilosophyGrid";
import MaterialShowcase from "../components/About/MaterialShowcase";
import Newsletter from "../components/Shared/Newsletter";

const AboutPage = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <AboutHero />
      <LineageSection />
      <PhilosophyGrid />
      <MaterialShowcase />
      <Newsletter />
    </div>
  );
};

export default AboutPage;
