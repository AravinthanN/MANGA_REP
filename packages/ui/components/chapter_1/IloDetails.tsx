'use client';
import React, { useState } from 'react';
import Modal from '../../block/Modal/ModalComponent';

const IloDetailsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      title: "Ilo in Fall (Day Time in Ilo)",
      img: "/images/ilo_day.png",
      desc: "Fall on Ilo is like Earth's day but far more mesmerizing. Everywhere you look, trees, flowers, and vibrant birds fill the landscape. In the dense forests, extraordinary creatures thrive. Picture a countryside brimming with farms, gardens, and forests under bright, warm weather, balanced perfectly by a cool, refreshing breeze. It's a harmonious, natural paradise."
    },
    {
      title: "Ilo in Risen (Night Time in Ilo)",
      img: "/images/ilo_night.png",
      desc: "During Risen—the equivalent of night—the planet does not just grow dark. It glows with vibrant, aurora-like radiation. Every living being enlarges, except the Iloians (similar to humans on Earth). The wind smells like strawberry ice cream, and you can even see it with the naked eye. Imagine massive trees with colorful, glowing leaves, winds humming like melodies, and butterflies the size of humans."
    }
  ];

  return (
    <>
      <button
  onClick={() => setIsOpen(true)}
  className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             text-white font-semibold shadow-lg hover:shadow-pink-500/50 
             transform hover:-translate-y-0.5 transition-all duration-300 ease-out
             focus:outline-none focus:ring-4 focus:ring-pink-300"
>
  Open Ilo Preview
</button>


      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-6">
          {sections.map((sec, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-2">{sec.title}</h2>
              <div className="relative overflow-hidden rounded-md cursor-pointer group">
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="w-full h-64 object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 bg-black bg-opacity-60 text-white text-sm text-center p-4 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  {sec.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default IloDetailsComponent;
