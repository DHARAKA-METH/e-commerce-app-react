import { useState } from "react";
import Ads from "./Ads";
import Products from "./Products";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <Ads />
      <Products title={"Trending Products.."} slidesPerView={2} />
      <Products title={"Computer, Office & Education.."} slidesPerView={3} />
    </div>
  );
};

export default Home;
