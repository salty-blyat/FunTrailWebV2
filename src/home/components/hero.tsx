'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import hero from '@public/images/hero.png'
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const fullDescription = "Angkor Wat, a magnificent temple complex in Cambodia, is renowned for its intricate architecture and historical significance. A stunning and iconic destination, this magnificent temple complex in Cambodia is renowned for its intricate architecture and historical significance."

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative w-full h-[38rem] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Angkor Wat temple ruins with tree roots"
          fill 
          className='object-cover object-center' 
          sizes="120vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-xl">
            Angkor Wat a magnificent temple complex in Cambodia
          </h1>
          <div className="relative">
            <p className={`text-base sm:text-lg text-white mb-2 max-w-2xl ${isExpanded ? '' : 'line-clamp-2 sm:line-clamp-none'}`}>
              {fullDescription}
            </p>
            <button 
              onClick={toggleDescription}
              className="text-blue-300 hover:text-blue-100 transition-colors duration-200 sm:hidden"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          </div>
          <Button className="w-36 h-10 text-base mt-6">
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>  
    </div>
  )
}