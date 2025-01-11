import Image from "next/image";
import blogimg1 from "../../../UI/cardimg/blogimg1.png";
import blogimg2 from "../../../UI/cardimg/blogimg2.png";
import blogimg3 from "../../../UI/cardimg/blogimg3.png";
import Title from "../Share/Title";

const OurBlog = () => {
  return (
    <div>
      <Title
        subHeading="Our Blog"
        heading={"Fresh Harvest Blog"}
        generalText={
          "Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        }
      />
      <div className=" flex">
        <div className="card w-[282px] h-[360px] bg-white  mx-auto p-4">
          <figure className="flex justify-center items-center">
            <Image
              src={blogimg1}
              alt="Mushroom"
              width={254}
              height={208}
              className="rounded-lg bg-base-200"
            />
          </figure>
          <div className=" mt-4">
            <p className="text-sm text-gray-600 mt-2 mb-2">May 23, 2024</p>
            <h2 className="font-bold text-black">
              Exploring Seasonal Delights: A Guide to What's Fresh Right Now
            </h2>
            <button
              className="w-[258px] h-[45px] text-red-500 text-[18px] font-[600] 
            leading-[21.33px] tracking-[-2%] py-[12px] flex gap-[10px]"
            >
              Read More
              <span className="text-[18px] ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="card w-[282px] h-[360px] bg-white  mx-auto p-4">
          <figure className="flex justify-center items-center">
            <Image
              src={blogimg2}
              alt="Mushroom"
              width={254}
              height={208}
              className="rounded-lg bg-base-200"
            />
          </figure>
          <div className=" mt-4">
            <p className="text-sm text-gray-600 mt-2 mb-2">May 23, 2024</p>
            <h2 className="font-bold text-black">
              Mastering Salad Creations: Tips and Tricks for Building Delicious
              and Nutritious Salads"
            </h2>
            <button
              className="w-[258px] h-[45px] text-red-500 text-[18px] font-[600] 
            leading-[21.33px] tracking-[-2%] py-[12px] flex gap-[10px]"
            >
              Read More
              <span className="text-[18px] ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="card w-[282px] h-[360px] bg-white  mx-auto p-4">
          <figure className="flex justify-center items-center">
            <Image
              src={blogimg3}
              alt="Mushroom"
              width={254}
              height={208}
              className="rounded-lg bg-base-200"
            />
          </figure>
          <div className=" mt-4">
            <p className="text-sm text-gray-600 mt-2 mb-2">May 23, 2024</p>
            <h2 className="font-bold text-black">
              The Art of Meal Prepping: How to Save Time and Eat Healthy
              Throughout the Week{" "}
            </h2>
            <button
              className="w-[258px] h-[45px] text-red-500 text-[18px] font-[600] 
            leading-[21.33px] tracking-[-2%] py-[12px] flex gap-[10px]"
            >
              Read More
              <span className="text-[18px] ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
