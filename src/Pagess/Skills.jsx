import React, { useState, useEffect, useRef } from "react";
// Note: You'll need to add Font Awesome to your project
// Add to your HTML head: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

const SkillCard = ({ skill, onCardClick, animationDelay, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const cardRect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - cardRect.left) / cardRect.width - 0.5;
    const y = (e.clientY - cardRect.top) / cardRect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleClick = () => {
    setIsAnimating(true);
    onCardClick && onCardClick();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // Function to render proficiency bar instead of dots for mobile
  const renderProficiency = () => {
    if (!isMobile) {
      // Desktop version - dots
      const dots = [];
      const totalDots = 5;
      const filledDots = Math.round((skill.proficiency / 100) * totalDots);

      for (let i = 0; i < totalDots; i++) {
        dots.push(
          <div
            key={i}
            className={`w-2 h-2 rounded-full mx-1 ${
              i < filledDots ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        );
      }

      return (
        <div className="flex justify-center mt-2 transition-all duration-300">
          {dots}
        </div>
      );
    } else {
      // Mobile version - progress bar
      return (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      );
    }
  };

  // Desktop card design
  if (!isMobile) {
    return (
      <div
        className="relative rounded-xl overflow-hidden bg-white shadow-lg h-48 transition-all duration-300 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isAnimating 
            ? "translateX(-100%)" 
            : isHovered
            ? `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${
                mousePosition.x * 8
              }deg) scale(1.05)`
            : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
          boxShadow: isHovered
            ? "0 20px 25px rgba(0, 87, 255, 0.2), 0 10px 10px rgba(0, 0, 0, 0.04)"
            : "0 4px 6px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0, 87, 255, 0.1)",
          transition: isAnimating 
            ? "transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)" 
            : "all 0.3s ease",
          animationDelay: `${animationDelay}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${
              (mousePosition.x + 0.5) * 100
            }% ${
              (mousePosition.y + 0.5) * 100
            }%, rgba(0, 87, 255, 0.15), transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Border highlight */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scaleX(1)" : "scaleX(0.5)",
          }}
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full p-4">
          {/* Floating Icon with continual animation */}
          <div
            className="mb-4 floating-icon"
            style={{
              animation: `floatingIcon 3s ease-in-out infinite ${Math.random() * 2}s`,
              transform: isHovered ? "translateY(-8px) scale(1.15)" : "translateY(0) scale(1)"
            }}
          >
            <i 
              className={`${skill.iconClass}`} 
              style={{ 
                color: skill.iconColor, 
                fontSize: '48px',
                transition: 'all 0.3s ease',
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
              }}
            ></i>
          </div>

          {/* Skill name */}
          <h3
            className="text-gray-800 font-medium text-lg text-center transition-all duration-300"
            style={{
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {skill.name}
          </h3>

          {/* Proficiency dots - visible on hover */}
          <div
            className="transition-all duration-300 flex items-center mt-2"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
            }}
          >
            {renderProficiency()}
          </div>

          {/* Description - only visible on hover */}
          <p
            className="text-sm text-gray-600 text-center mt-2 transition-all duration-300 max-w-xs"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
            }}
          >
            {skill.description}
          </p>
        </div>
      </div>
    );
  }
  
  // Mobile card design - completely new
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 mb-4"
      style={{ borderLeftColor: skill.iconColor }}
      onClick={handleClick}
    >
      <div className="p-3">
        <div className="flex items-center mb-2">
          <i 
            className={`${skill.iconClass} mr-3`} 
            style={{ 
              color: skill.iconColor, 
              fontSize: '24px' 
            }}
          ></i>
          <h3 className="font-semibold text-gray-800">{skill.name}</h3>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
          <span>Proficiency</span>
          <span>{skill.proficiency}%</span>
        </div>
        
        {renderProficiency()}
      </div>
    </div>
  );
};

const ModernSkillsShowcase = () => {
  const [animationCount, setAnimationCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  
  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleCardClick = () => {
    setAnimationCount(prev => prev + 1);
  };

  // Add categories to skills
  const skills = [
    {
      name: "HTML 5",
      iconClass: "fab fa-html5",
      iconColor: "#E34F26",
      description: "Structure web content with the latest HTML standards",
      proficiency: 95,
      category: "Frontend"
    },
    {
      name: "CSS",
      iconClass: "fab fa-css3-alt",
      iconColor: "#1572B6",
      description: "Style web pages with cascading style sheets",
      proficiency: 90,
      category: "Frontend"
    },
    {
      name: "Tailwind CSS",
      iconClass: "fab fa-css3",
      iconColor: "#06B6D4",
      description: "Utility-first CSS framework for rapid UI development",
      proficiency: 85,
      category: "Frontend"
    },
    {
      name: "JavaScript",
      iconClass: "fab fa-js",
      iconColor: "#F7DF1E",
      description: "Add interactivity and dynamic behavior to websites",
      proficiency: 92,
      category: "Frontend"
    },
    {
      name: "React.js",
      iconClass: "fab fa-react",
      iconColor: "#61DAFB",
      description: "Build interactive UIs with the popular component-based library",
      proficiency: 88,
      category: "Frontend"
    },
    {
      name: "Redux",
      iconClass: "fas fa-cubes",
      iconColor: "#764ABC",
      description: "Manage application state with predictable state containers",
      proficiency: 80,
      category: "Frontend"
    },
    {
      name: "Socket.IO",
      iconClass: "fas fa-plug",
      iconColor: "#010101",
      description: "Real-time bidirectional communication between client and server",
      proficiency: 75,
      category: "Backend"
    },
    
    {
      name: "Node.js",
      iconClass: "fab fa-node-js",
      iconColor: "#339933",
      description: "JavaScript runtime for building scalable network applications",
      proficiency: 82,
      category: "Backend"
    },
    {
      name: "Express.js",
      iconClass: "fab fa-node",
      iconColor: "#000000",
      description: "Fast, unopinionated web framework for Node.js",
      proficiency: 78,
      category: "Backend"
    },
    {
      name: "Git",
      iconClass: "fab fa-git-alt",
      iconColor: "#F05032",
      description: "Distributed version control system for tracking changes",
      proficiency: 90,
      category: "Tools"
    },
    {
      name: "Full Stack",
      iconClass: "fas fa-layer-group",
      iconColor: "#3498DB",
      description: "End-to-end development from frontend to backend",
      proficiency: 85,
      category: "Other"
    },
    {
      name: "MongoDB",
      iconClass: "fas fa-database",
      iconColor: "#47A248",
      description: "NoSQL database for modern applications",
      proficiency: 75,
      category: "Backend"
    },
  ];

  // Get all unique categories
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-white p-8" ref={sectionRef}>
      <div 
        className="max-w-6xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'opacity 0.5s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          {isMobile ? (
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
              <p className="text-gray-600 mt-4 text-sm">
                Areas of technical expertise and proficiency
              </p>
            </div>
          ) : (
            <div className="relative inline-block mb-16">
              <div className="flex items-center justify-center">
                <h1 className="poppins-bold  text-5xl text-blue-600" >Technical Skills</h1>
              </div>
              
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 opacity-80 rounded-full transform-gpu hover:scale-x-105 transition-transform duration-700"></div>
              
              <p className=" max-w-2xl poppins-medium text-gray-500 mx-auto mt-8 ">
                A comprehensive overview of my technical proficiencies and areas of expertise
              </p>
            </div>
          )}
          
          {/* Category filter - only show on mobile */}
          {isMobile && (
            <div className="mb-6 overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Skills Grid - Different layout for mobile and desktop */}
        {isMobile ? (
          <div className="space-y-3">
            {filteredSkills.map((skill, index) => (
              <div 
                key={`${index}-${animationCount}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.5s ease-out, transform 0.6s ease-out`,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <SkillCard 
                  skill={skill} 
                  onCardClick={handleCardClick}
                  animationDelay={index * 50}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={`${index}-${animationCount}`}
                className="skill-card-container"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                <SkillCard 
                  skill={skill} 
                  onCardClick={handleCardClick}
                  animationDelay={index * 50}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Add this CSS to your global styles or style component
const globalStyles = `
  @keyframes floatingIcon {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-7px); }
    100% { transform: translateY(0px); }
  }
  
  .floating-icon {
    transition: transform 0.3s ease;
  }
  
  .floating-title {
    animation: floatingTitle 5s ease-in-out infinite;
    display: inline-block;
  }
  
  @keyframes floatingTitle {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
`;

export default ModernSkillsShowcase;