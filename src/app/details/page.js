import Details from "@/component/User/Details/Details";
import RelatedProducts from "@/component/User/RelatedProducts/RelatedProducts";
import Review from "@/component/User/Review/Review";
import React from "react";

const DetailsPage = () => {
  return (
    <div>
      <Details />
      <Review />
      <RelatedProducts />
    </div>
  );
};

export default DetailsPage;
