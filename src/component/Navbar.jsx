import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";

const Navbar = ({ darkMode, toggleDark }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "home" },
    { name: "Skills", link: "skills" },
    { name: "Project", link: "project" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  const color = darkMode
    ? {
        navBg: "bg-gray-900",
        textPrimary: "text-white",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
      }
    : {
        navBg: "bg-white",
        textPrimary: "text-gray-900",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
      };

  const handleNavClick = (link) => {
    setActiveSection(link);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 mt-4">
      
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`max-w-6xl mx-auto flex items-center justify-between 
        px-4 py-2 rounded-2xl shadow-lg backdrop-blur-lg ${color.navBg}`}
      >
        {/* LOGO */}
        <a className={`text-xl font-bold ${color.textPrimary}`}>
          Portfolio<span className="text-orange-500">.</span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.link}`}
              onClick={() => handleNavClick(item.link)}
              className="relative"
            >
              {item.name}
              {activeSection === item.link && (
                <motion.div
                  layoutId="indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                />
              )}
            </a>
          ))}

          {/* Dark Mode */}
          <button
            onClick={toggleDark}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hire Me */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-white bg-orange-500"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`max-w-6xl mx-auto mt-3 rounded-xl shadow-lg p-4 lg:hidden ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.link}`}
              onClick={() => handleNavClick(item.link)}
              className="block py-2 text-center"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block mt-3 py-2 text-center rounded-lg text-white bg-orange-500"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;