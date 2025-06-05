import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center items-center">
          <p className="text-blue-600 font-medium text-sm tracking-wide">
            © {new Date().getFullYear()} <span className="text-blue-500">ALL RIGHTS RESERVED</span>
          </p>
        </div>
      </div>
    </footer>
  )
}