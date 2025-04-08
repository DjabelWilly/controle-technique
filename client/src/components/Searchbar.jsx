import React, { useState, useEffect } from "react";
import { API_URL } from "../config/constants";
import axios from "axios";

/**
 * Formulaire de recherche de centre de contrôle technique.
 * Charge les départements et les villes en fonction du département selectionné.
 * Envoie une requête vers l'API avec comme paramètre la ville choisie.
 * @param {Function} onResults La fonction à appeler avec les résultats de la recherche.
 * @param {Function} setMessage La fonction à appeler pour mettre à jour le message d'erreur.
 * @returns {ReactElement} Le formulaire de recherche.
 */
const Searchbar = ({ onResults, setMessage }) => {
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Charge la liste des départements depuis l'API data.economie.gouv.fr (annuaire-centres-controle-technique)
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/annuaire-centres-controle-technique/records?select=nom_departement&group_by=nom_departement&limit=100"
        );
        console.log(response.data);
        setDepartments(response.data.results);
      } catch (error) {
        console.error("Erreur lors du chargement des départements:", error);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (!selectedDepartment) return;
    // Charger les villes en fonction du département sélectionné depuis l'API data.economie.gouv.fr (annuaire-centres-controle-technique)
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/annuaire-centres-controle-technique/records?select=cct_code_commune&where=nom_departement=%22${encodeURIComponent(
            selectedDepartment
          )}%22&group_by=cct_code_commune&limit=100`
        );

        setCities(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Erreur lors du chargement des villes:", error);
      }
    };
    fetchCities();
  }, [selectedDepartment]);

  /**
   * Gère la soumission du formulaire de recherche.
   * Envoie une requête vers l'API avec comme  paramètre la ville choisi.
   * @param {string} selectedCity La ville choisie par l'utilisateur
   * @param {Event} e L'événement de soumission du formulaire
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCity) {
      setMessage("Veuillez sélectionner une ville.");
      return;
    }
    setMessage("");

    try {
      // Requête vers l'API backend sur l'endpoint /centres avec le paramètre 'place' contenant la ville choisie
      const response = await axios.get(`${API_URL}/centres`, {
        params: { place: selectedCity },
      });
      if (response.data.length === 0) {
        setMessage("Aucun centre de contrôle technique trouvé.");
        return;
      }
      onResults(response.data); // Appelle la fonction onResults avec les centres de contrôle techniques reçus
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
      setMessage(`Aucun centre trouvé pour ${selectedCity}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center md:flex-row items-center p-2 pb-2 w-3/4 md:w-full lg:w-2/3 mx-auto"
    >
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="w-full mt-2 p-3 md:mr-3 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 text-sm md:text-base"
      >
        <option value="">Sélectionnez un département</option>
        {departments.map((dept, index) => (
          <option key={index} value={dept.nom_departement}>
            {dept.nom_departement}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full mt-2 p-3 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 text-sm md:text-base"
        disabled={!selectedDepartment}
      >
        <option value="">Sélectionnez une ville</option>
        {cities.map((city, index) => (
          <option key={index} value={city.cct_code_commune}>
            {city.cct_code_commune}
          </option>
        ))}
      </select>
      <button type="submit" className="mx-auto">
        Rechercher
      </button>
    </form>
  );
};

export default Searchbar;
