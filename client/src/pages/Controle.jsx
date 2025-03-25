import Arrow from "../components/Arrow";
import Navbar from "../components/Navbar";

const Controle = () => {
  return (
    <>
      <Navbar />
      <div className="lex flex-col w-full md:w-2/3 justify-center min-h-screen mx-auto p-4 mb-8 md:mb-0 text-justify">
        <h1 className="text-black text-center">
          A quoi sert le contrôle technique ?
        </h1>

        <p className="text-black text-lg mb-4 px-2">
          En France, le contrôle technique est un devoir citoyen régi par le
          Code de la Route aux articles (R.323-1 à R.323-22) depuis le 1er
          janvier 1992. Seuls les véhicules en état de marche sont susceptibles
          d’être présentés au contrôle technique !
        </p>
        <p className="text-black text-lg px-2">
          De nos jours, chaque propriétaire de véhicule, qu'il soit léger ou
          lourd, doit se conformer aux réglementations en vigueur concernant le
          contrôle technique avant de mettre son véhicule en circulation. Ainsi,
          il est impératif de réaliser régulièrement ce contrôle technique
          périodique. Il existe plusieurs catégories de contrôle technique,
          comme le contrôle volontaire, le contrôle complémentaire, entre
          autres. En moyenne, le coût d'un contrôle technique pour un véhicule
          léger est d'environ 77 euros. Toutefois, ce tarif peut fluctuer car il
          n'est pas imposé par une législation spécifique. Pour un véhicule qui
          entre en circulation pour la première fois, le contrôle technique doit
          être effectué dans les 6 mois précédant son quatrième anniversaire,
          puis tous les deux ans par la suite. Le nouveau contrôle technique
          permet de détecter environ 610 anomalies possibles. Un ou plusieurs
          contrôleurs experts inspectent pas moins de 133 points essentiels,
          répartis en 9 grandes catégories de vérification.
        </p>
        {/* icone fleche */}
        <Arrow />
      </div>

      {/* Image section */}
      {/* Section cible pour le scroll */}
      <div
        id="bottom-section"
        className="w-full min-h-screen mx-auto text-justify bg-cover bg-center relative"
        style={{ backgroundImage: "url('/controle.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20"></div>

        <h2 className="text-white text-center pt-8 pb-6 px-4 relative z-30">
          Les différents points de contrôle
        </h2>

        <ul className="text-white text-lg mt-2 py-4 px-6 w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg relative z-30">
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">1. </span>
            Identification du véhicule (plaques d’immatriculation, état du
            véhicule, ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">2. </span>
            Équipements de freinage (système de freinage, ABS, liquide frein,
            ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">3. </span>
            Direction (direction assistée, volant, colonne, ripage, ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">4. </span>
            Visibilité (vitrage, essuie-glaces, ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">5. </span>
            Feux, signalisation (phares, feux stop, ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">6. </span>
            Essieux, roues, pneus, suspension (jantes, pneumatiques,
            amortisseurs, ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">7. </span>
            Châssis et accessoires du châssis (tuyaux d’échappement, pare-chocs,
            ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">8. </span>
            Nuisances (émissions à l’échappement, opacité, ...)
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">9. </span>
            Autre (ceinture de sécurité, airbag, avertisseur sonore, ...)
          </li>
        </ul>
      </div>
    </>
  );
};

export default Controle;
