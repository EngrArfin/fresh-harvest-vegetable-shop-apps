import Image from "next/image";
import photo from "../../../UI/img/headerphoto.png";
import foodplate from "../../../UI/img/foodheader.png";
import apple from "../../../UI/img/apple1.png";
import google from "../../../UI/img/googleplay1.png";

const Header = () => {
  return (
    <div className="font-sans m-0 p-0">
      <main className="flex items-center bg-green-50 ">
        <div className="flex-1 space-y-5 space-x-14">
          <h5 className="text-green-600 ">Welcome to Fresh Harvests</h5>
          <h1 className="text-5xl font-bold text-green-800 leading-tight">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-gray-700 text-lg">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded shadow hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
        {/* card  */}
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
            <div>
              <Image
                src={foodplate}
                alt="Salad plate"
                width={150}
                height={150}
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <Image
            src={photo}
            alt="Child holding vegetables"
            width={450}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </main>

      {/* Special Offer Section */}
      {/* <section className=" ml-20 text-center">
        <div className="flex, bg-base-300 inline-block p-3 border-2 border-green-600 rounded-lg shadow-lg">
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
            <div>
              <Image
                src={foodplate}
                alt="Salad plate"
                width={150}
                height={150}
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="bg-green-50 p-8 text-start ">
        <div>
          <p className=" text-gray-700 ">Download App:</p>
        </div>
        <div className="flex">
          <div className="">
            <Image src={apple} alt="Google Play" width={100} height={60} />
          </div>
          <div className="">
            <Image src={google} alt="Google Play" width={100} height={60} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
