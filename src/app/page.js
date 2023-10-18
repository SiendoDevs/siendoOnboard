import React from 'react';
import BlackButton from '@/components/BlackButton';
import Link from 'next/link';
import Logo from '@/components/Logo';

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#52ffd1] via-[#ff20f8] to-[#ff20f8] dark:from-[#99ee99] dark:via-[#52ffd1] dark:to-[#ff20f8] min-h-screen flex flex-col items-center justify-center">
      <Logo />
      <Link href="/home">
        <BlackButton text="CONTINUAR" />
      </Link>

    </div>
  );
}

export default Home;
