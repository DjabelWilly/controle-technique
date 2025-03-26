import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Controle from "./pages/Controle";
import Prepare from "./pages/Prepare";
import ContreVisite from "./pages/ContreVisite";
import Disclaimer from "./pages/Disclaimer";
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <div className="App flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/controle-technique" element={<Controle />} />
          <Route path="/preparer-controle" element={<Prepare />} />
          <Route path="/contre-visite" element={<ContreVisite />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
