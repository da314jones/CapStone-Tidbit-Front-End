import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./Providers/AuthProvider";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import VideoSession from "./Components/VideoSession";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/Sidebar";
Dashboard;

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <NavBar />
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/session" element={<VideoSession />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/videos/:id" element={<Show />} />
            <Route path="/videos/edit" element={<Edit />} />
            <Route path="/videos/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
