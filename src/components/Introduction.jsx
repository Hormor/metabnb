import React from "react";
import image from "../assets/image.png";

export default function Introduction() {
  return (
    <div className="grid grid-cols-[3fr,2fr] mx-auto max-w-1240 mt-[125px] gap-x-[99px]">
      <div>
        <h1 className="text-[56px] text-secondary leading-[78px]">
          Rent a <span className="text-primary">Place</span> away from{" "}
          <span className="text-primary">Home</span> in the{" "}
          <span className="text-primary">Metaverse</span>
        </h1>
        <p className="text-[24px] text-secondary mt-12">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="w-full flex mt-12">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for location"
            className="border border-grey h-12 w-full rounded-l-lg placeholder:text-[#B8B8B8] py-5 px-4"
          />
          <button className="bg-primary text-white h-12 px-[87px] rounded-r-lg">
            Search
          </button>
        </div>
      </div>
      <div>
        <img src={image} alt="Images" className="w-full" />
      </div>
    </div>
  );
}
