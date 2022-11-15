import React from "react";
import icon from "../assets/icon.svg";
import frame1 from "../assets/images/1.png";
import frame2 from "../assets/images/2.png";
import frame3 from "../assets/images/3.png";
import frame4 from "../assets/images/4.png";
import frame5 from "../assets/images/5.png";
import frame6 from "../assets/images/6.png";
import frame7 from "../assets/images/7.png";
import frame8 from "../assets/images/8.png";
import frame9 from "../assets/images/9.png";
import frame10 from "../assets/images/10.png";
import frame11 from "../assets/images/11.png";
import frame12 from "../assets/images/12.png";
import frame13 from "../assets/images/13.png";
import frame14 from "../assets/images/14.png";
import frame15 from "../assets/images/15.png";
import frame16 from "../assets/images/16.png";
import Card from "../components/Card";

const places = [
  "Restaurant",
  "Cottage",
  "Castle",
  "Fantasy city",
  "Beach",
  "Carbins",
  "Off-grid",
  "Farm",
];

const details = [
  {
    image: frame16,
    name: "Desert king",
    price: "16MBT per night",
    distance: "1645km away",
    availability: "available for 16weeks stay",
    rating: 5,
  },
  {
    image: frame1,
    name: "Desert king",
    price: "1MBT per night",
    distance: "1345km away",
    availability: "available for 1weeks stay",
    rating: 5,
  },
  {
    image: frame2,
    name: "Desert king",
    price: "2MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    rating: 5,
  },
  {
    image: frame3,
    name: "Desert king",
    price: "3MBT per night",
    distance: "3345km away",
    availability: "available for 3weeks stay",
    rating: 5,
  },
  {
    image: frame4,
    name: "Desert king",
    price: "4MBT per night",
    distance: "4345km away",
    availability: "available for 4weeks stay",
    rating: 5,
  },
  {
    image: frame5,
    name: "Desert king",
    price: "5MBT per night",
    distance: "5345km away",
    availability: "available for 5weeks stay",
    rating: 5,
  },
  {
    image: frame6,
    name: "Desert king",
    price: "6MBT per night",
    distance: "6345km away",
    availability: "available for 6weeks stay",
    rating: 5,
  },
  {
    image: frame7,
    name: "Desert king",
    price: "7MBT per night",
    distance: "7345km away",
    availability: "available for 7weeks stay",
    rating: 5,
  },
  {
    image: frame8,
    name: "Desert king",
    price: "8MBT per night",
    distance: "8345km away",
    availability: "available for 8weeks stay",
    rating: 5,
  },
  {
    image: frame9,
    name: "Desert king",
    price: "9MBT per night",
    distance: "9345km away",
    availability: "available for 9weeks stay",
    rating: 5,
  },
  {
    image: frame10,
    name: "Desert king",
    price: "10MBT per night",
    distance: "1045km away",
    availability: "available for 10weeks stay",
    rating: 5,
  },
  {
    image: frame11,
    name: "Desert king",
    price: "11MBT per night",
    distance: "1145km away",
    availability: "available for 11weeks stay",
    rating: 5,
  },
  {
    image: frame12,
    name: "Desert king",
    price: "12MBT per night",
    distance: "1245km away",
    availability: "available for 12weeks stay",
    rating: 5,
  },
  {
    image: frame13,
    name: "Desert king",
    price: "13MBT per night",
    distance: "1345km away",
    availability: "available for 13weeks stay",
    rating: 5,
  },
  {
    image: frame14,
    name: "Desert king",
    price: "14MBT per night",
    distance: "1445km away",
    availability: "available for 14weeks stay",
    rating: 5,
  },
  {
    image: frame15,
    name: "Desert king",
    price: "15MBT per night",
    distance: "1545km away",
    availability: "available for 15weeks stay",
    rating: 5,
  },
];

export default function PlacesToStay() {
  return (
    <div className="container">
      <div className="flex justify-between items-center mt-8 lg:mt-[127px] w-full">
        <nav className="w-full overflow-x-auto">
          <ul className="flex space-x-6 sm:space-x-14 ">
            {places.map((item, i) => {
              return (
                <li key={i} className="min-w-fit">
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="flex border border-[#B4B4B4] rounded-lg text-[#333333] text-base p-2 sm:p-4 ml-2">
          <span className="mr-10 hidden sm:inline">Location</span>{" "}
          <img src={icon} alt="Icon" />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6 lg:mt-[77px] sm:mb-[92px]">
        {details.map((m, i) => {
          return <Card key={i} item={m} />;
        })}
      </div>
    </div>
  );
}
