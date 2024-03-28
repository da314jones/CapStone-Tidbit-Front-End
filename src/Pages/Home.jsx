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
      <div className="home-container">
      <div className="carousel">
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy"
          alt="Image 1"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1616267626111-0c61eb1c3248?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy"
          alt="Image 2"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxjb250ZW50JTIwY3JlYXRvcnxlbnwwfHwwfHx8Mg%3D%3D"
          alt="Image 3"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1640622304931-7f9e856f787b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbnRlbnQlMjBjcmVhdG9yJTIwc2tpbGxzfGVufDB8fDB8fHwy"
          alt="Image 4"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1581094285214-779d97298443?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnRlbnQlMjBjcmVhdG9yJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDI%3D"
          alt="Image 5"
        />
      </div>

        <div>
          <h2 className="home-header-title">
            Where Those Who Know Go to<span> Grow</span>
          </h2>

          <p>
            Explore clear, concise insights across any subject—from tech to art,
            math to fashion. Our site demystifies complex concepts and abstract
            ideas, making them accessible to all. Dive into our straightforward
            guides and unlock understanding in areas where clarity meets
            simplicity.
          </p>
          <button className="start-learning-button">Start Learning</button>
        </div>
      </div>

      
      {/* <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy"
          alt="Image 1"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1616267626111-0c61eb1c3248?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy"
          alt="Image 2"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxjb250ZW50JTIwY3JlYXRvcnxlbnwwfHwwfHx8Mg%3D%3D"
          alt="Image 3"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1640622304931-7f9e856f787b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbnRlbnQlMjBjcmVhdG9yJTIwc2tpbGxzfGVufDB8fDB8fHwy"
          alt="Image 4"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://images.unsplash.com/photo-1581094285214-779d97298443?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnRlbnQlMjBjcmVhdG9yJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDI%3D"
          alt="Image 5"
        />
      </div> */}

      <div>
        <Footer />
      </div>
    </>
  );
}
