import React from 'react';
import Image from 'next/image';
import logo from '../../src/img/logo-siendo.png';
import Logo from './Logo';
import BlackButton from './BlackButton';

function Header() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <Logo />
      <h1 className="mt-6 text-center text-xl text-black font-black">¡Empieza hoy tu <br/> transformación digital!</h1>
      <p className="mt-4 text-black text-lg font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> {/* Ajusta el tamaño y el peso de la tipografía */}
      <div className="flex justify-center mt-8">
        <BlackButton text="Comenzar" />
      </div>
    </div>
  );
}

export default Header;
