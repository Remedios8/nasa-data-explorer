import React from 'react';

import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} NASA Data Explorer</span>
      <span>Powered by NASA Open APIs</span>
    </div>
  </footer>
);

export default Footer;
