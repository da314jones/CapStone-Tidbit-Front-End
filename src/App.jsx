import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './Components/ThemeContext';
import ThemeToggleButton from './Components/ThemeToggleButton';
import './App.css'

import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import VideoSession from "./Components/VideoSession";

function App() {
  

  return (
    <>
    <ThemeProvider> 
      <div className="App">
        <ThemeToggleButton />
        <Router>
          <Routes>
          <Route path="/video-session" element={<VideoSession />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/videos" element={<Index />} /> */}
            <Route path="/videos/:id" element={<Show />} />
            <Route path="/videos/edit" element={<Edit />} />
            <Route path="/videos/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;