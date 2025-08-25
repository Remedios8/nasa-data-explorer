import React, { useState, useEffect, useRef } from 'react';

import DataDisplay from '../DataDisplay/DataDisplay';
import SkeletonCard from './SkeletonCard';
import Error from '../Error/Error';
import { fetchApodBatchWithCache } from '../../utils/apod';
import './ApodGallery.css';

const APOD_BATCH_SIZE = 12;

const ApodGallery: React.FC = () => {
  const [apodData, setApodData] = useState<any[]>([]);
  const [apodLoading, setApodLoading] = useState(false);
  const [apodError, setApodError] = useState<string | null>(null);
  const [apodBatchStart, setApodBatchStart] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setApodLoading(true);
    setApodError(null);
    fetchApodBatchWithCache(apodBatchStart, APOD_BATCH_SIZE)
      .then(batch => {
        setApodData(prev => [...prev, ...batch]);
      })
      .catch(err => {
        setApodError(err.message);
      })
      .finally(() => {
        setApodLoading(false);
      });
  }, [apodBatchStart]);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;
      const { bottom } = galleryRef.current.getBoundingClientRect();
      if (bottom < window.innerHeight + 200 && !apodLoading && !apodError) {
        setApodBatchStart(prev => prev + APOD_BATCH_SIZE);
      }
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [apodLoading, apodError]);

  return (
    <div ref={galleryRef} className="apod-gallery">
      {apodData.map((apod, idx) => (
        <div className='apod-item' key={idx}>
          <DataDisplay category="apod" data={apod} />
        </div>
      ))}
      {apodLoading && <><SkeletonCard /><SkeletonCard /></>}
      {apodError && <Error message={apodError} />}
      {showScrollTop && (
        <button
          className="apod-scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ApodGallery;
