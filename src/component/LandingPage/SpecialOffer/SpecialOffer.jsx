"use client";
import Image from "next/image";
import bgImage from "../../../UI/img/bgoffer.jpg";
import offerFood from "../../../UI/img/offerfood.png";

const SpecialOffer = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Left Section: Offer Details */}
      <div className="text-left space-y-4 max-w-lg">
        <p className="text-sm md:text-lg font-semibold text-green-700 uppercase">
          Special Offer
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Seasonal Fruit Bundle
        </h1>
        <p className="text-xl md:text-2xl font-bold text-orange-500">
          <span className="text-gray-800">Discount up to</span>{" "}
          <span>80% OFF</span>
        </p>

        {/* Countdown Timer */}
        <div className="flex space-x-4 text-center">
          {["Days", "Hours", "Min", "Sec"].map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-200 text-gray-800 font-bold text-lg w-16 h-16 flex items-center justify-center rounded-md">
                00
              </div>
              <span className="text-sm text-gray-600">{unit}</span>
            </div>
          ))}
        </div>

        {/* Discount Code */}
        <div className="bg-green-700 text-white inline-flex items-center px-4 py-2 rounded-md mt-4">
          <span className="text-sm">CODE:</span>
          <span className="text-yellow-400 font-bold ml-2">FRUIT28</span>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="absolute md:relative bottom-0 right-6 md:right-16">
        <Image
          src={offerFood}
          alt="Special Offer Food"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
