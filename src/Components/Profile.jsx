// Profile.jsx -
import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { AuthContext } from "../Providers/AuthProvider";

const API = import.meta.env.VITE_API_URL;

export default function Profile() {
  const user = useContext(AuthContext);
  const [myVideos, setMyVideos] = useState([]);
  console.log(user)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API}/s3/list`);
        const data = await response.json();
        setMyVideos(data.videoWithSignedUrls || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="profile-container">
      <div className="main-content">
        <div className="top-section">
          <div className="logo">
            <img src="logo-image.jpg" alt="Your Logo" />
          </div>
          <div className="profile-info">
            <div className="profile-picture">
              {user ? <img src={user.photoURL} alt="Profile" /> : <img src="profile-picture.jpg" alt="Profile" /> }
            </div>
            <div className="profile-name">Your Name</div>
          </div>
        </div>
        <div className="profile-details">
          <div>Location:</div>
          <div>Skills:</div>
          <div>Interests:</div>
          <button>Edit Profile</button>
        </div>
        <div className="tidbits">
          <h2>Your Uploaded Tidbits</h2>
          {user ? (user.uid === myVideos.user_id ? (
  myVideos.map((video, index) => (
    <div key={index} className="video-card">
      <video width="1280" height="720" controls>
        <source src={video.signedUrl} type="video/mp4" />
        Your Browser does not support the video tag.
      </video>
      <div className="video-info"></div>
      <div className="video-title"></div>
      <div className="video-creator"></div>
    </div>
  ))
) : ( 
  <div> 
    <h1>You don't have any videos uploaded</h1>
  </div>
)) : (
  <h1>Login to see your videos</h1>
)}
        </div>
        <div className="tidbits">
          <h2>Saved Tidbits</h2>
          {/* Video cards */}
        </div>
      </div>
      <div className="message-button">Message</div>
    </div>
  );
}
