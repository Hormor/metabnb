import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Introduction from "./components/Introduction";
import LogoSection from "./components/LogoSection";
import Inspirations from "./components/Inspirations";
import Nft from "./components/Nft";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(10);
  // const [user, setUser] = useState({});

  return (
    <div className="font-red-rose">
      <HeaderNav />
      <Introduction />
      <LogoSection />
      <Inspirations />
      <Nft />
      <Footer />
    </div>
  );
}

export default App;
