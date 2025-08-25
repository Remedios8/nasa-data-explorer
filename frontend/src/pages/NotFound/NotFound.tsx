import React from 'react';
import Footer from '../../components/Footer/Footer';

const NotFound: React.FC = () => {
  return (
    <>
      <section>
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
