import React, { useState } from 'react';

import './DataDisplay.css';

interface DataDisplayProps {
  category: string;
  data: any;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ category, data }) => {
  if (!data) return <div className="datadisplay-empty">No data to display.</div>;

  const [showModal, setShowModal] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  switch (category) {
    case 'apod':
      return (
        <div className="datadisplay">
          <div className="datadisplay-apod-desc">
            <span className="datadisplay-apod-date">{data.date}</span>
            <h2 className="datadisplay-apod-title">{data.title}</h2>
          </div>
          <div
            className="datadisplay-apod"
            style={{
              position: 'relative',
              backgroundImage: `url(${data.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.4)',
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
              {!imgLoaded && (
                data.url ? (
                  <div className="datadisplay-apod-img-skeleton">
                    <div className="skeleton-loader" />
                  </div>
                ) : (
                  <div className="datadisplay-apod-img-empty">No image</div>
                )
              )}
              <img
                src={data.url}
                alt={data.title}
                className="datadisplay-apod-img"
                onClick={handleImgClick}
                title="Click to enlarge"
                style={imgLoaded ? {} : { display: 'none' }}
                onLoad={() => setImgLoaded(true)}
              />
              <div className="datadisplay-apod-info">
                <p className="datadisplay-apod-explanation">{data.explanation}</p>
                {data.copyright && (
                  <p className="datadisplay-apod-copyright">© {data.copyright}</p>
                )}
              </div>
            </div>
          </div>
          {showModal && (
            <div className="datadisplay-apod-modal" onClick={handleModalClose}>
              <div className="datadisplay-apod-modal-content">
                <img src={data.url} alt={data.title} />
              </div>
            </div>
          )}
        </div>
      );
    case 'mars':
      return (
        <div className="datadisplay-mars">
          {/* Display Mars Rover photos as a gallery */}
          {Array.isArray(data.photos) ? (
            <div className="datadisplay-mars-gallery">
              {data.photos.map((photo: any) => (
                <img key={photo.id} src={photo.img_src} alt={photo.earth_date} className="datadisplay-mars-img" />
              ))}
            </div>
          ) : 'No photos found.'}
        </div>
      );
    case 'asteroids':
      return (
        <table className="datadisplay-asteroids">
          <thead>
            <tr>
              <th>Name</th>
              <th>Diameter</th>
              <th>Close Approach</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data.near_earth_objects) ? (
              data.near_earth_objects.map((asteroid: any) => (
                <tr key={asteroid.id}>
                  <td>{asteroid.name}</td>
                  <td>{asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</td>
                  <td>{asteroid.close_approach_data[0]?.close_approach_date}</td>
                </tr>
              ))
            ) : null}
          </tbody>
        </table>
      );
    case 'earth':
      return (
        <div className="datadisplay-earth">
          {/* Display Earth imagery as images or map previews */}
          {Array.isArray(data.images) ? (
            <div className="datadisplay-earth-gallery">
              {data.images.map((img: any, idx: number) => (
                <img key={idx} src={img.url} alt={img.caption} className="datadisplay-earth-img" />
              ))}
            </div>
          ) : 'No images found.'}
        </div>
      );
    default:
      return <div className="datadisplay-empty">Select a category to view data.</div>;
  }
};

export default DataDisplay;
