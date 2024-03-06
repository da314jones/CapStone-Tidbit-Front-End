// import React, { useEffect } from 'react';
// import OT from '@opentok/client';

// const Subscriber = ({ sessionId, token, apiKey }) => {
//   useEffect(() => {
//     const session = OT.initSession(apiKey, sessionId);

//     session.connect(token, (error) => {
//       if (error) {
//         console.error('Connection error:', error.message);
//         return;
//       }

//       session.on('streamCreated', (event) => {
//         session.subscribe(event.stream, 'subscriber', {
//           insertMode: 'append',
//           width: '100%',
//           height: '100%',
//         }, (error) => {
//           if (error) {
//             console.error('Subscription error:', error.message);
//           }
//         });
//       });
//     });
//   }, [sessionId, token, apiKey]);

//   return <div id="subscriber"></div>;
// };

// export default Subscriber;
