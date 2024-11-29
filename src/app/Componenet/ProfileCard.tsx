// ProfileCard.tsx
import React from "react";

type Props = {
  name: string;
  age: number;
  profession: string;
  description: string;
};

const ProfileCard: React.FC<Props> = ({
  name,
  age,
  profession,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
      {/* User's Name */}
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
      {/* User's Age */}
      <p className="text-gray-500 text-sm">Age: {age}</p>
      {/* User's Profession */}
      <p className="text-lg font-medium text-purple-700 mt-2">{profession}</p>
      {/* User's Description */}
      <p className="text-gray-600 mt-4">{description}</p>
      {/* Footer Line */}
      <div className="mt-6 border-t pt-4 text-gray-400 text-sm">
        "Props make data sharing easy and components reusable!"
      </div>
    </div>
  );
};

export default ProfileCard;
