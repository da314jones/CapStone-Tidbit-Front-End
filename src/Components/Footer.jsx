import React, { useState, useEffect }from 'react'

export default function Footer() {
  const [videoSamples, setVideosSamples] = useState([]);


  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch(`${API}/s3/list`);
  //       const data = await response.json();
  //       console.log("Fetched videos:", data);
  //       setVideos(data.videoWithSignedUrls || []);
  //     } catch (error) {
  //       console.error("Error fetching videos:", error);
  //     }
  //   };
  //   fetchVideos();
  // }, []);

  return (
    <div>
      <video src=""></video>
      <video src=""></video>
      <video src=""></video>
    </div>
  )
}

// code below is same as will be needed to render sample videos to footer  
// only needs 3 limit logic or add to carousel
// return (
//     <div className="main-container">
//       {videos.map((video, index) => (
//         <div key={index} className="video-card">
//           <video width="1280" height="720" controls>
//             <source src={video.signedUrl} type="video/mp4" />
//             Your Browser does not support the video tag.
//           </video>
//           <div className="video-info"></div>
//           <div className="video-title"></div>
//           <div className="video-creator"></div>
//         </div>
//       ))}
//     </div>
//   );
// }
