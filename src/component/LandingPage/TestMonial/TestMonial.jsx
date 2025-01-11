import Title from "../Share/Title";
import Image from "next/image";
import testmonial from "../../../UI/img/testmonialimg.png";

const TestMonial = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <Title
        subHeading="Testimonial"
        heading={"What Our Customers Say"}
        generalText={
          "Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
        }
      />
      <div className="flex items-center justify-between max-w-screen-xl mx-auto mt-10">
        <div className="w-[40%] mt-[58px] ml-[213px]">
          <Image
            src={testmonial}
            alt="Customer Testimonial"
            width={287}
            height={396}
            className="rounded-[200px] shadow-lg"
          />
        </div>

        <div className="w-[55%] p-6 bg-base-200 border-r-2 rounded-lg ml-8">
          <p className="text-lg text-gray-700 italic">
            "I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It's always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs."
          </p>
          <p className="mt-4 text-lg text-gray-800">
            <span className="font-bold text-black ">Jane Doe</span> -{" "}
            Professional Chef
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestMonial;
