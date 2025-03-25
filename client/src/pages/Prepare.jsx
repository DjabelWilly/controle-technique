import Navbar from "../components/Navbar";

const Prepare = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full md:w-2/3 justify-center mx-auto p-4 md:mb-0 text-justify">
        <h1 className="text-black text-center">
          Comment préparer son contrôle technique ?
        </h1>

        <div className="flex flex-col justify-center align-middle items-center p-4 md:w-3/4 mx-auto">
          <ul className="text-black text-lg text-start mb-6">
            <li className="mb-3">🛞 Vérifiez l'état des freins et des pneus.</li>
            <li className="mb-3">
              💡 Vérifiez que toutes les lumières fonctionnent.
            </li>
            <li className="mb-3">
              💧 Contrôlez le niveau d'huile et des liquides.
            </li>
            <li className="mb-3">
              👁️ Vérifiez les balais d'essuie-glace et le pare-brise.
            </li>
            <li className="mb-3">
              🔧 Assurez-vous que les éléments de suspension sont en bon état.
            </li>
            <li className="mb-3">
              ⚙️ Vérifiez le bon fonctionnement du moteur et des systèmes
              d'échappement.
            </li>
            <li className="mb-3">
              🛢️ Contrôlez les filtres à air et à carburant.
            </li>
            <li className="mb-3">
              🔋 Vérifiez l'état de la batterie et des câbles.
            </li>
            <li className="mb-3">
              🚗 Vérifiez l'alignement et la géométrie des roues.
            </li>
            <li className="mb-3">
              📑 Rassemblez tous les documents nécessaires : carte grise,
              assurance, etc.
            </li>
            <li className="mb-3">
              🔍 Faites un contrôle visuel des éléments du châssis (pare-chocs,
              pare-brise, etc.).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Prepare;
