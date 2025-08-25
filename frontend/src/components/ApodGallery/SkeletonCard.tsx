import React from 'react';

import './SkeletonCard.css';

const SkeletonCard: React.FC = () => (
  <div className="apod-item-skeleton">
    <div className="apod-skeleton-img" />
    <div className="apod-skeleton-text" />
  </div>
);

export default SkeletonCard;
