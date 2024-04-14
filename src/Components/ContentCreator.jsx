// ContentCreator.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Video from './Video';

export default function ContentCreator() {
  const { creatorId } = useParams();
  const { state: { videos } } = useLocation(); // Retrieve videos array from location state

  console.log(videos)

  const creatorVideos = videos.filter(video => video.creatorId === creatorId);

  return (
    <div>
      <div className="content-creator-container">
          {creatorVideos.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </div>
    </div>
  );
}
