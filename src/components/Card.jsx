import React from "react";
import starIcon from "../assets/star.svg";

export default function Card({ item }) {
  return (
    <div className="border border-#D7D7D7 rounded-2xl px-4 py-4">
      <img src={item.image} alt="" className="w-full" />
      <div className="flex justify-between text-secondary text-xs mt-4">
        <p>{item.name}</p>
        <p className="font-bold	">{item.price}</p>
      </div>
      <div className="flex justify-between text-secondary text-xs mt-3">
        <p>{item.distance}</p>
        <p>{item.availability}</p>
      </div>
      <div className="mt-2 flex space-x-2">
        {[...Array(item.rating)].map((item, i) => {
          return <img src={starIcon} alt="" srcset="" />;
        })}
      </div>
    </div>
  );
}
