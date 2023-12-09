import React from 'react';
import image from '../public/image.jpg';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen w-full flex items-center justify-center relative" 
         style={{backgroundImage: `url(${image})`}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white text-center z-10">
        <p className="text-4xl font-bold mb-4 font-bungee">Search Images may you will have a great day</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
