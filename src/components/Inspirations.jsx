import React from "react";
import Card from "./Card";
import image1 from "../assets/images/4.png";
import image2 from "../assets/images/5.png";
import image3 from "../assets/images/6.png";
import image4 from "../assets/images/7.png";
import image5 from "../assets/images/16.png";
import image6 from "../assets/images/1.png";
import image7 from "../assets/images/2.png";
import image8 from "../assets/images/3.png";

const inspirations = [
  {
    image: image1,
    name: "Desert king",
    price: "1MBT per night",
    distance: "1345km away",
    availability: "available for 1weeks stay",
    rating: 5,
  },
  {
    image: image2,
    name: "Desert queen",
    price: "2MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    rating: 5,
  },
  {
    image: image3,
    name: "Desert prince",
    price: "3MBT per night",
    distance: "3345km away",
    availability: "available for 3weeks stay",
    rating: 4,
  },
  {
    image: image4,
    name: "Desert princess",
    price: "4MBT per night",
    distance: "4345km away",
    availability: "available for 4weeks stay",
    rating: 4,
  },
  {
    image: image5,
    name: "Desert baby",
    price: "5MBT per night",
    distance: "5345km away",
    availability: "available for 5weeks stay",
    rating: 4,
  },
  {
    image: image6,
    name: "Desert uncle",
    price: "6MBT per night",
    distance: "6345km away",
    availability: "available for 6weeks stay",
    rating: 4,
  },
  {
    image: image7,
    name: "Desert aunty",
    price: "7MBT per night",
    distance: "7345km away",
    availability: "available for 7weeks stay",
    rating: 4,
  },
  {
    image: image8,
    name: "Desert cousin",
    price: "8MBT per night",
    distance: "8345km away",
    availability: "available for 8weeks stay",
    rating: 4,
  },
];

export default function Inspirations() {
  return (
    <div className="container">
      <h1 className="font-bold text-3xl sm:text-5xl mt-10 text-center">
        Inspiration for your next adventure
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-8 sm:mt-11 mb-12">
        {inspirations.map((m, i) => {
          return <Card key={i} item={m} />;
        })}
      </div>
    </div>
  );
}
