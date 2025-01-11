const Review = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <div className="flex">
        <button className=" ml-3 btn bg-[#749B3F] text-white border  px-8 py-2 text-lg font-medium rounded-md transition duration-300 hover:bg-[#FF6A1A] hover:text-white">
          Description
        </button>
        <button className=" ml-3 btn bg-white text-[#A6A6A6] border border-[#D9D9D9] px-8 py-2 text-lg font-medium rounded-md transition duration-300 hover:bg-[#FF6A1A] hover:text-white">
          Reviews (1)
        </button>
      </div>
      <div className="flex items-center justify-between max-w-screen-xl mx-auto mt-10">
        <div className="w-[90%] p-6 bg-base-200 border-r-2 rounded-lg ml-8">
          <p className="text-lg text-gray-700 italic">
            Our coconuts are sustainably grown, ensuring the best quality and
            taste. Each coconut is handpicked and carefully prepared, offering
            you the freshest product possible. Rich in healthy fats,
            electrolytes, and essential nutrients, coconuts provide both
            hydration and nourishment. Whether you’re using the water, flesh, or
            milk,
            <br /> our coconuts bring versatility to your kitchen while
            supporting healthy living. Perfect for smoothies, desserts, curries,
            and more — let the natural sweetness of the coconut elevate your
            recipes. Enjoy the tropical goodness in its purest form, directly
            from nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
