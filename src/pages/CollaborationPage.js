import React from "react";
import "../styles/CollaborationPage.css";

const CollaborationPage = () => {
  const participants = [
    { name: "Alex", progress: 50, role: "Designer", share: 30 },
    { name: "Michael", progress: 80, role: "Developer", share: 40 },
    { name: "Ivan", progress: 20, role: "Manager", share: 30 },
  ];

  return (
    <div className="collaboration-container">
      <div className="collaboration-sidebar">
        <h2>{/*Collaboration name*/}Lorem ipsum odor amet, consectetuer adipiscing elit.</h2>
        <h3>Participants:</h3>
        <ul>
          {participants.map((participant, index) => (
            <li key={index} className="participant">
              <p>Name: {participant.name}</p>
              <p>Progress: {participant.progress}%</p>
              <p>Role: {participant.role}</p>
              <p>Share: {participant.share}%</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="collaboration-details">
        <h3>Order text:</h3>
        <p>{/*Description for order*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Total:</h3>
        <p>{/* Order price */}100 000 $</p>
      </div>
    </div>
  );
};

export default CollaborationPage;