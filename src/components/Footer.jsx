import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
  <footer className="text-white body-font bg-gray-800">
    <div
      className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={require('../images/logo.png').default} fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2"
            className="w-20 h-20 text-black p-2 rounded-2xl border-solid border-black" viewBox="0 0 24 24" />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          <span className="ml-3 text-3xl text-pink-500 cursor-pointer">Serenity</span>
        </a>
        <p className="mt-2 text-sm text-white">This service does not give medical advice and does not oblige any medical or
          psychiatric emergencies. In the event that you are in a dangerous life-threatening circumstance, kindly don't
          use this site. In the event that you are feeling suicidal, we suggest you call a suicide prevention helpline
          or go to your closest doctor's facility.</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-2/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 text-pink-500">Useful Links</h2>
          <div className="list-none mb-10">
            <li>
              <Link to="/">
              <a className="footer-nav-links">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/">
              <a className="footer-nav-links" >Self-Assessment</a>
              </Link>
            </li>
            <li>
              <Link to="/">
              <a className="footer-nav-links" >Therapists? Join Us</a>
              </Link>
            </li>
            <li>
              <Link to="/blogs">
              <a className="footer-nav-links" >Blogs & Articles</a>
              </Link>
            </li>
            <li>
              <Link to="/podcasts">
              <a className="footer-nav-links" >Videos & Podcasts</a>
              </Link>
            </li>
          </div>
        </div>

        <div className="lg:w-2/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 text-pink-500">Terms</h2>
          <div className="list-none mb-10">
            <li>
              <Link to="/">
              <a className="footer-nav-links">Privacy policy</a>
              </Link>
            </li>
            <li>
              <Link to="/">
              <a className="footer-nav-links">Terms & Conditions</a>
              </Link>
            </li>
            <li>
              <Link to="/">
              <a className="footer-nav-links">Cancellation & Refund Policy</a>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-pink-500">Subscribe</h2>
        <input type="text" id="footer-field" name="footer-field" className="w-full bg-white rounded border border-pink-100 focus:bg-pink-100 focus:ring-2 focus:border-pink-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 transform ease-in-out" placeholder="Your Email" />
        <div className="py-3">
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0  inline-flex text-gray-900 transition duration-500 transform hover:scale-110 bg-pink-300  border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 hover:text-white rounded">Subscribe</button>
        </div>
      </div>
    </div>
      
    <div className="bg-white">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-900 text-sm text-center sm:text-left">© Copyright <strong><span>Serenity</span></strong>.All
          Rights Reserved</p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-900">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
              viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-900">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
              viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
              </path>
            </svg>
          </a>
          <a className="ml-3 text-gray-900">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-900">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
    
  </footer>
    </div>
  )
}
