import Header from "@/component/LandingPage/Header/Header";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Landing Page</title>
      </Helmet>
      <Header />
    </div>
  );
}
