import React, { useEffect, useState } from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import './VideoSession.css'
const aprUrl = import.meta.env.VITE_VONAGE_API_KEY
const API = import.meta.env.VITE_API_URL


export default function VideoSession() {
  const [sessionId, setSessionId] = useState('');
  const [token, setToken] = useState('');
  const [isOTScriptLoaded, setOTScriptLoaded] = useState(false);
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.opentok.com/v2/js/opentok.min.js';
    script.async = true;
    script.onload = () => {
      // Library loaded successfully, initialize session or set state accordingly
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  

  useEffect(() => {
    if (isOTScriptLoaded) {
      fetchSessionIdAndToken();
    }
  }, [isOTScriptLoaded]);

    useEffect(() => {
    fetchSessionIdAndToken();
  }, []);

  const fetchSessionIdAndToken = async () => {
    try {
      // Fetch session ID
      const sessionResponse = await fetch(`${API}/api/videos/session`, { // Ensure the URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!sessionResponse.ok) {
        throw new Error('Failed to fetch session');
      }
  
      const sessionData = await sessionResponse.json();
      console.log('Received session data:', sessionData);
  
      // Fetch token using the fetched session ID
      const tokenResponse = await fetch(`${API}/api/videos/token/${sessionData.sessionId}`, { // Corrected to use sessionData.sessionId
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!tokenResponse.ok) {
        throw new Error('Failed to fetch token');
      }
  
      const tokenData = await tokenResponse.json();
      console.log('Received token data:', tokenData);
  
      // Update state with the fetched session ID and token
      setSessionId(sessionData.sessionId);
      setToken(tokenData.token);
    } catch (error) {
      console.error("Error fetching session ID and token:", error);
    }
  };

  return (
    <div className="video-container">
      {sessionId && token && (
        <OTSession aprUrl={aprUrl} sessionId={sessionId} token={token} >
          <div className="OTPublisher">
            <OTPublisher onError={error => console.log('Publisher Error:', error)} onStreamCreated={e => console.log('Publisher Stream Created:', e)} />
          </div>
          <br />
          <OTStreams>
            <div className="OTSubscriber">
              <OTSubscriber onError={error => console.log('Subscriber Error:', error)} onStreamCreated={e => console.log('Subscriber Stream Created:', e)} />
            </div>
          </OTStreams>
        </OTSession>
      )}
      <br />
      <button type="button" className="btn btn-primary btn-lg">button</button>
    </div>
  );
  
}

