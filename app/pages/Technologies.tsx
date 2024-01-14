/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Technologies: React.FC = () => {
  return (
    <main className="bg-technologies h-full p-20 flex flex-col items-center justify-start gap-20" id='technologies'>
      <section id="tecnologias" className="h-5/6 w-5/6  p-8 flex flex-col gap-20">
        <h2 className="text-center text-7xl">Trabalho com as tecnologias:</h2>
        
        <div className="grid grid-cols-3 gap-6">

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/121405754-b4f48f80-c95d-11eb-8893-fc325bde617f.png" alt="Logo Dotnet" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png" alt="Logo C#" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Logo Python" className="w-32 h-32" />
          </div>  

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="Logo Mongo" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Logo Next.js" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" alt="Logo Angular" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="Logo TypeScript" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="Logo JavaScript" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="	https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="Logo HTML" className="w-32 h-32" />
          </div>

          <div className="h-40 w-30 bg-purple-200 text-white p-2 rounded-md flex items-center justify-center hover:scale-105 hover:bg-purple-400">
            <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="Logo CSS" className="w-32 h-32" />
          </div>
          
        </div>
        
      </section>
    </main>
  );
};

export default Technologies;