import React from 'react'
import BlackButton from '@/components/BlackButton';
import Link from 'next/link';


export default function thirdScreen() {
  return (
    <div className="bg-gradient-to-b from-[#52ffd1] via-[#ff20f8] to-[#ff20f8] dark:from-[#99ee99] dark:via-[#52ffd1] dark:to-[#ff20f8] min-h-screen flex flex-col items-center justify-center">
      
      <h1 className='text-black text-xl text-center mb-10 w-1/2 fade-in'>Responde las siguientes preguntas y agenda una cita con un miembro de nuestro equipo. 
      </h1>
      <Link href="/">
        <BlackButton text="RESPONDER AHORA" />
      </Link>
    
    </div>
  )
}
