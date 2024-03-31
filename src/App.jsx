import React, { useState } from "react";
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
import SideBar from "./Components/SideBar"
// import QuestionnaireModal from "./Components/QuestionnaireModal";
Dashboard;

function App() {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  // Handler for when the questionnaire is submitted
  const handleQuestionnaireSubmit = (selectedInterests) => {
    console.log("Selected interests:", selectedInterests);
    // Process the selected interests here, e.g., send them to an API or update your state
  };

  // Handler to open the modal
  const openQuestionnaireModal = () => {
    setIsQuestionnaireOpen(true);
  };

  // Handler to close the modal
  const closeQuestionnaireModal = () => {
    setIsQuestionnaireOpen(false);
  };

  
  return (
    <AuthProvider>
      <div className="App">
      {/* <QuestionnaireModal
          isOpen={isQuestionnaireOpen}
          onClose={closeQuestionnaireModal}
          onSubmit={handleQuestionnaireSubmit}
        /> */}
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
        {/* <button onClick={openQuestionnaireModal}>Open Questionnaire</button> */}
      </div>
    </AuthProvider>
  );
}

export default App;
