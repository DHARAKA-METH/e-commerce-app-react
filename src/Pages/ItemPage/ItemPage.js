import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFromDocument from "../../Utils/DataFetch/getDataFromDocument";
import Loader2 from "../../components/Loading/Loader2/Loader2";
const ItemPage = () => {

  const MainImageRef = useRef()
  const subImageRef = useRef([])
  const currentLocation = useParams()
  const [data, setData] = useState([])
  const imgArr = []
  imgArr.push(data.img, data.img1, data.img2, data.img3)
  useEffect(() => {
    //getDataFromDocument('Category/Category1/Category1','Category1_item1',setData)
    getDataFromDocument(`Category/${currentLocation.CategoryId}/${currentLocation.CategoryId}`, currentLocation.itemId, setData)
  }, [])

  const imageHandleClick = (src, index) => {
    MainImageRef.current.src = src
    subImageRef.current[index].style.border = '2px solid gold'

    for (let i = 0; i < imgArr.length; i++) {
      if (i !== index) {
        subImageRef.current[i].style.border = 'none'
      }
    }

  }
if(data.length===0){
  return <Loader2/>
}

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full mt-[100px] flex h-screen overflow-y-scroll">
        <div className="flex flex-col  ml-[200px] ">
          <div className="w-[500px] h-[500px] object-contain rounded-xl cursor-pointer overflow-hidden">
            <img ref={MainImageRef} className="transition-transform hover:scale-125" src={data.img3} alt="" />
          </div>

          <div className="flex mt-8 ml-[-50px]  ">
            {imgArr?.map((ele, index) => <div key={index} onClick={() => imageHandleClick(ele, index)} className="cursor-pointer ml-2 p-4 w-[150px] h-[150px] overflow-hidden"><img ref={(currRef) => { subImageRef.current[index] = currRef }} src={ele} alt="" /></div>)}

          </div>

        </div>
        <div>
          <div>
            <h2 className=" " style={{
              fontSize: '40px ',
              fontFamily: 'inherit'
            }}>{data.description}</h2>
          </div>
          <div><h2>{data.price} LKR</h2></div>
        </div>
      </div>
    </div>

  );

};

export default ItemPage;


