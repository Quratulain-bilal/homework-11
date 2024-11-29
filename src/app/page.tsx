"use client"
import React, { useState } from "react";
import ProfileCard from "./Componenet/ProfileCard";

const App = () => {
  // Step 1: State for Name
  const [name, setName] = useState<string>("Quratulain Shah");

  // Other details
  const details = {
    profession: "Future AI Web Developer",
    hobbies: ["Coding", "Reading", "Exploring AI"],
    intro: "I love building innovative projects and learning new technologies!",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-6 animate-bounce">
        🌟 Welcome to My Profile 🌟
      </h1>

      {/* Name Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Profile Card with Props */}
      <ProfileCard name={name} {...details} />
    </div>
  );
};

export default App;
