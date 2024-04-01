import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
   <div className="home-container flex items-center justify-center mt-50">
  <div className="carousel">
    <div className="image-container-left"> 
      <img className="image-one" src="https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
    </div>
    <div className="image-container-right"> 
    <img className="image-two" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 2" />
      <img className="image-three" src="https://images.unsplash.com/photo-1640622304931-7f9e856f787b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbnRlbnQlMjBjcmVhdG9yJTIwc2tpbGxzfGVufDB8fDB8fHwy" alt="Image 3" />
      <img className="image-four" src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxjb250ZW50JTIwY3JlYXRvcnxlbnwwfHwwfHx8Mg%3D%3D" alt="Image 4" />
      <img className="image-five" src="https://images.unsplash.com/photo-1581094285214-779d97298443?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnRlbnQlMjBjcmVhdG9yJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDI%3D" alt="Image 5" />
    </div>
  </div>
<div className="video-container">  
<div className="video-one">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WfOiSxLZEfk?si=aQBwjDQ4DGuOpQ09" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
</div>
  <div className="title-container">
    <h2 className="home-header-title">
      Where Those Who <br></br> Know Go to<span> Grow</span>
    </h2>
  </div>
  <div className="text-container">
    <div>
    "Welcome to our cutting-edge platform, where sharing bite-sized pieces of information is as easy as a click. Nourish your minds with unlimited knowledge at your fingertips. Our app empowers you to discover, share, and explore the world's wisdom effortlessly. Join us on this transformative journey, where curiosity knows no bounds and knowledge is just a tap away."
      {/* Welcome to our dynamic platform from technology to art, mathematics to fashion, we are the ultimate destination for discovering and sharing insightful treasures. Our mission is clear through straightforward guides and interactive features, we ignite curiosity and inspire discovery. Join us on this exciting journey where clarity meets simplicity. Together, let's reshape the way the world learns and shares knowledge. */}
    </div>
  </div>
  <button className="start-learning-button">Start Learning</button>
</div>
<div>
   <Footer />
      </div>
    </>
  );
}
