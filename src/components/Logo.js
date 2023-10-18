import React from 'react';
import Image from 'next/image';
import logo from '../../src/img/logo-siendo.png';

function Logo() {
  return (
    <div className="flex items-center justify-center mb-10 fade-in"> {/* Agrega las clases para centrar */}
      <Image
        src={logo}
        alt="Siendo Logo"
        width={150} // Ancho deseado en píxeles
        height={50} // Alto deseado en píxeles
      />
    </div>
  );
}

export default Logo;
