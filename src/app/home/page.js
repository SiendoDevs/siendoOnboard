import React from 'react';
import BlackButton from '@/components/BlackButton';
import Link from 'next/link';
import Logo from '@/components/Logo';
import './style.css'; // Asegúrate de importar tu archivo CSS aquí.

export default function secondScreen() {
  return (
    <div className="bg-gradient-to-b from-[#52ffd1] via-[#ff20f8] to-[#ff20f8] dark:from-[#99ee99] dark:via-[#52ffd1] dark:to-[#ff20f8] min-h-screen flex flex-col items-center justify-center">

            <h2 class="text-xl font-semibold leading-7 text-gray-900 fade-in">Notifications</h2>
            <p class="mt-6 text-center text-xl mb-8 leading-6 text-black w-1/2 fade-in">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
            <Link href="/screen1">
              <BlackButton text="CONTINUAR" />
            </Link>
    </div>
  )
}
