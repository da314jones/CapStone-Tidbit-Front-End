// Profile.jsx -
import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { AuthContext } from "../Providers/AuthProvider";

const API = import.meta.env.VITE_API_URL;

export default function Profile() {
  const user = useContext(AuthContext);
  const [myVideos, setMyVideos] = useState([]);
  console.log(user);

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
  <div className="profile-info">
    <div className="profile-picture">
      {user ? (
        <img src={user.photoURL} alt="Profile" />
      ) : (
        <img src="profile-picture.jpg" alt="Profile" />
      )}
    </div>
    <div className="text_profile-details">
    <div className="text profile-name">{user ? (
    <h4>{user.displayName}</h4>
  ) : (
    user === null ? (
      <h1>Loading while you are signed in...</h1>
    ) : (
      <h1>Please sign in</h1>
    )
  )}</div>
      {/* <div className="text">Location:</div> */}
      <h4 className="text">Skills:</h4>
      <h4 className="text">Interests:</h4>
      <button className="editbutton">Edit Profile</button>
    </div>
  </div>
  <div className="main-content">
    <div className="tidbits">
      <h2 className="text">Your Uploaded Tidbits</h2>
      {user ? (
        <div className="videos-grid">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="profile-video-card">
              <video width="280" height="120" controls>
                <source src="dummy_video.mp4" type="video/mp4" />
                Your Browser does not support the video tag.
              </video>
              <div className="text video-info"></div>
              <div className="text video-title">Dummy Video Title</div>
              <div className="text video-creator">Dummy Video Creator</div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Login to see your videos</h1>
      )}
  {/* <div className="tidbits">
    <h2>Your Uploaded Tidbits</h2>
    {user ? (
      user.uid === myVideos.user_id ? (
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
      )
    ) : (
      <h1>Login to see your videos</h1>
    )}
  </div> */}
    </div>
    {/* <div className="message-button">Message</div> */}
  </div>
</div>

  );
}

