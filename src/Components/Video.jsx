import React from 'react';

export default function Video({ videoSrc, onClose }) {
  return (
    <div className="video-modal">
      <video controls autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
