// Profile.jsx -
import React from "react";
import Video from "./Video";
import "./ContentCreator";

export default function ContentCreator() {

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="sidebar-icon">Broadcast</div>
        <div className="sidebar-icon">Index</div>
        <div className="sidebar-icon">Settings</div>
      </div>
      <div className="main-content">
        <div className="top-section">
          <div className="profile-info">
            <div className="profile-picture">
              <img src="profile-picture.jpg" alt="Profile" />
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
        <div className="content-creator-container">
          {creatorVideos.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </div>
      </div>
      <div className="message-button">Message</div>
    </div>
  );
}
