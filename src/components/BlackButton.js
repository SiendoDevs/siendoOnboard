import React from 'react';

function BlackButton({ text, onClick }) {
  return (
    <button
      className=" fade-in bg-black text-white uppercase py-4 px-12 rounded-full hover:bg-gray-800 transition-all duration-300 ml-2 mr-2" // Agrega las clases ml-2 y mr-2 para el margen izquierdo y derecho
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default BlackButton;
