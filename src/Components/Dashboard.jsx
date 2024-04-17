import React, { useEffect, useState } from "react";
import Video from "./Video";
import Modal from './Modal';
import "./Dashboard.css";

const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    fetch(`${API}/videos/index-thumbnails`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.processedData);
        setThumbnails(data.processedData);
        console.log(thumbnails)
        // setVideos(data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleSelectVideo = async (video) => {
    console.log(videos.s3_key)
    const url = `${API}/generate-signed-url/${encodeURIComponent(videos.s3_key)}`;
    console.log('Requesting signed URL from:', url)
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setSelectedVideo({ ...videos, videoSrc: videos.signedVideoUrl });
        setIsModalOpen(true);
        console.log(data.response)
      } else {
        throw new Error(data.message || 'Failed to fetch videoURL');
      }
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }
  return (
    <div className="main-container">
       <div className="videoList-container">
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className="video-card">
            <img src={thumbnail.thumbnailUrl} alt={thumbnail.title} className="thumbnail" loading="lazy" />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Video videoSrc={selectedVideo.videoSrc} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}

