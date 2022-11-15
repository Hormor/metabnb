import React from "react";
import nftImage from "../assets/nft.png";

export default function Nft() {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col sm:flex-row justify-between sm:space-x-4">
        <div className="text-white">
          <h1 className="mt-10 sm:mt-20 lg:mt-[186px] font-bold text-3xl sm:text-5xl">
            Metabnb NFT
          </h1>
          <p className="mt-4 sm:mt-9 sm:text-lg sm:w-[330px] lg:w-[400px]">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="mt-4 sm:mt-14 bg-white text-primary px-8 py-4 rounded-lg text-sm sm:text-base">
            Learn More
          </button>
        </div>
        <div className="my-10 sm:my-[100px]">
          <img src={nftImage} alt="Nft Image" />
        </div>
      </div>
    </div>
  );
}
