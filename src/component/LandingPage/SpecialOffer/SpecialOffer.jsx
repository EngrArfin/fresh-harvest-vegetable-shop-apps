"use client";
import Image from "next/image";
import bgimage from "../../../UI/img/bgoffer.jpg";
import offerfood from "../../../UI/img/offerfood.png";

const SpecialOffer = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center px-8 md:px-16"
      style={{ backgroundImage: `url(${bgimage.src})` }}
    >
      {/* Offer Details */}
      <div className="text-left max-w-lg space-y-4">
        <p className="text-lg font-semibold text-green-800 uppercase">
          Special Offer
        </p>
        <p className="text-4xl font-bold text-gray-800">Fresh Salad</p>
        <p className="text-2xl font-bold text-orange-500">
          <span className="text-black">Discount up to</span>{" "}
          <span>80% Off</span>
        </p>
        <p className="btn bg-green-600 text-sm px-4 py-2 rounded-md inline-block">
          <span className="text-white">CODE:</span>{" "}
          <span className="text-yellow-500 font-bold">FRESH25</span>
        </p>
      </div>

      {/* Offer Food Image */}
      <div className="absolute right-8 md:right-16 bottom-0">
        <Image
          src={offerfood}
          alt="Special Offer Food"
          width={627}
          height={380.5}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
