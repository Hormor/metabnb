import React from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import LogoSection from "./components/LogoSection";
import Inspirations from "./components/Inspirations";
import Nft from "./components/Nft";

function App() {
  return (
    <div className="font-red-rose">
      <Introduction />
      <LogoSection />
      <Inspirations />
      <Nft />
    </div>
  );
}

export default App;
