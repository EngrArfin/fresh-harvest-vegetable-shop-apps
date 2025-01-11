"use client";
import Image from "next/image";
import details from "../../../UI/cardimg/blogimg1.png";

const Details = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-8 lg:px-16">
      <div className="flex-shrink-0">
        <Image
          src={details}
          alt="About Fresh Harvest"
          width={566}
          height={566}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      <div className=" justify-start h-[566] w-[588]">
        <div className="bg-[#f5ffe6] inline-flex items-center justify-center px-3 py-1 rounded-lg gap-2">
          <p className="text-[#749B3F] font-[Rubik]  text-[20px] leading-[23.7px] font-medium tracking-[-1px]">
            Fruits
          </p>
        </div>
        <h1
          className="text-[48px] leading-[56.88px] font-[Rubik] font-medium tracking-[-2%]"
          style={{ letterSpacing: "-1px" }}
        >
          Coconut
        </h1>
        <p>Rating 5.0 (1 review)</p>
        <p>$6.3/kg</p>
        <p className="text-gray-600 leading-relaxed">
          From our farm directly to your door, our fresh coconuts are harvested
          at the peak of ripeness, offering you a sweet, hydrating treat full of
          flavor. Packed with natural nutrients, coconut is perfect for a
          variety of culinary uses, from smoothies to savory dishes, or even for
          a refreshing drink straight from the shell.
        </p>
        <div className="flex">
          <h2>Quantity</h2>
          <div>1kg</div>
        </div>
        <div className="flex mt-5">
          <button className="btn bg-white text-[#FF6A1A] border border-[#FF6A1A] px-8 py-2 text-lg font-medium rounded-md transition duration-300 hover:bg-[#FF6A1A] hover:text-white">
            Save as favorite
          </button>
          <button className=" ml-3 btn bg-[#FF6A1A] text-white border border-[#FF6A1A] px-8 py-2 text-lg font-medium rounded-md transition duration-300 hover:bg-[#FF6A1A] hover:text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
