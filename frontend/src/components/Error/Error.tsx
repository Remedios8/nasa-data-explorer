import React from 'react';

import './Error.css';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className="error">
    <strong>Error:</strong> {message}
  </div>
);

export default Error;
