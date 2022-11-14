import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Introduction from "./components/Introduction";
import LogoSection from "./components/LogoSection";

function App() {
  // const [count, setCount] = useState(10);
  // const [user, setUser] = useState({});

  return (
    <div className="font-red-rose">
      <HeaderNav />
      <Introduction />
      <LogoSection />
    </div>
  );
}

export default App;
