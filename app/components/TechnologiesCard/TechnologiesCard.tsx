import React, { useState } from 'react';

interface Technology {
  name: string;
  icon: string;
  description: string;
}

const TechnologyCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-purple-400 text-white p-4 rounded-md flex flex-col items-center justify-center cursor-pointer transition transform hover:scale-105" onClick={handleClick}>
      <img src={tech.icon} alt={`Logo ${tech.name}`} className="w-32 h-32" />

      {showDetails && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">{tech.name}</h3>
          <p className="text-sm">{tech.description}</p>
        </div>
      )}
    </div>
  );
};

export default TechnologyCard;
