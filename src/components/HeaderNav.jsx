import React from "react";
import logo from "../assets/logo.svg";

export default function HeaderNav() {
  return (
    <nav className="flex justify-between items-center max-w-1240 mx-auto mt-10">
      <img src={logo} alt="logo" className="h-9" />
      <ul className="flex space-x-10">
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <button className="bg-primary text-white rounded-xl h-12 px-6">
        Connect wallet
      </button>
    </nav>
  );
}
