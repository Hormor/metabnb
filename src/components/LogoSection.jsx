import React from "react";
import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";

export default function LogoSection() {
  return (
    <div className=" bg-primary mt-16">
      <div className="flex flex-col sm:flex-row justify-between container space-y-4 sm:space-y-0 py-4 sm:py-0">
        <img src={mbtoken} alt="MBToken Logo" className="h-8 sm:h-auto" />
        <img src={metamask} alt="METAMASK Logo" className="h-8 sm:h-auto" />
        <img src={opensea} alt="OpenSea Logo" className="h-8 sm:h-auto" />
      </div>
    </div>
  );
}
