import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/Home';
import Explorer from './pages/Explorer/Explorer';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import { useAppContext } from './context/AppContext';

const AppRoutes: React.FC = () => {
  const { theme, setTheme } = useAppContext() ?? { theme: 'light', setTheme: () => {} };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path='/explorer' element={<Explorer theme={theme} setTheme={setTheme} />} />
        <Route path='/dashboard' element={<Dashboard theme={theme} setTheme={setTheme} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
