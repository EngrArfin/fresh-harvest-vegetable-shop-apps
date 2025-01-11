"use client";
import Image from "next/image";
import about from "../../../UI/img/about.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-8 lg:px-16">
      <div className="flex-shrink-0">
        <Image
          src={about}
          alt="About Fresh Harvest"
          width={686.11}
          height={574.49}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      <div className=" justify-start">
        <div className="bg-[#f5ffe6] inline-flex items-center justify-center px-3 py-1 rounded-lg gap-2">
          <p className="text-[#749B3F] font-[Rubik]  text-[20px] leading-[23.7px] font-medium tracking-[-1px]">
            About Us
          </p>
        </div>
        <h1
          className="text-[48px] leading-[56.88px] font-[Rubik] font-medium tracking-[-2%]"
          style={{ letterSpacing: "-1px" }}
        >
          About Fresh Harvest
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <button className="btn bg-white text-[#FF6A1A] border border-[#FF6A1A] px-8 py-2 text-lg font-medium rounded-md transition duration-300 hover:bg-[#FF6A1A] hover:text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
