import React, { useEffect, useState } from 'react';

export default function AboutMe() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Modern gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        
        {/* Abstract elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-30"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
        <div className={`w-full max-w-4xl transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Modern card with subtle glassmorphism */}
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white">
            {/* Header with gradient */}
            <div className="h-8 bg-gradient-to-r from-blue-500 to-blue-400"></div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Profile picture with animated border */}
                <div className="mb-8 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full opacity-75 blur animate-slow-spin"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
  {/* Image */}
  <img
    src="/Assets/v.jpg"
    alt="Vishal Tripathi "
    className="w-full h-full object-cover"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'flex';
    }}
  />

  {/* Fallback - hidden by default */}
  <div
    className="absolute inset-0 hidden items-center justify-center bg-blue-500 text-white text-6xl"
  >
    <span>vv</span>
  </div>
</div>

                </div>
                
                {/* Name with gradient text */}
                <h1 className="text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Hi, I'm <strong>Vishal Tripathi</strong>
                  </span>
                </h1>
                
                {/* Title badge */}
                <div className="mb-8">
                  <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-medium shadow-sm">
                    <span className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                      MERN Stack Developer | BBA Graduate
                    </span>
                  </span>
                </div>
                
                {/* Bio content */}
                <div className="text-slate-600 space-y-5 text-lg max-w-2xl">
                  <p>
                    A passionate <strong className="text-blue-600">MERN Stack Developer</strong> and a recent <strong className="text-blue-600">BBA graduate</strong>. Although I'm a fresher, I've actively worked on various hands-on projects that have given me real-world insights and practical knowledge.
                  </p>
                  <p>
                    My journey into web development began with curiosity and quickly evolved into a strong passion for building user-centric applications. Working with the MERN stack has helped me understand both the frontend and backend deeply, and each project I've built has strengthened my problem-solving and coding abilities.
                  </p>
                  <p>
                    I believe in clean, maintainable code and constantly seek opportunities to learn and grow. I'm now looking forward to joining a dynamic team where I can contribute, grow, and continue pushing my limits as a developer.
                  </p>
                </div>
                {/* Get In Touch button */}
                <div className="mt-10">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-medium shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                
                    Get In Touch
           
                  </button>
                </div>
              </div>
            </div>
            
            {/* Bottom accent */}
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500"></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-70 shadow-lg"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-70 shadow-lg"></div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-slow-spin {
          animation: slow-spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
}