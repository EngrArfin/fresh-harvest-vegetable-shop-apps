"use client";
import { useState } from "react";
import Title from "../Share/Title";
import CartCard from "./CartCard";
/* import { Tab, Tabs, TabList } from "react-tabs"; */

const CardData = () => {
  const [tabMenu, setTabMenu] = useState(0);
  /*  const [menu] = CategoryData(); */

  /* const all = menu.filter((item) => item.category === "all");
  const fruts = menu.filter((item) => item.category === "fruts");
  const vegetable = menu.filter((item) => item.category === "vegetable");
  const salad = menu.filter((item) => item.category === "salad");
 */
  const tabTitles = ["All", "Fruts", "Vegetable", "Salad"];

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
          <li>
            <a>All</a>
          </li>

          <li>
            <a>Fruts</a>
          </li>
          <li>
            <a>Vegetable</a>
          </li>
          <li>
            <a>Salad</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[1200px] mx-auto">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
};

export default CardData;
