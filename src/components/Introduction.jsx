import React from "react";
import image from "../assets/image.png";

export default function Introduction() {
  return (
    <div className="grid lg:grid-cols-[3fr,2fr] mx-auto container mt-6 lg:mt-[125px] gap-x-[99px]">
      <div>
        <h1 className="text-3xl sm:text-[40px] lg:text-[56px] text-secondary leading-10 lg:leading-[78px] text-center lg:text-left">
          Rent a <span className="text-primary">Place</span> away from{" "}
          <span className="text-primary">Home</span> in the{" "}
          <span className="text-primary">Metaverse</span>
        </h1>
        <p className="sm:text-xl lg:text-2xl text-secondary mt-4 lg:mt-12">
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
          <button className="bg-primary text-white h-12 px-4 sm:px-[87px] rounded-r-lg">
            Search
          </button>
        </div>
      </div>
      <div>
        <img src={image} alt="Images" className="w-full mt-4 sm:mt-8 lg:mt-0" />
      </div>
    </div>
  );
}
