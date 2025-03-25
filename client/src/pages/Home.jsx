import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Map from "../components/Map";

/**
 * Page d'accueil de l'application.
 * Affiche une barre de recherche pour trouver un contrôle technique
 * et affiche les résultats sous forme de liste et de carte.
 * @returns {React.ReactElement} Le composant de la page d'accueil.
 */
const Home = () => {
  const [centres, setCentres] = useState([]); // Stocke les lieux retournés par l'API
  const [message, setMessage] = useState(""); // Stocke le message d'erreur
  const [selectedCentre, setSelectedCentre] = useState(null); // Stocke le centre sélectionné pour mettre le marker en rouge sur la carte

  /**
   * Gère la recherche de centres de contrôle technique.
   * Met à jour le state avec les centres de contrôle techniques reçus
   * de l'API ou affiche un message d'erreur si aucun résultat n'est trouvé.
   * @param {array} data Les données reçues de l'API.
   */
  const handleSearch = (data) => {
    console.log("Données reçues de l'api dans Home:", data);

    if (!data || data.length === 0) {
      console.log("Aucun résultat trouvé.");
      setMessage("Aucun résultat trouvé.");
      return;
    } else {
      setMessage(""); // Réinitialise le message d'erreur
      setCentres(data); // Met à jour le state avec les centres de contrôle techniques
    }
  };
  console.log("state centres:", centres);

  /**
   * Formatte un numéro de téléphone en ajoutant des espaces entre chaque paire de chiffres.
   * @param {string} tel - Numéro de telephone à formater
   * @returns {string} Numéro de téléphone formaté
   */
  const formatTEL = (tel) => {
    return tel.replace(
      /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,
      "$1 $2 $3 $4 $5"
    );
  };

  /**
   * Formatte une URL pour la rendre valide.
   * Supprime les espaces inutiles, corrige les "https//" et "http//"
   * en "https://" et "http://" respectivement, et ajoute "http://"
   * si l'URL ne commence pas par "http://" ou "https://"
   * @param {string} url L'URL à formater
   * @returns {string} L'URL formatée
   */
  const formatURL = (url) => {
    url = url.trim(); // Supprime les espaces inutiles

    // Corrige un "https//" en "https://"
    if (url.startsWith("https//")) {
      url = "https://" + url.slice(7);
    }

    // Corrige un "http//" en "http://"
    if (url.startsWith("http//")) {
      url = "http://" + url.slice(6);
    }

    // Vérifie si l'URL commence par "http://" ou "https://"
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    // Sinon, ajoute "http://"
    return `http://${url}`;
  };

  return (
    <div className="home-container relative min-h-screen flex flex-col">
      <Navbar />
      {/* Image de fond */}
      {centres.length === 0 ? (
        <div
          className="absolute inset-0 bg-cover bg-center h-full w-full"
          style={{ backgroundImage: "url('/bg-home.jpg')" }}
        />
      ) : (
        <div className="" />
      )}

      {/* Contenu de la page */}
      <div className="relative mt-6 md:mt-12 p-2 ">
        {centres.length === 0 && (
          <h1 className="text-white text-center">
            Trouver le contrôle technique le plus proche au meilleur prix!
          </h1>
        )}

        {/* Composant de sélection du département et de la ville */}
        <Searchbar onResults={handleSearch} setMessage={setMessage} />

        {/* Affichage du message d'erreur */}
        {message && (
          <p className="text-red-500 bg-black text-lg text-center my-3 w-full md:w-96 mx-auto p-2 rounded-xl">
            {message}
          </p>
        )}

        {/* Affichage des résultats */}
        <div className=" flex flex-col items-center justify-center md:items-start md:flex-row md:flex-wrap mt-8 gap-3">
          <ul>
            {centres.map((centre, index) => (
              <li
                key={index}
                className="bg-blue-100 text-black border border-stone-300 text-start mx-auto p-2 mb-3 rounded-md hover:cursor-pointer hover:bg-blue-200"
                onMouseOver={() => setSelectedCentre(centre)} // Selectionne le centre survolé
                onMouseLeave={() => setSelectedCentre(null)} // Reset le centre survolé lorsque la souris quitte
              >
                <p className="text-lg md:text-lg font-bold ">
                  {centre.cct_denomination}

                  <span className="text-red-500 font-semibold ml-2">
                    {centre.prix_visite
                      ? `${centre.prix_visite} €`
                      : "Prix non disponible"}
                  </span>
                </p>

                {centre.cct_adresse}
                <br />
                {centre.cct_tel
                  ? "📞" + formatTEL(centre.cct_tel)
                  : "Numéro inconnu"}
                <br />
                {centre.cct_url ? (
                  <a
                    href={formatURL(centre.cct_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline underline-offset-2 hover:text-blue-800"
                  >
                    {formatURL(centre.cct_url)}
                  </a>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          {/* Affichage de la carte */}
          {centres.length > 0 && (
            <Map centres={centres} selectedCentre={selectedCentre} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
