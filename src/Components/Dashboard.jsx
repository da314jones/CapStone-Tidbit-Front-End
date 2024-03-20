import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "./Video";
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
    <div className="buttons-container">
      <button>Date</button>
      <button>View Count</button>
    </div>
    <div className="videoList-container">
      {videos.map((video, index) => (
        <Video key={index} video={video} />
        ))}
        </div>
    </div>
  );
}
