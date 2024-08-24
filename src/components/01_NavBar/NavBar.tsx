import React, { useState } from "react";
import { ModeToggle } from "./ModeToogle";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-[#121212] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <div className="flex space-x-2 justify-center text-center items-center">
              <p className="text-2xl font-extrabold text-black dark:text-white">
                SPEED
              </p>
              <p className="text-lg">©</p>
            </div>
          </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#home" className=" text-sm hover:text-blue-500">
              Proyectos
            </a>
            <a href="#services" className=" text-sm hover:text-blue-500">
              Nosotros
            </a>
            <a href="#about" className=" text-sm hover:text-blue-500">
              Cursos
            </a>
            <a href="#contact" className=" text-sm hover:text-blue-500">
              Contacto
            </a>
            <ModeToggle />
          </div>
          <div className="md:hidden justify-center items-center space-x-2">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-800 border p-[7px] rounded-md hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-[22px] w-[22px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border shadow-md dark:bg-black text-[14px] w-1/3  mx-60 rounded-lg">
          <a
            href="#home"
            className="block  hover:text-blue-500 px-4 py-1"
          >
            Proyectos
          </a>
          <a
            href="#services"
            className="block  hover:text-blue-500 px-4 py-1"
          >
            Nosotros
          </a>
          <a
            href="#about"
            className="block  hover:text-blue-500 px-4 py-1"
          >
            Cursos
          </a>
          <a
            href="#contact"
            className="block  hover:text-blue-500 px-4 py-1"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
