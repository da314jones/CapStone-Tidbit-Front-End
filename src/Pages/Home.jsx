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
    <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')
</style>
   <div className="home-container flex items-center justify-center mt-50">
  <div className="carousel">
    <div className="image-container"> 
      <img className="image-one" src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 1" />
      <img className="image-two" src="https://images.unsplash.com/photo-1616267626111-0c61eb1c3248?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy" alt="Image 2" />
      <img className="image-three" src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxjb250ZW50JTIwY3JlYXRvcnxlbnwwfHwwfHx8Mg%3D%3D" alt="Image 3" />
      <img className="image-four" src="https://images.unsplash.com/photo-1640622304931-7f9e856f787b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbnRlbnQlMjBjcmVhdG9yJTIwc2tpbGxzfGVufDB8fDB8fHwy" alt="Image 4" />
      <img className="image-five" src="https://images.unsplash.com/photo-1581094285214-779d97298443?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnRlbnQlMjBjcmVhdG9yJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDI%3D" alt="Image 5" />
      <img className="image-six" src="https://images.unsplash.com/photo-1606787503066-794bb59c64bc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 6" />
    </div>
  </div>

  <div>
    <h2 className="home-header-title">
      Where Those Who Know Go to<span> Grow</span>
    </h2>
    <p>
    Welcome to our dynamic platform from technology to art, mathematics to fashion, we are the ultimate destination for discovering and sharing insightful treasures. Our mission is clear through straightforward guides and interactive features, we ignite curiosity and inspire discovery. Join us on this exciting journey where clarity meets simplicity. Together, let's reshape the way the world learns and shares knowledge.
    </p>
    <button className="start-learning-button">Start Learning</button>
  </div>
</div>

      <div>
        <Footer />
      </div>
    </>
  );
}
