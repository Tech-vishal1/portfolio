import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
      {/* Futuristic Header */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-400"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            <span className="inline-block relative">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"></span>
            </span>
            <span className="text-blue-300 ml-3">Me</span>
          </h1>
          
          <div className="mt-6 text-blue-200 text-center max-w-lg">
            Let's connect and create something amazing together.
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 backdrop-blur-sm">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-blue-400 opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-blue-400 opacity-60"></div>
            
            {/* Contact Info */}
            <div className="lg:col-span-5 bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
              
              <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h2>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500/30 p-4 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Email</h3>
                    <p className="text-white">tripathivishal215@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500/30 p-4 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Phone</h3>
                    <p className="text-white">+91-9335056509</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500/30 p-4 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm uppercase tracking-wider text-blue-300">Location</h3>
                    <p className="text-white">Noida, UP</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-12 relative z-10">
                <h3 className="text-sm uppercase tracking-wider text-blue-300 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Tech-vishal1" className="bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 p-3 rounded-xl border border-blue-400/30">
                    <svg className="w-6 h-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4l-4 4M6 16l-4-4l4-4" />
                    </svg>
                  </a>
                  <a href="www.linkedin.com/in/vishal-tripathi-10a191344" className="bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 p-3 rounded-xl border border-blue-400/30">
                    <svg className="w-6 h-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v7h4v-7M4 8h4" />
                    </svg>
                  </a>
                  <a href="mailto:tripathivishal215@gmail.com" className="bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 p-3 rounded-xl border border-blue-400/30">
                    <svg className="w-6 h-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-blue-400 opacity-20 rounded-full blur-xl"></div>
              
              <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h2>
              
              {submitMessage && (
                <div className={`p-4 mb-6 rounded-xl border ${submitMessage.type === 'success' ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-red-500/20 border-red-500/30 text-red-300'} relative z-10`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-blue-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/50 text-white placeholder-blue-200/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider text-blue-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/50 text-white placeholder-blue-200/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-blue-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/50 text-white placeholder-blue-200/50 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-700'} transition-all duration-300 shadow-lg`}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                    
                    {isSubmitting ? (
                      <span className="flex items-center relative z-10">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center relative z-10">
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-blue-800/30 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-blue-300 text-sm">
          &copy; {new Date().getFullYear()} vishal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}