"use client";
import { useState } from "react";
import Title from "../Share/Title";
import CartCard from "./CartCard";

const CardData = () => {
  const [showAll, setShowAll] = useState(false);
  const allCards = Array(12).fill(null);

  const visibleCards = showAll ? allCards : allCards.slice(0, 8);

  return (
    <div>
      <Title
        subHeading="Our Products"
        heading={"Our Fresh Products"}
        generalText={
          "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        }
      ></Title>

      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal px-1">
          {["All", "Fruts", "Vegetable", "Salad"].map((title, index) => (
            <li key={index} onClick={() => console.log(`Switched to ${title}`)}>
              <a>{title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[1200px] mx-auto">
        {visibleCards.map((_, index) => (
          <CartCard key={index} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-6">
          <button
            className="btn bg-white text-[#FF6A1A] px-8 py-2 text-lg rounded-md"
            onClick={() => setShowAll(true)}
          >
            See All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default CardData;
