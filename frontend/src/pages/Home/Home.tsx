import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css';

interface HomeProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

import React, { useState } from 'react';

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const Home: React.FC<HomeProps> = ({ theme, setTheme }) => {
  const [stars, setStars] = useState<{top: number, left: number, size: number}[]>([]);

  const handleCosmosClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = getRandomInt(2, 5);
    setStars(prev => [...prev, { top: y, left: x, size }]);
  };

  return (
    <div className="home-page">
      <Navbar theme={theme} setTheme={setTheme} />
  <div className="home-content">
        <div
          className="hero-cosmos-bg"
          onClick={handleCosmosClick}
        >
          <section className="hero-section">
            <h1 className="hero-title">NASA Data Explorer</h1>
            <p className="hero-desc">
              Discover the wonders of space with real NASA data. Browse Astronomy Picture of the Day, Mars Rover photos, asteroid info, and Earth imagery. Enjoy a modern, fast, and visually engaging experience with infinite scroll, smart caching, and beautiful UI. Powered by NASA Open APIs.
            </p>
            <p className="hero-desc">
              Explore. Learn. Be inspired by the universe.
            </p>
            <p className="hero-note">
              Click on the sky to add your own stars!
            </p>
          </section>
          <div className="cosmos-stars" />
          {stars.map((star, idx) => (
            <div
              key={idx}
              className="interactive-star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
