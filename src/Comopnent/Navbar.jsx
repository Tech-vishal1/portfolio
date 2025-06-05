import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [btnHover, setBtnHover] = useState(false);
  const [mobileNavHover, setMobileNavHover] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      delay: 100,
    },
    {
      to: "/skills",
      label: "Skills",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      delay: 150,
    },
    {
      to: "/projects",
      label: "Projects",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      delay: 200,
    },
    {
      to: "/aboutme",
      label: "About Me",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      delay: 250,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
            : "bg-white/70 backdrop-blur-sm py-4"
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img className="w-[3rem]" src="./public/assets/pawanimg.png" alt="" />
          
          {/* Centered Desktop Navigation with new text color */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      "relative px-2 py-1.5 group overflow-hidden"
                    }
                    to={item.to}
                  >
                    {({ isActive }) => (
                      <>
                        {/* Background Hover Effect */}
                        <span
                          className={`absolute inset-0 rounded-full bg-blue-50 transform transition-all duration-300 ${isActive
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
                            }`}
                        ></span>

                        {/* Floating Circle Indicator */}
                        <span
                          className={`absolute -left-1 top-1/2 w-1.5 h-1.5 rounded-full bg-blue-600 transform -translate-y-1/2 transition-all duration-300 ${isActive
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                            }`}
                        ></span>

                        {/* Border Bottom Animation */}
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                        ></span>

                        {/* Text with subtle animation and new color */}
                        <span
                          className={`relative poppins-medium z-10 transition-all duration-300 ${isActive
                              ? "text-blue-600 font-medium pl-1.5"
                              : "text-[#C4C4C4] group-hover:text-blue-600 group-hover:pl-1.5"
                            }`}
                        >
                          {item.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact button moved to the right side */}
          <div className="hidden md:block">
            <div
              className="relative"
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              {/* Ultra Modern Contact Button with 3D effects and animations */}
              <button className="group relative px-7 py-3 overflow-hidden rounded-full">
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 bg-size-200 transition-all duration-1000 ease-in-out ${btnHover ? "bg-pos-100" : "bg-pos-0"
                    }`}
                ></div>

                {/* Particle effects */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <div
                    className={`absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white/40 transition-opacity duration-300 ${btnHover ? "opacity-100 animate-ping" : "opacity-0"
                      }`}
                    style={{ animationDuration: "2.5s" }}
                  ></div>
                  <div
                    className={`absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-white/40 transition-opacity duration-300 ${btnHover ? "opacity-100 animate-ping" : "opacity-0"
                      }`}
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>

                {/* Enhanced glow effect */}
                <div
                  className={`absolute inset-0 rounded-full opacity-0 transition-all duration-300 ${btnHover ? "opacity-70 blur-md bg-blue-400/30" : ""
                    }`}
                ></div>

                {/* Dynamic shine effect */}
                <div
                  className={`absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform transition-all duration-1000 ${btnHover ? "translate-x-[500%]" : ""
                    }`}
                ></div>

                {/* Animated border */}
                <span
                  className={`absolute inset-0 rounded-full border transition-all duration-300 ${btnHover
                      ? "border-white/50 scale-105"
                      : "border-blue-600/30"
                    }`}
                ></span>

                {/* 3D depth effect */}
                <div
                  className={`absolute inset-0 rounded-full shadow-md transition-all duration-500 ${btnHover
                      ? "shadow-lg shadow-blue-500/50 scale-[1.05] "
                      : ""
                    }`}
                ></div>

                {/* Text and Icon Container with improved animations */}
                <div className="relative flex items-center z-10 text-white font-medium">
                  <span
                    className={`tracking-wide transition-all duration-300 ${btnHover ? "mr-1" : ""
                      }`}
                  >
                    <NavLink to={"/contactme"} >Contact Me</NavLink>
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-all duration-500 ${btnHover ? "translate-x-1 animate-pulse" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>

                {/* Interactive pulse effect */}
                <div
                  className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${btnHover ? "bg-white scale-0" : "bg-blue-400 animate-ping"
                    }`}
                  style={{ animationDuration: "2s" }}
                ></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              className="relative w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden transition-all duration-300 focus:outline-none group"
              onClick={toggleMenu}
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-blue-50 opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 rounded-lg"></span>

              {/* SVG Icon with advanced animation */}
              <div className="relative w-6 h-5 flex flex-col justify-center items-center transition-all duration-300">
                <span
                  className={`block absolute h-0.5 rounded-full bg-gray-700 transform transition-all duration-300 ease-in-out group-hover:bg-blue-600 ${isOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                    }`}
                ></span>
                <span
                  className={`block absolute h-0.5 rounded-full bg-gray-700 transform transition-all duration-300 ease-in-out group-hover:bg-blue-600 ${isOpen
                      ? "w-0 opacity-0"
                      : "w-4 opacity-100 -translate-y-1.5"
                    }`}
                ></span>
                <span
                  className={`block absolute h-0.5 rounded-full bg-gray-700 transform transition-all duration-300 ease-in-out group-hover:bg-blue-600 ${isOpen ? "w-0 opacity-0" : "w-5 opacity-100 translate-y-1.5"
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Rest of the component remains the same */}
      {/* Advanced Floating Action Button for mobile navigation */}
      <div
        className="fixed bottom-6 right-6 z-50 md:hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Advanced ripple effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transform transition-all duration-700 ${isOpen ? "scale-[25] opacity-10" : "scale-100 opacity-0"
              }`}
          ></div>
        </div>

        {/* Interactive Preview Menu with 3D hover effects */}
        <div
          className={`absolute bottom-16 right-0 bg-white/95 backdrop-blur-lg rounded-xl p-3 w-60 transition-all duration-500 origin-bottom-right ${isHovering && !isOpen
              ? "scale-100 opacity-100 transform rotate-0"
              : "scale-75 opacity-0 pointer-events-none transform rotate-3"
            }`}
          style={{
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <div
                key={item.to}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <NavLink
                  to={item.to}
                  className="flex items-center p-2 rounded-lg group transition-all duration-300"
                >
                  {/* Icon with animation */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeItem === index
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-500 group-hover:text-blue-600"
                      }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-all duration-300 ${activeItem === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.icon}
                      ></path>
                    </svg>
                  </div>

                  {/* Text with hover animation - using the new color */}
                  <div className="ml-3 flex items-center">
                    <span
                      className={`h-0.5 bg-blue-600 transition-all duration-300 mr-2 ${activeItem === index ? "w-4" : "w-0 group-hover:w-2"
                        }`}
                    ></span>
                    <span
                      className={`transition-all duration-300 ${activeItem === index
                          ? "transform text-blue-600 poppins-medium"
                          : "text-[#C4C4C4] group-hover:text-blue-600"
                        }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          {/* Triangle pointer with subtle shadow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 shadow-sm"></div>
        </div>

        {/* Enhanced Pulse Animation */}
        <div
          className={`absolute inset-0 rounded-full bg-blue-400 opacity-30 transition-transform duration-1000 ${isOpen ? "scale-0" : "scale-100 animate-ping"
            }`}
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Dramatically improved Floating Action Button */}
        <button
          onClick={toggleMenu}
          className={`flex justify-center items-center w-14 h-14 rounded-full shadow-2xl focus:outline-none transition-all duration-500 overflow-hidden ${isOpen
              ? "bg-gradient-to-br from-red-500 to-pink-500 rotate-180"
              : "bg-gradient-to-br from-blue-500 to-indigo-600"
            }`}
          style={{
            boxShadow: isOpen
              ? "0 0 25px rgba(239, 68, 68, 0.5)"
              : "0 0 25px rgba(37, 99, 235, 0.5)",
          }}
        >
          {/* Inner button effects */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Animated gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-black/0 via-white/10 to-white/30 transform transition-all duration-500 ${isOpen ? "rotate-180 opacity-50" : "opacity-30"
                }`}
            ></div>

            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 0.5px, transparent 0.5px)",
                backgroundSize: "10px 10px",
              }}
            ></div>
          </div>

          {/* Animated icon container */}
          <div className="w-6 h-6 flex flex-col justify-center items-center relative">
            {/* Enhanced hamburger to X animation */}
            <span
              className={`block absolute h-0.5 rounded-full bg-white transform transition-all duration-500 ease-out ${isOpen ? "w-7 rotate-45" : "w-6 -translate-y-2"
                }`}
              style={{
                boxShadow: isOpen ? "0 0 5px rgba(255, 255, 255, 0.5)" : "none",
              }}
            ></span>
            <span
              className={`block absolute h-0.5 rounded-full bg-white transform transition-all duration-300 ease-out ${isOpen ? "w-0 opacity-0 translate-x-3" : "w-5 opacity-100"
                }`}
            ></span>
            <span
              className={`block absolute h-0.5 rounded-full bg-white transform transition-all duration-500 ease-out ${isOpen ? "w-7 -rotate-45" : "w-4 translate-y-2"
                }`}
              style={{
                boxShadow: isOpen ? "0 0 5px rgba(255, 255, 255, 0.5)" : "none",
              }}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu with updated text color */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all poppins-medium duration-700 ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Animated Background with parallax effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 opacity-98"
          onClick={toggleMenu}
          style={{
            backgroundSize: "400% 400%",
            animation: isOpen ? "gradient 15s ease infinite" : "none",
          }}
        >
          {/* Decorative patterns */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #4f46e5 1px, transparent 1px), radial-gradient(circle, #4f46e5 1px, transparent 1px)",
              backgroundSize: "35px 35px, 20px 20px",
              backgroundPosition: "0 0, 17px 17px",
              opacity: "0.05",
            }}
          ></div>
        </div>

        {/* Enhanced Menu content with sophisticated animations */}
        <div className="relative h-full flex flex-col justify-center items-center p-6">
          <div
            className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-sm transform transition-all duration-700 ${isOpen
                ? "translate-y-0 opacity-100 rotate-0"
                : "translate-y-12 opacity-0 rotate-3"
              }`}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
          >
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li
                  key={item.to}
                  className={`transform transition-all duration-700 ${isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                    }`}
                  style={{
                    transitionDelay: isOpen ? `${item.delay}ms` : "0ms",
                  }}
                  onMouseEnter={() => setMobileNavHover(index)}
                  onMouseLeave={() => setMobileNavHover(null)}
                >
                  <NavLink
                    className={({ isActive }) =>
                      "block py-3.5 rounded-xl flex items-center relative overflow-hidden transition-all duration-300"
                    }
                    to={item.to}
                    onClick={toggleMenu}
                  >
                    {({ isActive }) => (
                      <>
                        {/* Background animation */}
                        <div
                          className={`absolute inset-0 rounded-xl transition-all duration-300 ${isActive
                              ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                              : mobileNavHover === index
                                ? "bg-blue-50/70"
                                : "bg-transparent"
                            }`}
                        ></div>

                        {/* Left border indicator */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl transition-all duration-300 ${isActive
                              ? "bg-gradient-to-b from-blue-500 to-indigo-500 h-full"
                              : mobileNavHover === index
                                ? "bg-blue-400/50 h-2/3"
                                : "h-0"
                            }`}
                        ></div>

                        {/* Icon container with animations */}
                        <div
                          className={`relative ml-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                              ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                              : mobileNavHover === index
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-500"
                            }`}
                        >
                          <svg
                            className={`w-4.5 h-4.5 transition-all duration-300 ${isActive || mobileNavHover === index
                                ? "scale-110"
                                : ""
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d={item.icon}
                            ></path>
                          </svg>
                        </div>

                        {/* Text with line indicator - updated color */}
                        <div className="ml-4 flex items-center">
                          <span
                            className={`h-0.5 transition-all duration-300 ${isActive
                                ? "w-6 mr-3 bg-blue-600"
                                : mobileNavHover === index
                                  ? "w-4 mr-3 bg-blue-400"
                                  : "w-0 mr-0 bg-transparent"
                              }`}
                          ></span>
                          <span
                            className={`transition-all duration-300 ${isActive
                                ? "text-blue-600 font-medium"
                                : mobileNavHover === index
                                  ? "text-blue-600"
                                  : "text-[#C4C4C4]"
                                  
                              }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
              <li
                className={`pt-6 transform transition-all duration-700 ${isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                  }`}
                style={{
                  transitionDelay: isOpen ? "350ms" : "0ms",
                }}
              >
                {/* Spectacular Mobile Contact Button */}
                <button
                  className="w-full relative overflow-hidden rounded-xl shadow-md group h-14"
                  onClick={toggleMenu}
                >
                  {/* Multi-layered animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-1000"></div>

                  {/* Overlapping gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>

                  {/* Moving particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div
                      className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-white/20 animate-ping"
                      style={{ animationDuration: "2.5s" }}
                    ></div>
                  </div>

                  {/* Dynamic shine effect */}
                  <div className="absolute -left-full top-0 h-full w-1/2 transform skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 group-hover:animate-shine"></div>

                  {/* Inner shadow for 3D effect */}
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    style={{
                      boxShadow:
                        "inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 1px rgba(0, 0, 0, 0.1)",
                    }}
                  ></div>

                  {/* Content with icon animation */}
                  <div className="relative flex items-center justify-center h-full px-5">
                    <div className="flex items-center justify-center text-white font-medium">
                      <span className="tracking-wide group-hover:mr-1 transition-all duration-300">
                        Contact Me
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-500 transform group-hover:translate-x-1.5 group-hover:animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Outer glow effect */}
                  <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-60 group-hover:blur-md bg-blue-400/20 transition-all duration-300"></div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Define CSS animations */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shine {
          100% {
            left: 200%;
          }
        }

        /* Custom utilities for background position and size */
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        .bg-pos-100 {
          background-position: 100% 0%;
        }

        .animate-shine {
          animation: shine 1.2s linear forwards;
        }
      `}</style>
    </>
  );
}