import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <h1 className="navbar-title">NASA Data Explorer</h1>
      <ul className="navbar-links">
        <li><Link to='/' className={`navbar-link${location.pathname === '/' ? ' active' : ''}`}>Home</Link></li>
        <li><Link to='/explorer' className={`navbar-link${location.pathname === '/explorer' ? ' active' : ''}`}>Explorer</Link></li>
        <li><Link to='/dashboard' className={`navbar-link${location.pathname === '/dashboard' ? ' active' : ''}`}>Dashboard</Link></li>
      </ul>
      <button
        style={{
          marginLeft: 'auto',
          background: 'var(--color-panel)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          borderRadius: '2rem',
          padding: '0.5rem 1.2rem',
          boxShadow: '0 2px 8px var(--color-shadow)',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
