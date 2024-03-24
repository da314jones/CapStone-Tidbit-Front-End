import React from "react";
import { Link } from "react-router-dom";

export default function Video({ video }) {
  console.log(video.creatorId); // Add this inside your component to check the ID


  return (
    <div className="video-card">
      <video width="125">
        <source src={video.signedUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <h3>{video.title}</h3>
        <h5>{video.category}</h5>
      </div>
      <Link to={`/creator/${video.creatorId}`}>View Details</Link>
      {/* <Link to={`/videos/${video.id}`}>View Details</Link> */}
    </div>
  );
};
