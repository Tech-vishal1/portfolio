import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Project data with modern tech projects
  const projects = [
    {
      id: 1,
      title: "Bus-booking-website",
      subtitle: "Bus-booking-website",
      description: "A HTML & CSS JS BUS_BOOKING_MASTER App with a clean UI, category filtering, and a modern card-based layout. No real-time updates, but smooth browsing. 🚀",
      image: "./Assets/bus booking.png",
      color: "#3B82F6", // blue-500
      accentColor: "#60A5FA", // blue-400
      technologies: ["HTML CSS", "Javascript"],
      githubLink: "https://github.com/Tech-vishal1/BUS-BOOKING-MASTER-WEBSITE",
      liveLink: "https://dynamic-conkies-9c159a.netlify.app/"
    },
    {
      id: 2,
      title: "Paste-Aap",
      subtitle: "Paste-Aap",
      description: "Paste App – A simple React task manager to add, edit, delete, and check/uncheck tasks, with data saved in local storage. 🚀✅",
      image: "./Assets/paste app.png",
      color: "#8B5CF6", // violet-500
      accentColor: "#A78BFA", // violet-400
      technologies: ["Solidity", , "React js", ],
      githubLink: "",
      liveLink: ""
    },
    {
      id: 3,
      title: "EVENT-WEBSITE • EVENT DESINGER ",
      subtitle: "EVENT-WEBSITE • EVENT DESINGER",
      description: "Cynthia Ugwu • Product Designer – A modern portfolio website made with HTML, JavaScript, GSAP, and Locomotive Scroll for smooth scrolling and animations, creating an engaging UX/UI experience. 🚀 ",
      image: "./Assets/cytha ugwu.png",
      color: "#EC4899", // pink-500
      accentColor: "#F472B6", // pink-400
      technologies: ["HTML", "CSS", "Java Script", "GSAP","Locomotive CSS"],
      githubLink: "",
      liveLink: ""
    },
    {
      id: 4,
      title: "RESTURENT-WEBSITE",
      subtitle: "RESTURENT-WEBSITE",
      description: "A modern e-commerce project built with React, Redux, and Tailwind CSS, featuring an add-to-cart function and a checkout method for a seamless shopping experience. 🚀",
      image: "./Assets/resturent.png",
      color: "#10B981", // emerald-500
      accentColor: "#34D399", // emerald-400
      technologies: ["React.js", "Redux", "Tailwind CSS", "BootStrap"],
      githubLink: "",
      liveLink: ""
    }
  ];

  // Handle mouse move for parallax effects
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight
    });
  };

  // Handle scroll progress and intersection observation
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const progress = Math.max(0, Math.min(1, 
          (windowScrollY - sectionTop + windowHeight / 2) / (sectionHeight - windowHeight / 2)
        ));
        
        setScrollProgress(progress);
        
        // Check if section is in view
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsInView(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variants for framer-motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-16 md:py-32 overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ultra-modern dot pattern with motion effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #e0e7ff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
          }}></div>
        </div>
        
        {/* Modern floating orbs/gradients - Hidden on small screens */}
        <div className="hidden md:block">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-300/20 to-purple-300/10 backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { 
              opacity: 0.7, 
              scale: 1, 
              x: `${30 + mousePosition.x * 5}%`, 
              y: `${20 + mousePosition.y * 5}%`,
              rotateZ: mousePosition.x * 5
            } : { opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            style={{ 
              left: '30%', 
              top: '20%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
            }}
          />
          <motion.div 
            className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-green-300/10 to-emerald-300/20 backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { 
              opacity: 0.7, 
              scale: 1, 
              x: `${70 - mousePosition.x * 5}%`, 
              y: `${60 - mousePosition.y * 5}%`,
              rotateZ: -mousePosition.x * 5
            } : { opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut" 
            }}
            style={{ 
              right: '20%', 
              bottom: '30%',
              transform: 'translate(50%, 50%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
            }}
          />
        </div>
        
        {/* Subtle light flares - Smaller on mobile */}
        <motion.div 
          className="absolute w-32 md:w-64 h-32 md:h-64 rounded-full bg-blue-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            left: '15%', 
            top: '60%',
          }}
        />
        <motion.div 
          className="absolute w-48 md:w-96 h-48 md:h-96 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ 
            right: '10%', 
            top: '30%',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Responsive text sizes */}
        <motion.div 
          className="mb-12 md:mb-24 text-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          style={{ 
            opacity: 1 - scrollProgress * 0.8,
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        >
          <div className="inline-flex items-center justify-center mb-4 md:mb-6 relative">
            <motion.div 
              className="h-px w-6 md:w-8 bg-gradient-to-r from-transparent to-blue-400 mr-3 md:mr-4"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 24, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-blue-500 font-mono text-xs md:text-sm tracking-wider relative px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50 before:to-indigo-50 before:rounded-full before:-z-10 before:border before:border-blue-100">
                <span className="relative z-10">WHAT I'VE BUILT</span>
              </p>
            </motion.div>
            <motion.div 
              className="h-px w-6 md:w-8 bg-gradient-to-l from-transparent to-blue-400 ml-3 md:ml-4"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: 24, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-gray-900">Featured</span>
            <span className="relative ml-2 md:ml-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
              <motion.span 
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 rounded-full"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore my portfolio of cutting-edge applications leveraging modern technologies
          </motion.p>
        </motion.div>
        
        {/* Projects */}
        <motion.div 
          className="space-y-24 md:space-y-40"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const progressOffset = (index / projects.length) - 0.25;
            const itemProgress = Math.max(0, Math.min(1, (scrollProgress - progressOffset) * 2));
            
            return (
              <motion.div 
                key={project.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center 
                  gap-6 md:gap-8 lg:gap-16 relative`}
                variants={projectVariants}
                custom={index}
                style={{ 
                  opacity: itemProgress,
                  transform: `translateY(${(1 - itemProgress) * 100}px)`
                }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Image */}
                <div className="w-full md:w-7/12 relative group">
                  {/* Perspective wrapper for 3D effect */}
                  <div className="relative" style={{ 
                    perspective: '1500px',
                  }}>
                    {/* Card wrapper with hover effects */}
                    <motion.div 
                      className="relative transition-all duration-700 ease-out"
                      animate={{
                        rotateY: activeProject === project.id ? (isEven ? mousePosition.x * 10 - 5 : -mousePosition.x * 10 + 5) : 0,
                        rotateX: activeProject === project.id ? -mousePosition.y * 10 + 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Glass effect card */}
                      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white border border-gray-100 transition-all duration-500 group-hover:shadow-2xl"
                        style={{
                          backdropFilter: 'blur(10px)',
                          boxShadow: activeProject === project.id 
                            ? `0 25px 50px -12px ${project.color}30, 0 0 15px 0 rgba(0,0,0,0.05)` 
                            : '0 10px 30px -10px rgba(0,0,0,0.1)'
                        }}
                      >
                        {/* Image with overlay */}
                        <div className="relative overflow-hidden">
                          {/* Image */}
                          <motion.img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full aspect-video object-cover"
                            whileHover={{ scale: 1.1, filter: "brightness(0.9)" }}
                            transition={{ duration: 0.7 }}
                          />
                          
                          {/* Colored overlay gradient */}
                          <motion.div 
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                              background: `linear-gradient(135deg, ${project.color}00, ${project.color}40)`
                            }}
                          />
                          
                          {/* Content overlay - Simplified for mobile */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.9 }}
                            transition={{ duration: 0.5 }}
                          >
                            {/* Project Links */}
                            <motion.div 
                              className="flex gap-2 md:gap-4"
                              initial={{ opacity: 0, y: 10 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <motion.a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-md bg-white/80 text-gray-900 px-3 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)", y: -2 }}
                                transition={{ type: "spring", stiffness: 500, damping: 17 }}
                              >
                                View Code
                              </motion.a>
                              <motion.a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-md text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base font-medium shadow-lg"
                                style={{ 
                                  background: `linear-gradient(to right, ${project.color}, ${project.accentColor})`,
                                  boxShadow: `0 10px 20px -5px ${project.color}50`
                                }}
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 500, damping: 17 }}
                              >
                                Live Demo
                              </motion.a>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* 3D effect elements - Only visible on tablet and up */}
                      <div className="hidden md:block">
                        <motion.div 
                          className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-gray-50 to-white"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: activeProject === project.id ? 1 : 0,
                            z: -20
                          }}
                          transition={{ duration: 0.7 }}
                          style={{ 
                            transform: 'translateZ(-20px)',
                            boxShadow: `0 0 30px 0 ${project.color}20`
                          }}
                        />
                        
                        {/* Decorative corners with animation */}
                        <motion.div 
                          className="absolute top-0 left-0 w-16 h-16"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: activeProject === project.id ? 1 : 0 
                          }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <motion.div 
                            className="absolute top-4 left-4 h-1 bg-gradient-to-r from-transparent to-blue-400"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: activeProject === project.id ? 48 : 0 
                            }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          />
                          <motion.div 
                            className="absolute top-4 left-4 w-1 bg-gradient-to-b from-transparent to-blue-400"
                            initial={{ height: 0 }}
                            animate={{ 
                              height: activeProject === project.id ? 48 : 0 
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          />
                        </motion.div>
                        <motion.div 
                          className="absolute bottom-0 right-0 w-16 h-16"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: activeProject === project.id ? 1 : 0 
                          }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <motion.div 
                            className="absolute bottom-4 right-4 h-1 bg-gradient-to-l from-transparent to-blue-400"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: activeProject === project.id ? 48 : 0 
                            }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          />
                          <motion.div 
                            className="absolute bottom-4 right-4 w-1 bg-gradient-to-t from-transparent to-blue-400"
                            initial={{ height: 0 }}
                            animate={{ 
                              height: activeProject === project.id ? 48 : 0 
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="w-full md:w-5/12 text-left mt-6 md:mt-0">
                  <div className="space-y-3 md:space-y-4">
                    {/* Project number */}
                    <motion.div 
                      className="flex items-center mb-1 md:mb-2"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-6 md:w-8 h-px bg-gray-300 mr-2 md:mr-3"
                        initial={{ width: 0 }}
                        animate={{ width: 24 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                      <span className="text-gray-400 font-mono text-xs">PROJECT {index + 1}</span>
                    </motion.div>
                    
                    {/* Subtitle */}
                    <motion.p 
                      className="text-gray-500 font-mono uppercase tracking-wider text-xs md:text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {project.subtitle}
                    </motion.p>
                    
                    {/* Title */}
                    <motion.h3 
                      className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 pb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <span 
                        className="relative inline-block transition-all duration-500"
                        style={{ 
                          background: activeProject === project.id 
                            ? `linear-gradient(to right, ${project.color}, ${project.accentColor})` 
                            : 'none',
                          WebkitBackgroundClip: activeProject === project.id ? 'text' : 'none',
                          WebkitTextFillColor: activeProject === project.id ? 'transparent' : 'inherit',
                        }}
                      >
                        {project.title}
                      </span>
                      <motion.span 
                        className="absolute bottom-0 left-0 h-0.5 md:h-1 rounded-full"
                        animate={{ 
                          width: activeProject === project.id ? '100%' : '40%',
                          opacity: activeProject === project.id ? 1 : 0.5
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ 
                          background: `linear-gradient(to right, ${project.color}, ${project.accentColor}90)`,
                        }}
                      />
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 text-base md:text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Technologies */}
                    <motion.div 
                      className="pt-2 md:pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <p className="text-gray-500 mb-2 md:mb-3 text-xs md:text-sm font-medium">Technologies Used:</p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm rounded-full shadow-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.7 + (i * 0.05)
                            }}
                            whileHover={{ 
                              y: -2,
                              boxShadow: `0 4px 12px -2px ${project.color}20` 
                            }}
                            style={{ 
                              background: activeProject === project.id 
                                ? `linear-gradient(135deg, ${project.color}10, ${project.accentColor}20)` 
                                : 'rgb(243, 244, 246)', // gray-100
                              color: activeProject === project.id ? project.color : 'rgb(75, 85, 99)', // gray-600
                              border: `1px solid ${activeProject === project.id ? project.color + '30' : 'rgb(229, 231, 235)'}`, // gray-200
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Connecting timeline element - Simplified for mobile */}
                {index < projects.length - 1 && (
                  <motion.div 
                    className="absolute left-1/2 -bottom-12 md:-bottom-20 -translate-x-1/2 translate-y-full flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.div 
                      className="w-px bg-gradient-to-b from-blue-400 to-transparent"
                      initial={{ height: 0 }}
                      animate={{ height: 40 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-blue-400 bg-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                        delay: 1.5
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}