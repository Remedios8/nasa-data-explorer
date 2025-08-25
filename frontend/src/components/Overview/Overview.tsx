import React from 'react';
import './Overview.css';

const Overview: React.FC = () => (
  <div className="explorer-overview">
    <h2 className="explorer-overview-title">Explorer Overview</h2>
    <p className="explorer-overview-desc">
      Welcome to the NASA Data Explorer! Here you can browse and discover space-related data from NASA's open APIs:
    </p>
    <ul className="explorer-overview-list">
      <li><b>APOD</b> — Astronomy Picture of the Day</li>
      <li><b>Mars Rover</b> — Latest Mars rover photos</li>
      <li><b>Asteroids</b> — Near-Earth asteroid data</li>
      <li><b>Earth Imagery</b> — Satellite images of Earth</li>
    </ul>
    <p className="explorer-overview-note">
      Select a category on the left to start exploring. Enjoy infinite scroll, smart caching, and a beautiful UI!
    </p>
  </div>
);

export default Overview;
