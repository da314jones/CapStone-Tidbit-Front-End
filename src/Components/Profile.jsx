// Profile.jsx -
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { signInWithGoogle, signOut } from "../Services/firebase";


import "./Profile.css";

export default function Profile() {
  const user = useContext(AuthContext);
console.log(user)

  return (
    <div className="profile-container">
      <div className="main-content">
        <div className="top-section">

          <div className="profile-info">
            <div className="profile-picture">
              <img src={user.photoURL} alt="Profile" />
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
          {/* Video cards */}
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
