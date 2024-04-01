import { useEffect, useState } from "react";
import Ads from "./Ads";
import Products from "./Products";
import Loading from "../../components/Loading/Loading";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";
import HomeDesign from "./HomeDesign";
import HomeBody from "./HomeBody";
import FooterDesign from "../../components/Footer/FooterDesign";

const Home = () => {
  const [collectionCategoryData, setCollectionCategoryData] = useState([])
  useEffect((() => {
    GetDataFromCollection('Category', setCollectionCategoryData)
  }), [])
  const [loading, setLoading] = useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 100);
    return <Loading />

  }
  return (
    <div className=" w-full h-screen overflow-y-scroll">
    
    <HomeDesign/> {/*Header ****************************/}
    <HomeBody/>
    <FooterDesign/>
      {/* <Products title={"Trending Products.."} slidesPerView={2} />
      <Products title={"Computer, Office & Education.."} slidesPerView={3} /> */}
    </div>
  );
};

export default Home;
