// import React, { useState, useEffect } from 'react';

// const VideoComponent = ({ apiKey, sessionId, token }) => {
//   const [otSdkReady, setOtSdkReady] = useState(false);
//   const [sessionStarted, setSessionStarted] = useState(false);

//   // Dynamically load the OpenTok SDK
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://static.opentok.com/v2/js/opentok.min.js';
//     script.async = true;
//     script.onload = () => setOtSdkReady(true);
//     document.head.appendChild(script);

//     // Cleanup the script when the component unmounts
//     return () => document.head.removeChild(script);
//   }, []);

//   const startSession = () => {
//     if (otSdkReady && !sessionStarted && window.OT) {
//       const session = window.OT.initSession(apiKey, sessionId);
//       const publisher = window.OT.initPublisher('publisher', {
//         insertMode: 'append',
//         width: '100%',
//         height: '100%',
//       });

//       session.connect(token, (error) => {
//         if (error) {
//           console.error('Error connecting to session:', error);
//         } else {
//           session.publish(publisher, (publishError) => {
//             if (publishError) {
//               console.error('Error publishing:', publishError);
//             } else {
//               setSessionStarted(true); // Update state to reflect that the session has started
//             }
//           });
//         }
//       });
//     }
//   };

//   return (
//     <div>
//       <div id="publisher"></div>
//       {otSdkReady && !sessionStarted ? (
//         <button onClick={startSession}>Start Session</button>
//       ) : (
//         <p>Loading...</p>
//       )}
//       return (
//   <div>
//     {/* Your OTSession and OTPublisher components */}
//     <button onClick={startRecording}>Start Recording</button>
//     <button onClick={stopRecording}>Stop Recording</button>
//   </div>
// );

//     </div>
//   );
// };

// export default VideoComponent;
