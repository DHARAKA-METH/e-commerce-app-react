import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFromDocument from "../../Utils/DataFetch/getDataFromDocument";
const ItemPage = () => {

  const MainImageRef = useRef()
  const subImageRef = useRef()
  const currentLocation = useParams()
  const [data, setData] = useState([])
  const imgArr = []
  imgArr.push(data.img, data.img1, data.img2, data.img3)
  useEffect(() => {
    //getDataFromDocument('Category/Category1/Category1','Category1_item1',setData)
    getDataFromDocument(`Category/${currentLocation.CategoryId}/${currentLocation.CategoryId}`, currentLocation.itemId, setData)
  }, [])

  const imageHandleClick = (src) => {
MainImageRef.current.src=src
  }


  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="flex flex-col mt-[100px] ml-[200px] ">
        <div className="w-[500px] h-[500px] object-contain rounded-xl cursor-pointer overflow-hidden">
          <img ref={MainImageRef} className="transition-transform hover:scale-125" src={data.img2} alt="" />
        </div>

        <div className="flex mt-6 ">
          {imgArr?.map((ele, index) => <div key={index} onClick={()=>imageHandleClick(ele)} className="w-[100px] h-[100px]"><img ref={subImageRef} src={ele} alt="" /></div>)}
        </div>
      </div>
    </div>

  );

};

export default ItemPage;


