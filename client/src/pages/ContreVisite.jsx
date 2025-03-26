import Arrow from "../components/Arrow";
import Navbar from "../components/Navbar";

const ContreVisite = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full md:w-2/3  min-h-screen mx-auto p-4 my-4 md:mb-0 text-justify">
        <h1 className="text-black text-center">
          Que faire en cas de contre-visite du contrôle technique ?
        </h1>

        <p className="text-black text-lg mb-4 px-2">
          Lorsqu'un véhicule échoue au contrôle technique, une contre-visite est
          souvent demandée pour vérifier que les réparations ont été effectuées.
          Voici quelques conseils pour réussir cette étape.
        </p>
        <p className="text-black text-lg px-2">
          En cas de contre-visite, il est crucial de corriger toutes les
          anomalies mentionnées lors du premier contrôle. Assurez-vous de faire
          réparer les défauts signalés avant de présenter à nouveau votre
          véhicule. Une fois les réparations effectuées, le véhicule sera
          réexaminé afin de vérifier si les problèmes ont bien été résolus.
        </p>
        {/* icone fleche */}
        <Arrow />
      </div>

      {/* Image section */}
      {/* Section cible pour le scroll */}
      <div
        id="bottom-section"
        className="w-full min-h-screen mx-auto text-justify bg-cover bg-center relative"
        style={{ backgroundImage: "url('/mecano.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20"></div>

        <h2 className="text-white text-center pt-8 pb-6 px-4 relative z-30">
          Conseils pour réussir votre contre-visite au contrôle technique
        </h2>

        <ul className="text-white text-lg mt-2 py-4 px-6 w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg relative z-30">
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">1. </span>
            Réparez les défauts mentionnés : Avant de revenir pour la
            contre-visite, assurez-vous que toutes les réparations nécessaires
            ont été effectuées par un professionnel agréé.
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">2. </span>
            Vérifiez l’état des équipements de sécurité : Si des défauts
            concernant les freins, les feux, ou les pneus ont été signalés,
            assurez-vous que ces éléments sont en bon état de fonctionnement.
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">3. </span>
            Préparez votre véhicule : Assurez-vous que votre voiture est propre
            et en bon état extérieur, car cela peut faciliter l'inspection
            visuelle.
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">4. </span>
            Apportez les documents nécessaires : Vous devrez probablement
            présenter des justificatifs des réparations effectuées, alors
            assurez-vous de les avoir avec vous lors de la contre-visite.
          </li>
          <li className="mb-3">
            <span className="text-2xl font-semibold text-orange-600">5. </span>
            Respectez les délais : Ne tardez pas à passer la contre-visite. Le
            contrôle technique a une durée limitée, et vous devrez faire la
            contre-visite dans un certain délai pour éviter des amendes.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContreVisite;
