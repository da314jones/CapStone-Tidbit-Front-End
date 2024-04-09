import React from "react";
import "./Home.css";
import Footer from "../Components/Footer";

export default function Home() {
  return (
   <div className="home-container flex items-center justify-center mt-50 p-8">
  {/* <div className="carousel">
    <div className="image-container-left"> 
      <img className="image-one" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 1" />
      <img className="image-two" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 2" />
      <img className="image-three" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 3" />
      <img className="image-four" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 4" />
      <img className="image-five" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 5" />
      <img className="image-six" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 6" />
    </div>
    <div className="image-container-right"> 
    <img className="image-seven" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 7" />
      <img className="image-eight" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 8" />
      <img className="image-nine" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 9" />
      <img className="image-ten" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 10" />
      <img className="image-eleven" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 11" />
      <img className="image-twelve" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 12" />
    </div>
  </div> */}

  <div className="tidbit-container">
  <h2 className="tidbit-video-header p-7">Tidbit of the Day!🎉</h2>
     </div> 
<div>  
<div>
<div className="tidbit-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WfOiSxLZEfk?si=aQBwjDQ4DGuOpQ09" title="YouTube video player"></iframe></div> 
 </div> 
  <div className="title-container">
    <h2 className="home-header-title">
      Where Those Who <br></br> Know Go to<span> Grow</span>
    </h2>
  </div>
  <div className="text-container">
    <div className="text-intro">
    "Welcome to our cutting-edge platform, where sharing bite-sized pieces of information is as easy as a click. Nourish your minds with unlimited knowledge at your fingertips. Our app empowers you to discover, share, and explore the world's wisdom effortlessly. Join us on this transformative journey, where curiosity knows no bounds and knowledge is just a tap away."
    </div>
  </div>
  <button className="start-learning-button">Start Learning</button>
</div>
<div>
   <Footer />
      </div>
      </div>
  
  
  );
}