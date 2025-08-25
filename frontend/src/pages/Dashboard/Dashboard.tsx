import React from 'react';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Dashboard.css';

interface DashboardProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ theme, setTheme }) => {
  const summary = [
    { title: 'APOD Images', value: 120 },
    { title: 'Mars Photos', value: 45 },
    { title: 'Asteroids Tracked', value: 300 },
    { title: 'Earth Images', value: 18 },
  ];
    return (
      <div className="dashboard-page">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="dashboard-container">
          <h2 className="dashboard-header">Dashboard</h2>
          <div className="dashboard-cards">
            {summary.map((item, idx) => (
              <div className="dashboard-card" key={idx}>
                <div className="dashboard-card-title">{item.title}</div>
                <div className="dashboard-card-value">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="dashboard-charts">
            <div className="dashboard-chart">
              <div className="dashboard-chart-placeholder">[Chart Placeholder]</div>
            </div>
            <div className="dashboard-chart">
              <div className="dashboard-chart-placeholder">[Chart Placeholder]</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Dashboard;
