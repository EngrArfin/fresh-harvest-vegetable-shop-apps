import Image from "next/image";
import bgimage from "../../../UI/img/bgoffer.jpg";
import offerfood from "../../../UI/img/offerfood.png";

const SpecialOffer = () => {
  return (
    <div>
      <div>
        <Image src={bgimage} alt="" />
        <div>
          <div>
            <div className="flex, bg-base-300 inline-block p-3 border-2 border-green-600 rounded-lg shadow-lg mt-20">
              <div className="flex">
                <div>
                  <p className=" text-green-800 ">Special Offer</p>
                  <p className="text-3xl text-gray-700">Fresh Salad</p>
                  <p className="text-xl font-bold text-orange-500">
                    {" "}
                    <span className="text-green-600">Up to</span>{" "}
                    <span className="text-black">70% Off</span>
                  </p>
                  <p className=" btn bg-green-600 text-sm">
                    {" "}
                    <span className="text-white">CODE:</span>{" "}
                    <span className="text-yellow-500 font-bold">FRESH25</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={offerfood} alt="" height={380.5} width={627} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
