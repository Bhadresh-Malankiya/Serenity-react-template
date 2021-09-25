import React from 'react'
import {Link} from 'react-router-dom'

export default function HeroSection1() {
  return (
    <div className="bg-cover min-h-screen -mt-20 sm:-mt-20 lg:-mt-16" style={{ backgroundImage: `url(${require('../images/HeroSection1.jpg').default})` }}>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-56 lg:px-8">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Welcome to </span>
            <span class="block text-pink-600 xl:inline">Serenity</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Serenity offers you affordable, private onlion counselling Talk with professional Therapist onlion.
          </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <Link to="/assesment" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg md:px-10">
              Get a Free Assesment
            </Link>
          </div>
          <div class="rounded-md animate-bounce">
            <Link to="/therapists" className="w-full flex sm:mx-4 sm:mt-auto mt-8 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
