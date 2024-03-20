import React, { useState } from "react";
import BaseModal from "./BaseModal";
import './Questionnaire.css'

const interests = [
  "Wood Work",
  "Gardening",
  "Tech",
  "Pastries",
  "Fried Cooking",
  "Latin Dance",
  "Hunting",
  "Literature",
  "Painting",
  "Gaming",
  "Astrology",
  "Economics",
  "Photography",
  "Traveling",
  "Music",
  "Dancing",
  "Programming",
  "Cycling",
  "Hiking",
  "Yoga",
  "Baking",
  "Drawing",
  "Fishing",
  "Knitting",
  "Running",
  "Volunteering",
  "Meditation",
  "Blogging",
  "Chess",
  "Bird Watching",
  "Origami",
  "Magic",
  "Pottery",
  "Archery",
  "Brewing",
  "Rock Climbing",
  "Surfing"
];


export default function QuestionnaireModal({ isOpen, onClose, onSubmit }) {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleSelectedInterest = (interest) => {
    if (selectedInterests.includes(prevSelected)) {
      return prevSelected.filter((i) => i !== interest);
    } else {
      return prevSelected.length < 3 ? [...prevSelected, interest] : prevSelected;
      }
    }

    const toggleInterest = (interest) => {
      setSelectedInterests((prevSelected) => {
        if (prevSelected.includes(interest)) {
          return prevSelected.filter((item) => item !== interest);
        } else {
          return prevSelected.length < 3 ? [...prevSelected, interest] : prevSelected;
        }
      });
    };

  const isInterestedChecked = (interest) => {
    return selectedInterests.includes(interest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedInterests);
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="questionnaire-container">
      <h2>Select Your Interests</h2>
      <form onSubmit={handleSubmit}>

      <div className="interest-grid">
        {interests.map((interest) => (
          <label key={interest} className="interest-label">
            <input
              type="checkbox"
              name='interests'
              value={interest}
              checked={isInterestedChecked(interest)}
              onChange={() => toggleInterest(interest)}
              className="interest-checkbox"
              />
            {interest}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit} className="continue-button">
        Continue
      </button>
        </form>
        </div>
    </BaseModal>
  );
}
