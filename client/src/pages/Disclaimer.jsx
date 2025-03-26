import Navbar from "../components/Navbar";

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full md:w-2/3  min-h-screen mx-auto p-4 my-4 md:mb-0 text-justify">
        <h1 className="text-black text-center">
          Comment utiliser l'application ?
        </h1>
        <p className="text-black text-lg mb-4 px-2">
          Cette application utilise des données publiques du gourvernement.
          Toutes les informations sont fournies par le site des données du
          ministère de l’Économie, des Finances et de l’Industrie et du
          ministère chargé du Budget et des Comptes publics. <br />
          <br />
          Le jeu de données est mis à jour régulièrement. Toutefois, certaines
          informations, telles que les prix, adresses ou sites web des centres
          de contrôle technique, peuvent ne pas être actualisées au moment de
          votre recherche. Ces données étant sujettes à modification par les
          centres eux-mêmes, elles peuvent donc évoluer. <br />
          <br />
          Nous vous recommandons de contacter directement le centre concerné
          pour vérifier les tarifs en vigueur et les services proposés. <br />
        </p>
        <p className="text-black italic text-lg mt-2 px-2">
          Le prix indiqué correspond à un véhicule de catégorie "Voiture
          particulière" avec une motorisation "Essence".
        </p>
      </div>
    </>
  );
};

export default Disclaimer;
