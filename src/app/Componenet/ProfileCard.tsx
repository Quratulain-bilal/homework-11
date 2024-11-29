// ProfileCard.tsx
import React from "react";

type Props = {
  name: string;
  profession: string;
  hobbies: string[];
  intro: string;
};

const ProfileCard: React.FC<Props> = ({ name, profession, hobbies, intro }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Name with Animation */}
      <h2 className="text-2xl font-bold mb-2 text-gray-800 animate-pulse">
        {name}
      </h2>
      {/* Profession */}
      <p className="text-purple-600 text-lg font-medium mb-4">{profession}</p>
      {/* Intro */}
      <p className="text-gray-600 mb-4">{intro}</p>
      {/* Hobbies */}
      <div>
        <h3 className="text-gray-800 font-semibold mb-2">Hobbies:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
