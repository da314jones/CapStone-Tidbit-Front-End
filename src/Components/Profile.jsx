// Profile.jsx -
import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { AuthContext } from "../Providers/AuthProvider";

const API = import.meta.env.VITE_API_URL;

export default function Profile() {
  const user = useContext(AuthContext);
  const [more, setMore] = useState(false);
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
  console.log(myVideos);

  return (
    <>
      <div className="profile-page">
        <div className="profile-info">
          <div className="profile-picture">
            {user ? (
              <img src={user.photoURL} alt="Profile" />
            ) : (
              <img src="profile-picture.jpg" alt="Profile" />
            )}
          </div>
          <div className="text_profile-details">
            <div className="text profile-name">
              {user ? (
                <h4 className="mb-4">{user.displayName}</h4>
              ) : user === null ? (
                <h1>Loading while you are signed in...</h1>
              ) : (
                <h1>Please sign in</h1>
              )}
            </div>
            <h4 className="text mb-4">Skills:</h4>
            <h4 className="text mb-4">Interests:</h4>
            <button className="editbutton">Edit Profile</button>
          </div>
        </div>
        <h2 className="text uploaded">Uploaded Tidbits</h2>
        <div className="profile-container">
          <div className="main-content">
            <div className="tidbits">
              {user ? (
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {[...Array(24)].map((_, index) => {
                    if (index <= 7) {
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-lg overflow-hidden shadow-lg"
                        >
                          <video width="300" controls>
                            <source src="dummy_video.mp4" type="video/mp4" />
                            Your Browser does not support the video tag.
                          </video>
                          <div className="p-4">
                            <div className="text-lg font-semibold mb-2">
                              Dummy Video Title
                            </div>
                            <div className="text-sm text-gray-600">
                              Dummy Video Creator
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <h1 className="text-lg font-semibold mb-2">
                  Login to see your videos
                </h1>
              )}
            </div>
          </div>
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
      </div>
    </>
  );
}
