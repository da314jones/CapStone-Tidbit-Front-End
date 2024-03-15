import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoSession from "./VideoSession";
import "./Dashboard.css";
const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API}/s3/list`);
        const data = await response.json();
        console.log("Fetched videos:", data);
        setVideos(data.videoWithSignedUrls || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="main-container">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <video width="1280" height="720" controls>
            <source src={video.signedUrl} type="video/mp4" />
            Your Browser does not support the video tag.
          </video>
          <div className="video-info"></div>
          <div className="video-title"></div>
          <div className="video-creator"></div>
        </div>
      ))}
    </div>
  );
}
