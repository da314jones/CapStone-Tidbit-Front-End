import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSortVideos = async () => {
      try {
        const response = await fetch(`${API}/s3/list`);
        const data = await response.json();
        const userVideos = data.videoWithSignedUrls
          .filter((video) => video.Key.startsWith('users/'))
          .map((video) => ({
            ...video,
            creatorId: video.Key.split('/')[1],
          }));
        const miscVideos = data.videoWithSignedUrls.filter(
          (video) => !video.Key.startsWith('users/')
        );

        userVideos.sort((a, b) => a.creatorId.localeCompare(b.creatorId));
        setVideos([...userVideos, ...miscVideos]);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchAndSortVideos();
  }, []);

  const handleCreatorClick = (creatorId) => {
    navigate(`/creator/${creatorId}`);
  };

  return (
    <div className="main-container">
      <div className="buttons-container">
        {/* Sorting buttons to be implemented */}
        <button>Date</button>
        <button>View Count</button>
      </div>
      <div className="videoList-container">
        {videos.map((video) => (
          <div key={video.Key} onClick={() => handleCreatorClick(video.creatorId)}>
            <Video video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}
