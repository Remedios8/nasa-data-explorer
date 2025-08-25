import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import ApodGallery from '../../components/ApodGallery/ApodGallery';
import Overview from '../../components/Overview/Overview';
import './Explorer.css';

interface ExplorerProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Explorer: React.FC<ExplorerProps> = ({ theme, setTheme }) => {
  const [category, setCategory] = useState('overview');

  return (
    <>
        <div className="explorer-root">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="explorer-main">
                <Sidebar category={category} onCategoryChange={setCategory} />
                <section className="explorer-section">
                {category === 'overview' ? (
                  <Overview />
                ) : category === 'apod' ? (
                  <ApodGallery />
                ) : (
                  <p>No data yet.</p>
                )}
                </section>
            </div>
        </div>
    </>
  );
};

export default Explorer;
