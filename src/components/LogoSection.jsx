import React from "react";
import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";

export default function LogoSection() {
  return (
    <div className=" bg-primary mt-16">
      <div className="flex justify-between max-w-1240 mx-auto">
        <img src={mbtoken} alt="MBToken Logo" />
        <img src={metamask} alt="METAMASK Logo" />
        <img src={opensea} alt="OpenSea Logo" />
      </div>
    </div>
  );
}
