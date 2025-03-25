import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapUpdater from "../components/MapUpdater";
import L from "leaflet";

/**
 * Composant de la carte affichant les centres de contrôle technique.
 * Les centres sont affichés en fonction de la liste `centres` passée en props.
 * Le centre de la carte est mis à jour en fonction de la liste `centres`.
 * Le centre sélectionné est indiqué par un marqueur rouge.
 * @param {Object[]} centres - La liste des centres de contrôle technique.
 * @param {Object} selectedCentre - Le centre de contrôle technique sélectionné.
 * @returns {ReactElement} Le composant de la carte.
 */
const Map = ({ centres, selectedCentre }) => {
  const [center, setCenter] = useState([0, 0]); // Centre de la carte

  useEffect(() => {
    if (centres.length > 0) {
      const firstCenter = centres[0];
      if (firstCenter.latitude && firstCenter.longitude) {
        setCenter([
          parseFloat(firstCenter.latitude),
          parseFloat(firstCenter.longitude),
        ]);
      }
    }
  }, [centres]);

  const defaultIcon = L.icon({
    iconUrl: "/marker-icon.png", // URL vers l'icône par défaut de Leaflet
    iconSize: [25, 41], // Taille de l'icône
    iconAnchor: [12, 41], // Ancrage de l'icône
    popupAnchor: [1, -34], // Position du popup
  });

  const selectedIcon = L.icon({
    iconUrl: "/red-marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer className="map-container" center={center} zoom={12}>
      {/* composant de mise à jour du centre de la carte */}
      <MapUpdater center={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {centres.map((c, index) => (
        <Marker
          key={index}
          position={[parseFloat(c.latitude), parseFloat(c.longitude)]}
          icon={
            selectedCentre &&
            selectedCentre.cct_denomination === c.cct_denomination
              ? selectedIcon
              : defaultIcon
          }
        >
          <Popup>
            <h3 className="font-bold">{c.cct_denomination}</h3>
            <p>{c.cct_adresse}</p>
            <p className="text-red-500">{c.prix_visite}€</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
