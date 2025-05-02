import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
    
    <footer className="text-[var(--text-light)] w-full p-6 sm:p-10 flex flex-col justify-center items-center gap-10 sm:gap-14">
  <ul className="text-sm font-sans flex flex-wrap justify-center gap-6 sm:gap-10 border-t-2 pt-6 sm:pt-10 px-4 sm:px-16 text-center">
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out">Provider</li>
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out">Legal Notice</li>
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out">Settings</li>
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out">Privacy</li>
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out">Contact</li>
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out text-center">Third Party License Notices</li>
    <li className="cursor-pointer hover:tracking-wide duration-300 ease-in-out text-center">Personal Information (CCPA) </li>
  </ul>

  <div className="flex gap-2 text-sm sm:text-base">
    <span>Deutsch</span>
    <span>|</span>
    <span className="font-semibold">English</span>
  </div>

  <div>
    <img
      className="w-[100px] sm:w-[120px]"
      src="https://freepngimg.com/download/mercedes_benz/24205-2-mercedes-benz-logo-transparent-image.png"
      alt="Mercedes Logo"
    />
  </div>

  <div className="text-center">
    <a href="#" className="flex flex-col justify-center items-center text-xl">
      <i className="ri-arrow-up-s-line"></i>
      <p className="font-semibold tracking-wider">TOP</p>
    </a>
    <p className="mt-4 text-gray-500/75 text-sm"> &copy; Copyright by
      <a
        className=""
        href="https://ujjawalraosahab.netlify.app/"
      >
        <i className="ri-heart-2-fill hover:text-red-600 mx-2"></i>Ujjawal Yadav
      </a>
    </p>
  </div>
</footer>

    </>
  );
}

export default Footer
