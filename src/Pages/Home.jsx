import React from 'react';
import './Home.css';
import guitar from '../images/guitar.jpeg';
import Tidbit from '../images/Tidbit.png';

export default function Home() {
  return (
    <div className="home-container">
      <img src={Tidbit} alt="Tidbit Logo" className="tidbit-logo" />
      <div className="image-container">
        <img src={guitar} alt="guitar" className="image" />
      </div>
      <div>
      <h2 className="home-header-title"> Where Those Who Know</h2>
      <h2 lassName="home-header-subtitle">Go to Grow</h2>
      <p>Explore clear, concise insights across any subject—from tech to art, math to fashion. Our site demystifies complex concepts and abstract ideas, making them accessible to all. Dive into our straightforward guides and unlock understanding in areas where clarity meets simplicity.</p>
      <button className="start-learning-button">Start Learning</button>
    </div>
    </div>
  )
}

