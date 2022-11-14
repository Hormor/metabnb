import React from "react";
import nftImage from "../assets/nft.png";

export default function Nft() {
  return (
    <div className="bg-primary">
      <div className="max-w-1240 mx-auto flex justify-between">
        <div className="text-white">
          <h1 className="mt-[186px] font-bold text-5xl">Metabnb NFT</h1>
          <p className="mt-9 text-lg w-[400px]">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="mt-14 bg-white text-primary px-8 py-4 rounded-lg text-base	">
            Learn More
          </button>
        </div>
        <div className="my-[100px]">
          <img src={nftImage} alt="Nft Image" />
        </div>
      </div>
    </div>
  );
}
