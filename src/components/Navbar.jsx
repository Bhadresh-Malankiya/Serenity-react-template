import React,{useState} from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  const [mobileView,setMobileView] = useState(false)

  function mobileNavbar (e) {
    e.preventDefault();
    setMobileView(!mobileView)
  }

  return (
    <div>
      <header className="text-gray-600 body-font shadow-md bg-white max-h-auto w-full">
        <div className="container flex flex-wrap flex-col lg:col-span-1 lg:flex-row lg:justify-end w-full">
        <Link to="/">
        <div className="flex justify-between">
        <a href="#" className=" flex title-font font-medium sitems-center text-gray-900 mx-2">
          <img src={require('../images/logo.png').default} alt="Serenity.com" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" className="w-16 h-16 text-white rounded" viewBox="0 0 24 24" />
          <span className="ml-3 text-xl">Serenity</span>
        </a>
        <div className="mt-3 p-2 cursor-pointer lg:hidden lg:text-right mb-7 rounded-md transition transform hover:-translate-y-1 hover:scale-110 justify-items-end" onClick={mobileNavbar} id="burger">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </div>
        </Link>
        <nav className={mobileView?"navbarMobile":"navbar"}>
          <Link to="/">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <span/>
          </svg>
          Home
        </Link>
          <Link tp="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>Therapists

        </Link>
          <Link to="/" >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>Free Self-Assessment
        </Link>
          <Link to="/blogs" >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Blogs & Articles
          
        </Link>
          <Link to="/podcasts" >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Videos & Podcasts 
        </Link>
          <Link to="/" onClick={mobileNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>Login
          
        </Link>
        </nav>
    </div>
      </header>
    </div>
  )
}
