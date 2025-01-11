import Image from "next/image";
import headerPhoto from "../../../UI/img/headerphoto.png";
import saladImage from "../../../UI/img/foodheader.png";
import appStoreImage from "../../../UI/img/apple1.png";
import googlePlayImage from "../../../UI/img/googleplay1.png";
import backgroundImage from "../../../UI/img/bacground.jpg";

const Header = () => {
  return (
    <div
      className="bg-base-100 font-sans m-0 p-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center px-20 py-16 space-x-10">
        <div className="flex-1 space-y-5">
          <h5 className="text-green-600 text-lg font-semibold">
            Welcome to Fresh Harvest
          </h5>
          <h1 className="text-5xl font-bold text-green-800 leading-tight">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-gray-700 text-lg">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="bg-base-200 rounded-lg shadow-lg border-2  p-5 flex items-center space-x-6 mt-40">
          <div className="flex flex-col space-y-2">
            <p className="text-green-800 text-sm font-semibold">
              Special Offer
            </p>
            <p className="text-2xl font-bold text-gray-800">Fresh Salad</p>
            <p className="text-lg font-bold text-orange-500">
              <span className="text-green-600">Up to</span>{" "}
              <span className="text-black">70% Off</span>
            </p>
            <p className=" flex bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium ">
              <span>CODE: </span>
              <span className="text-yellow-500 ml-1">FRESH25</span>
            </p>
          </div>
          <Image
            src={saladImage}
            alt="Salad plate"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        <div className="">
          <Image
            src={headerPhoto}
            alt="Child holding vegetables"
            width={696}
            height={758}
            className=""
          />
        </div>
      </div>

      <div className="   bg-green-50 p-8  justify-start items-center">
        <p className="text-gray-700 font-medium">Download App:</p>
        <div>
          <div className="flex space-x-4">
            <Image
              src={appStoreImage}
              alt="App Store"
              width={120}
              height={45}
            />
            <Image
              src={googlePlayImage}
              alt="Google Play"
              width={120}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
