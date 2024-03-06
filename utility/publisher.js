// import React, { useEffect } from 'react';
// import OT from 'opentok/client';

// const Publisher = ({ sessionId, token, apiKey }) => {
//     useEffect(() => {
//         const session = OT.initSession(apiKey, sessionId);
//         session.connect(token, (error) => {
//             if (error) {
//                 console.error('Publisher initialization error:', error.message)
//                 return;
//             } 

//             const publisher = OT.initPublisher('publisher', {
//                 insertMode: 'append',
//                 width: '100%',
//                 height: '100%',
//             }, (error) => {
//                 if (error) {
//                     console.error('Publisher initialization error:', error.message)
//                 }
//             });

//             session.publish(publisher, (error) => {
//                 if (error) {
//                     console.error('Publishing error:', error.message)
//                 }
//             });
//         });

//         return () => {
//             session.disconnect();
//         };
//     }, [sessionId, token, apiKey]);

//     return <div id="publisher"></div>;
// };


// export default Publisher

