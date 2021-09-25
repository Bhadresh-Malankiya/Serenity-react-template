import React from 'react'

export default function PinkCard({imageLink,title,desc}) {
  return (
    <div className="lg:p-4 shadow-md flex flex-wrap flex-col items-center justify-center rounded-md bg-pink-100 m-4 px-4 py-8">
   
    <img className="shadow-md rounded-full border-pink-600 border-8 p-8 transition transform hover:scale-110 bg-pink-200" src={imageLink} />
    <h1 className="text-base text-center pb-7 block font-extrabold md:text-3xl pt-7 md:text-center title-font mb-4 text-pink-500">{title}</h1>
    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg max-w-sm">
      {desc}
    </p>

    </div>
  )
}
