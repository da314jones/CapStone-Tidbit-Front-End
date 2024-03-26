import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./VideoNewform.css";

const API = import.meta.env.VITE_API_URL;

export default function VideoNewForm({ onClose, archiveId, onSubmitSuccess }) {
  const navigate = useNavigate();
  const [video, setVideo] = useState({
    title: "",
    summary: "",
    video_url: "",
    duration: 0,
    created_at: "",
  });

  console.log(archiveId);

  const user_id = sessionStorage.getItem("userUID");
  console.log(user_id);

  const addVideo = async () => {
    if (!user_id) {
      console.error("Firebase UID is not available.");
    }
    console.log("Submitting metaDataObject:", video);
    const metaDataObject = {
      user_id,
      ...video,
      archive_id: archiveId,
    };
    console.log("metaDataObject with archiveId:", metaDataObject);
    try {
      const response = await fetch(`${API}/videos/video-metadata`, {
        method: "POST",
        body: JSON.stringify(metaDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to add metaDataObject");
      }
      const data = await response.json();
      console.log("MetaDataObject added:", data);
      onClose();
      onSubmitSuccess();
    } catch (error) {
      console.error("Error submitting metaDataObject:", error);
    }
  };

  const handleTextChange = (event) => {
    setVideo({ ...video, [event.target.id]: event.target.value });
  };

  const isValidMetadata = (video) => {
    return (
      video.title.trim() !== "" &&
      video.summary.trim() !== "" &&
      video.video_url.trim() !== ""
    );
  };

  console.log(archiveId);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidMetadata(video)) {
      addVideo();
    } else {
      console.error("Invalid video metadata:", video);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <>
          <div className="container mx-auto mt-8">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto bg-pink-300 text-black p-2 rounded shadow-md"
            >
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                value={video.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter Title..."
                required
                className="form-input mb-4"
                style={{ width: "100%", marginBottom: "1rem" }}
              />

              <label htmlFor="summary">Summary:</label>
              <input
                id="summary"
                value={video.summary}
                type="text"
                onChange={handleTextChange}
                placeholder="Describe the video..."
                required
                className="form-input mb-4"
                style={{ width: "100%", marginBottom: "1rem" }}
              />

              <label htmlFor="video_url">Video URL:</label>
              <input
                id="video_url"
                value={video.video_url}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter video URL..."
                required
                className="form-input mb-4"
                style={{ width: "100%", marginBottom: "1rem" }}
              />

              <label htmlFor="duration">Duration:</label>
              <input
                id="duration"
                value={video.duration}
                type="number"
                onChange={handleTextChange}
                required
                className="form-input mb-4"
                style={{ width: "100%", marginBottom: "1rem" }}
              />

              <div>
                <button
                  type="submit"
                  className="bg-pink-300 text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-black active:bg-black-800"
                >
                  Add Video
                </button>
              </div>
            </form>
            <button onClick={onClose} className="close-button">
              Close Form
            </button>
          </div>
        </>
      </div>
    </div>
  );
}
