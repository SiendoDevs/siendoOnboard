// page.js (o donde desees utilizar el logo)
import React from 'react';
import Logo from '../components/Logo'; // Ajusta la ruta de importación según la ubicación del componente
import Header from '@/components/Header';

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#52ffd1] via-[#ff20f8] to-[#ff20f8] dark:from-[#99ee99] dark:via-[#52ffd1] dark:to-[#ff20f8] min-h-screen flex flex-col items-center justify-center">
      <Header />
      {/* Aquí podrás agregar tu propio contenido o componentes */}
    </div>
  );
}

export default Home;
