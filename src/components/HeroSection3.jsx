import React from 'react'
import HS3CardList from './HS3CardList'

export default function HeroSection3() {
  return (
    <div>
      <div class=" bg-cover min-h-screen bg-pink-200 bg-gradient-to-r from-blue-200 to-white " >
  <div class="text-base text-center pb-2 block font-extrabold md:text-3xl pt-7 md:text-center title-font mb-4 text-pink-500">
    <h2 >What's Worrying You?</h2>
  </div>
  <div>
    <p class="mt-1 text-base text-gray-500 sm:mt-5 sm:text-lg  text-center ">
      While there never be a substitute for consistent efforts towards nuruturing<br/>
      our mental health, certain situations call for added attention.
    </p>
  </div>
  <div id = "slider" class="scrollbar-hide grid grid-rows-1 grid-flow-col overflow-x-scroll justify-between pt-32 sm:pt-0 sm:my-0 gap-4 p-4 transition-all ease-in-out duration-1000 transform translate-x-0" onmousemove="autoScroll()">
    <HS3CardList />
  </div>
  <div class="rounded-md">
    <a href="#" class="w-auto sm:mt-8 sm:w-1/4 flex mx-4 sm:mx-16  -mt-4 items-center sm:inset-x-1/3 relative justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10" onclick="getPage('assesment')">
      Take me to Self-Assesment
    </a>
  </div>
</div>
    </div>
  )
}
