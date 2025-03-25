import { useEffect } from "react";
import { useMap } from "react-leaflet";

/**
 * React composant qui met a jour le centre de la carte en fonction des coordonnees fournies en props.
 * @param {Object} props - The component props.
 * @param {Array<number>} props.center - Array contenant la latitude et la longitude
 * @returns {null}
 */
const MapUpdater = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center[0] !== 0 && center[1] !== 0) {
      map.setView(center, 12); // Change dynamiquement le centre de la carte avec zoom 12
    }
  }, [center, map]);

  return null;
};

export default MapUpdater;
