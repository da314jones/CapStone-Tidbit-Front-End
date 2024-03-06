import React, { useEffect, useState } from "react";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";

const apiKey = import.meta.env.VITE_VONAGE_API_KEY;
const API = import.meta.env.VITE_API_URL;

export default function VideoSession() {
  const [sessionId, setSessionId] = useState("");
  const [token, setToken] = useState("");
  const [otSdkReady, setOtSdkReady] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [archiveId, setArchiveId] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Load the OpenTok SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.opentok.com/v2/js/opentok.min.js";
    script.async = true;
    script.onload = () => setOtSdkReady(true);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  // Fetch session ID and token
  useEffect(() => {
    async function fetchSessionIdAndToken() {
      try {
        const sessionResponse = await fetch(`${API}/videos/session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mediaMode: "routed",
          }),
        });
        if (!sessionResponse.ok) throw new Error("Failed to fetch session");
        const sessionData = await sessionResponse.json();

        const tokenResponse = await fetch(
          `${API}/videos/token/${sessionData.sessionId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!tokenResponse.ok) throw new Error("Failed to fetch token");
        const tokenData = await tokenResponse.json();

        setSessionId(sessionData.sessionId);
        setToken(tokenData.token);
      } catch (error) {
        console.error("Error fetching session ID and token:", error);
      }
    }
    fetchSessionIdAndToken();
  }, []);

  const startRecording = async () => {
    try {
      const response = await fetch(`${API}/videos/start-recording`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      if (!response.ok) throw new Error("Failed to start recording");
      const data = await response.json();
      console.log("Recording started:", data);
      setIsRecording(true);
      setArchiveId(data.archiveId);
    } catch (error) {
      console.log("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      const response = await fetch(`${API}/videos/stop-recording`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ archiveId }),
      });
      if (response.ok) throw new Error("Failed to stop recording");
      const data = await response.json();
      console.log("Recording stopped:", data);
      setIsRecording(false);
      setArchiveId("");
    } catch (error) {
      console.error("Error stooping recording:", error);
    }
  };

  if (!sessionId || !token || !otSdkReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-container">
      <OTSession
        apiKey={apiKey}
        sessionId={sessionId}
        token={token}
        onError={(error) => console.error(error)}
      >
        <OTPublisher publishVideo={cameraEnabled} />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
      {isRecording && <button onClick={startRecording}>Start Recording</button>}
      {isRecording && (
        <button onClick={() => setCameraEnabled(true)}>Start Camera</button>
      )}
      <button onClick={() => setCameraEnabled(false)}>Stop Camera</button>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
}
