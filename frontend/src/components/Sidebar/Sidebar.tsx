import React from 'react';

import './Sidebar.css';

interface SidebarProps {
  category: string;
  onCategoryChange: (cat: string) => void;
}

const categories = [
  { key: 'overview', label: 'Overview' },
  { key: 'apod', label: 'APOD' },
  { key: 'mars', label: 'Mars Rover' },
  { key: 'asteroids', label: 'Asteroids' },
  { key: 'earth', label: 'Earth Imagery' },
];

const Sidebar: React.FC<SidebarProps> = ({ category, onCategoryChange }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          {categories.map(cat => (
            <li key={cat.key}>
              <button
                className={`sidebar-btn${category === cat.key ? ' active' : ''}`}
                onClick={() => onCategoryChange(cat.key)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
