import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Un composant de navigation (Navbar) qui affiche le logo, un menu dropdown
 * avec des liens vers les différentes pages, et qui se ferme si on clique
 * en dehors ou que l'on navigue vers une autre page.
 *
 * @returns {JSX.Element}
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Référence pour détecter les clics en dehors
  const location = useLocation();

  // Ferme le menu si on navigue vers une autre page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    /**
     * Ferme le menu si on clique en dehors de la dropdown
     *
     * @param {MouseEvent} event - L'objet Event du clic
     */
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-stone-900 shadow-md p-2 flex justify-around items-center z-10">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/loupe.png" alt="Loupe" className="w-8 h-8" />
        <p className="text-orange-600 text-xl md:text-2xl font-semibold text-start">
          Contrôle Technique pas cher
        </p>
      </Link>

      {/* Dropdown */}
      <div className="relative z-10" ref={dropdownRef}>
        <a
          onClick={(e) => {
            e.stopPropagation(); // Empêche le menu de se fermer immédiatement
            setIsOpen(!isOpen);
          }}
          className="flex items-center px-6 pb-2 pt-2.5 text-white cursor-pointer hover:text-amber-300"
        >
          Informations utiles
          <span className="ms-2 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>

        {isOpen && (
          <ul className="absolute z-[1000] right-0 mt-2 w-72 rounded-md bg-stone-50 shadow-lg text-start">
            <li>
              <Link
                to="/controle-technique"
                className="block py-2 text-black hover:bg-stone-200"
              >
                🔸A quoi sert le contrôle technique ?
              </Link>
            </li>
            <li>
              <Link
                to="/preparer-controle"
                className="block py-2 text-black hover:bg-stone-200"
              >
                🔸Préparer son contrôle technique
              </Link>
            </li>
            <li>
              <Link
                to="/contre-visite"
                className="block py-2 text-black hover:bg-stone-200"
              >
                🔸La contre-visite
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
