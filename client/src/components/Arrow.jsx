import { useCallback } from "react";
import { scroller } from "react-scroll";
import arrow from "/arrow.svg";

/**
 * Un composant qui affiche une flèche pointant vers le bas et qui, lorsque cliqué,
 * fait défiler la page vers la section nommée "bottom-section" en 1 seconde
 * avec un effet d'acceleration de type "easeOutQuad" et un décalage de 50 pixels.
 */
const Arrow = () => {
  const handleArrowClick = useCallback(() => {
    scroller.scrollTo("bottom-section", {
      duration: 1000, // durée du scroll en ms
      smooth: "easeOutQuad", // easing à la fin du scroll
      offset: 30, // Décale vers le bas de 50 pixels
    });
  }, []);

  return (
    <img
      id="arrow-icon"
      src={arrow}
      alt="arrow-icon"
      onClick={handleArrowClick}
    />
  );
};

export default Arrow;
