import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Prjects from "./Projects";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "../Comopnent/Footer"
import { NavLink } from "react-router";

export default function Home() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    
    const link = document.createElement("a");

    link.href = "/Assets/vishal_Resume-1.pdf"; 

    
    link.download = "vishal_Resume-2.pdf";

    
    document.body.appendChild(link);

    
    link.click();

    document.body.removeChild(link);
  };

  const LoadingAnimation = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }, []);

    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: 2, duration: 0.5 }}
          >
            P
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 border-4 border-t-blue-500 border-r-blue-600 border-b-blue-500 border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: 1, duration: 1, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    );
  };

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Social media icon animation variants
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.15,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <LoadingAnimation />

      <div className="w-full min-h-screen bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center pt-16 md:pt-24 pb-16">
            
            <motion.div
              className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
               
                <motion.div
                  className="relative inline-flex px-6 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent relative z-10"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Hello!
                  </motion.span>
                  <motion.div
                    className="absolute -inset-1 bg-blue-50 rounded-lg z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  ></motion.div>
                  <motion.div
                    className="absolute -right-2 -top-2 w-4 h-4 bg-blue-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  ></motion.div>
                  <motion.div
                    className="absolute -left-2 -bottom-2 w-4 h-4 bg-blue-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  ></motion.div>
                </motion.div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4"
              >
                I'm{" "}
                <span className="text-blue-600 relative inline-block">
                  vishal tripathi
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="absolute bottom-0 left-0 h-1 bg-blue-600"
                  ></motion.span>
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden h-16 md:h-24 mb-6"
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -100, -200, -300, 0] }}
                  transition={{
                    duration: 8,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute w-full"
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium h-16 md:h-24 flex items-center">
                    MERN Developer
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium h-16 md:h-24 flex items-center">
                    Frontend Expert
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium h-16 md:h-24 flex items-center">
                    UI/UX Enthusiast
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium h-16 md:h-24 flex items-center">
                    Problem Solver
                  </p>
                </motion.div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-700 text-base md:text-lg max-w-md mb-8 leading-relaxed"
              >
                Building beautiful, scalable, and user-friendly web applications
                with responsive front-end designs and efficient back-end
                systems. Passionate about creating digital experiences that make
                a difference.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex space-x-5 mb-8"
              >
                <motion.a
                  href="https://github.com/Tech-vishal1"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vishal-tripathi-10a191344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:tripathivishal@gmail.com"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </div>
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <NavLink to={"./projects"} >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#2563eb",
                    boxShadow: "0 15px 25px -4px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -inset-x-1 bottom-0 h-1 bg-blue-400 opacity-50 rounded-full transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center z-10">
                    <span className="mr-2">View Projects</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </span>
                </motion.button>
                </NavLink>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group"
                  onClick={handleDownloadCV}
                >
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-50 to-blue-100 group-hover:w-full transition-all duration-400"></span>
                  <span className="absolute -inset-x-1 bottom-0 h-1 bg-blue-400 opacity-0 rounded-full transform translate-y-1 group-hover:opacity-30 group-hover:translate-y-0 transition-all duration-300"></span>
                  <span className="relative flex items-center z-10">
                    <svg
                      className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span className="relative">Download CV</span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

           
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative z-10"
              >
                <div className="relative w-full h-72 md:h-96 lg:h-[450px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="absolute bottom-0 left-0 w-4/5 h-4/5 border-2 border-blue-200 rounded-3xl -z-10"
                  ></motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.5,
                      duration: 0.8,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 },
                      }}
                      src="/Assets/p1.jpg"
                      alt="Pawan Prasad"
                      className="max-w-full max-h-full object-contain z-10 drop-shadow-xl"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="absolute bottom-10 left-10 w-24 h-24 bg-blue-600 opacity-5 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400 opacity-5 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills/>
      <Projects/>
     
    </>
    
  );
}
