import About from "@/component/LandingPage/About/About";
import CardData from "@/component/LandingPage/Card/CardData";
import Header from "@/component/LandingPage/Header/Header";
import OurBlog from "@/component/LandingPage/OurBlog/OurBlog";
import SpecialOffer from "@/component/LandingPage/SpecialOffer/SpecialOffer";
import TestMonial from "@/component/LandingPage/TestMonial/TestMonial";

export default function Home() {
  return (
    <div className="">
      <Header />
      <CardData />
      <About />
      <SpecialOffer />
      <TestMonial />
      <OurBlog />
    </div>
  );
}
