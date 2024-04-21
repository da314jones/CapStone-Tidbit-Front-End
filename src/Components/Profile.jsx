import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { AuthContext } from "../Providers/AuthProvider";

const API = import.meta.env.VITE_API_URL;

export default function Profile() {
  const user = useContext(AuthContext);
  const [userThumbnails, setUserThumbnails] = useState([]);
  const [myVideos, setMyVideos] = useState([]);

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

  useEffect(() => {
    fetch(`${API}/videos/index-thumbnails`)
      .then((response) => response.json())
      .then((data) => {
        setUserThumbnails(data.thumbnailImage);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
          {/* Profile Details */}
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

        {/* Uploaded Tidbits Section */}
        <h2 className="text uploaded">Uploaded Tidbits</h2>
        <div className="profile-container">
          <div className="main-content">
            <div className="tidbits">
              {/* <h2 className="text-lg font-semibold mb-2">
                Your Uploaded Tidbits
              </h2> */}
              {user ? (
                myVideos.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {myVideos
                      .filter((video) => video.user_id === user.uid)
                      .map((video, index) => {
                        const matchingThumbnail = userThumbnails.find(
                          (thumbnail) => thumbnail.thumbnail_key === video.thumbnail_key
                        );

                        if (index % 2 === 0 && matchingThumbnail) {
                          return (
                            <div
                              key={index}
                              className="bg-white rounded-lg overflow-hidden shadow-lg"
                            >
                              {/* <img
                                src={matchingThumbnail.thumbnailUrl}
                                alt="Video Thumbnail"
                                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                              /> */}

                              <video
                                width="300"
                                min-height="200"
                                controls poster={matchingThumbnail.thumbnailUrl}
                                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                              >
                                <source
                                  src={video.signedUrl}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                              <div className="p-4">
                                <div className="text-lg font-semibold mb-2">
                                  <p className="text">{video.title}</p>
                                </div>
                                <div className="text-sm text-gray-600">
                                  {video.summary}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </div>
                ) : (
                  <div className="no_uploads">
                  <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" />
                  <h2
                  // className="text-lg font-semibold mb-2"
                  >
                    You don't have any videos uploaded
                  </h2>
                </div>
                )
              ) : (
               
                  <h1>Login to see your videos</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
