import React from 'react';
import BlackButton from '@/components/BlackButton';
import Link from 'next/link';
import Logo from '@/components/Logo';

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#52ffd1] via-[#ff20f8] to-[#ff20f8] dark:from-[#99ee99] dark:via-[#52ffd1] dark:to-[#ff20f8] min-h-screen flex flex-col items-center justify-center">
      <Logo />
        <h2 class="text-xl font-semibold leading-7 text-gray-900 fade-in">Estudio Creativo Multimedia</h2>
        <p class="mt-6 text-center text-xl mb-8 leading-6 text-black w-1/2 fade-in">¿Estás dispuesto a imponerte en el mundo digital?
              </p>
      <Link href="/home">
        <BlackButton text='Si, estoy dispuesto' />
      </Link>

    </div>
  );
}

export default Home;
