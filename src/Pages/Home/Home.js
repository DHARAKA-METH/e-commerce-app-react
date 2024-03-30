import { useEffect, useState } from "react";
import Ads from "./Ads";
import Products from "./Products";
import Loading from "../../components/Loading/Loading";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";

const Home = () => {
  const[collectionCategoryData,setCollectionCategoryData]=useState([])
  useEffect((()=>{
    GetDataFromCollection('Category',setCollectionCategoryData)
  }),[])
  const [loading, setLoading] = useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 100);
    return<Loading />

} 
  return (
    <div className=" px-5 py-[100px] sm:px-16 md:px-[120px] lg:px-[200px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Products title={"Trending Products.."} slidesPerView={2} />
      <Products title={"Computer, Office & Education.."} slidesPerView={3} />
    </div>
  );
};

export default Home;
