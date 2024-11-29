// App.tsx
import React from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  // Aapki details yahan store hongi
  const userDetails = {
    name: "Quratulain Shah",
    age: 7,
    profession: "Future AI Web Developer",
    description:
      "I am passionate about learning web development and creating amazing projects!",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white absolute top-8">
        🌟 Profile Card Generator
      </h1>
      {/* Props ke zariye details pass kar rahe hain */}
      <ProfileCard {...userDetails} />
    </div>
  );
};

export default App;
