const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route pour rechercher les centres de contrôle technique
// Récupère du frontend le nom de la ville (place) et le passe dans le paramètre de l'url
app.get("/centres", async (req, res) => {
    const { place } = req.query;
    console.log("📍 Ville reçue du frontend:", place);

    if (!place) {
        console.error("⚠️ Aucune ville fournie.");
        return res.status(400).json({ message: "La ville est requise." });
    }
    // URL de requête vers l'API "api.gouv/prix-controles-techniques"
    // Récupération des champs cct_denomination,cct_adresse,cct_code_postal,cct_tel,cct_url,prix_visite selon une ville (place) donnée par l'utilisateur.
    // Le prix de référence est basé sur la cat_vehicule_libelle = "Voiture particulière" et la cat_energie_libelle = "Essence".
    const apiUrl = `https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/prix-controle-technique/records?select=cct_denomination,cct_adresse,cct_code_postal,cct_tel,cct_url,prix_visite&where=cct_commune=%22${encodeURIComponent(place)}%22%20AND%20cat_vehicule_libelle=%22Voiture%20particuli%C3%A8re%22%20AND%20cat_energie_libelle=%22Essence%22&limit=100`;

    // URL de requête vers l'API "data.economie.gouv.fr/annuaire-centres-controle-technique"
    // Récupération des coordonnées de la ville (place) choisie par l'utilisateur 
    const coord = `https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/annuaire-centres-controle-technique/records?select=cct_denomination,latitude,longitude&where=cct_code_commune=%22${encodeURIComponent(place)}%22&limit=100`;

    try {
        // Requête vers l'API "prix-controles-techniques"
        const response = await axios.get(apiUrl);
        console.log("✅ response reçue:", response.data.results);
        const centres = response.data.results;

        // Requête vers l'API "annuaire-centres-controle-technique"
        const coordResponse = await axios.get(coord);
        console.log("✅ coordResponse reçue:", coordResponse.data.results);
        const coordonnees = coordResponse.data.results;

        if (response.data.results.length && coordResponse.data.results.length > 0) {
            // Fusion des données des deux réponses
            // Retourne un tableau de centres de contrôle techniques avec les infos des contenues dans les 2 requêtes
            const mergedData = centres.map(centre => {
                const coord = coordonnees.find(c => c.cct_denomination === centre.cct_denomination);
                return {
                    ...centre,
                    latitude: coord ? coord.latitude : null,
                    longitude: coord ? coord.longitude : null
                };
            });

            res.json(mergedData); // Renvoie les données fusionées vers le composant Home
            console.log("✅ Données fusionées:", mergedData);
        } else {
            console.warn("⚠️ Aucun centre trouvé");
            res.status(404).json({ message: `Aucun centre trouvé à ${place}` });
        }
    } catch (error) {
        console.error("❌ Erreur API:", error.message);
        res.status(500).json({ message: "Erreur lors de la recherche.", error: error.message });
    }

});

app.listen(PORT, () => {
    console.log(`✅ Serveur en marche sur le port ${PORT}`);
});
