import React from "react";
import logoWhite from "../assets/logoWhite.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="flex justify-between bg-[#1D1D1E] text-white">
      <div className="container flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-between mx-auto w-full my-14">
        <div>
          <img src={logoWhite} alt="Metabnb Image" className="h-7 sm:h-auto" />
          <div className="flex space-x-8 my-6 sm:mt-24 sm:mb-14">
            <img src={facebook} alt="Fecebook Image" />
            <img src={instagram} alt="Instagram Image" />
            <img src={twitter} alt="Twitter Image" />
          </div>
          &copy; 2022 Metabnb
        </div>
        <div>
          <p className="font-bold text-lg mb-6">Community</p>
          <ul className="text-sm space-y-4 text-[#F1F3F9]">
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg mb-6">Places</p>
          <ul className="text-sm space-y-4 text-[#F1F3F9]">
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg mb-6">About us</p>
          <ul className="text-sm space-y-4 text-[#F1F3F9]">
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
