import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Streaming
        </Link>

        {/* Botón de toggle para pantallas pequeñas */}
        <button
          className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú desplegable en pantallas pequeñas */}
        <ul className={`sm:flex ${isOpen ? "block" : "hidden"} mt-4 sm:mt-0`}>
          <li className="sm:ml-6">
            <Link to="/series" className="text-white">
              Series
            </Link>
          </li>
          <li className="sm:ml-6">
            <Link to="/peliculas" className="text-white">
              Películas
            </Link>
          </li>
          <li className="sm:ml-6">
            <Link to="/favoritos" className="text-white">
              Favoritos
            </Link>
          </li>
          <li className="sm:ml-6 flex">
              <Link to="/cuenta" className="text-white">
                Usuario
              </Link>
              <img
                // src={logo}
                alt="User"
                className="rounded-full ml-2"
                style={{ width: "30px", height: "30px" }}
              />
            </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
