import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Modal from "./Modal";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row justify-between sm:items-center container mt-10">
      <img src={logo} alt="logo" className="h-5 sm:h-9 w-max" />
      <ul className="flex flex-col sm:flex-row sm:space-x-8 my-4 lg:my-0">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/places-to-stay">Place to stay</a>
        </li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <button
        className="bg-primary text-white rounded-xl h-12 px-6 "
        onClick={() => setIsOpen(true)}
      >
        Connect wallet
      </button>
      {isOpen && <Modal onClose={setIsOpen} />}
    </nav>
  );
}
