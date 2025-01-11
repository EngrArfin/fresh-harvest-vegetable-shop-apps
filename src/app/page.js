import About from "@/component/LandingPage/About/About";
import CardData from "@/component/LandingPage/Card/CardData";
import Header from "@/component/LandingPage/Header/Header";
import OurBlog from "@/component/LandingPage/OurBlog/OurBlog";
import SpecialOffer from "@/component/LandingPage/SpecialOffer/SpecialOffer";
import TestMonial from "@/component/LandingPage/TestMonial/TestMonial";
import Details from "@/component/User/Details/Details";
import RelatedProducts from "@/component/User/RelatedProducts/RelatedProducts";
import Review from "@/component/User/Review/Review";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Details />
      <Review />
      <RelatedProducts />
      <CardData />
      <About />
      <SpecialOffer />
      <TestMonial />
      <OurBlog />
    </div>
  );
}
