import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFromDocument from "../../Utils/DataFetch/getDataFromDocument";
const ItemPage = () => {

  const currentLocation = useParams()
  const [data, setData] = useState([])
  const imgArr = []
  imgArr.push(data.img, data.img1, data.img2, data.img3)
  useEffect(() => {
    //getDataFromDocument('Category/Category1/Category1','Category1_item1',setData)
    getDataFromDocument(`Category/${currentLocation.CategoryId}/${currentLocation.CategoryId}`, currentLocation.itemId, setData)
  }, [])


  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="flex flex-col mt-[100px] ml-[200px] ">
        <div className="w-[500px] h-[500px] object-contain rounded-xl cursor-pointer overflow-hidden">
          <img  className="transition-transform hover:scale-125" src={data.img2} alt="" />
        </div>

        <div className="flex mt-6 ">
          wire here
        </div>
      </div>
    </div>

  );
};

export default ItemPage;


