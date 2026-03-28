import React from 'react'
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t ${
        darkMode
          ? "bg-gradient-to-b from-black to-gray-900 border-gray-700"
          : "bg-gradient-to-b from-gray-100 to-gray-200 border-gray-300"
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 py-8'>
        
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left'>
          
          {/* Left */}
          <div>
            <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text'>
              Portfolio
            </h3>

            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Social */}
          <div className='flex gap-4'>
            <a
              href="https://github.com/"
              
              target='_blank'
              className={`w-10 h-10 flex items-center justify-center rounded-full 
              transition-all duration-300 hover:scale-110
              ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
                  : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white"
              }`}
            >
              <FaGithub />
            </a>
              
          </div>
          

           
              
          

        </div>

        {/* Bottom */}
        <div className='text-center mt-6'>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            © {currentYear} Gurpreet Singh. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer