import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFromDocument from "../../Utils/DataFetch/getDataFromDocument";
const ItemPage = () => {
  const subImageRef = useRef()
  const mainImageRef = useRef()

  const currentLocation = useParams()
  const [data, setData] = useState([])
  const imgArr = []
  imgArr.push(data.img, data.img1, data.img2, data.img3)
  useEffect(() => {
    //getDataFromDocument('Category/Category1/Category1','Category1_item1',setData)
    getDataFromDocument(`Category/${currentLocation.CategoryId}/${currentLocation.CategoryId}`, currentLocation.itemId, setData)
  }, [])

  //console.log('data...', data)
  //console.log('ref...', subImageRef.current.src)
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="flex flex-col mt-[100px] ml-[200px] ">
        <div className="w-[500px] h-[500px] object-contain border border-black cursor-pointer overflow-hidden">
          <img ref={mainImageRef} className="transition-transform hover:scale-125" src={data.img2} alt="" />
        </div>

        <div className="flex mt-6 ">
          {imgArr.map((ele, index) => <div key={index} className="flex cursor-pointer w-[100px] h-[100px] object-contain overflow-hidden ml-3" onClick={() => {
            subImageRef.current[index].style.border = "3px solid gold"
          }}><div className="ml-2 "><img src={ele} alt="" /></div></div>)}
        </div>
      </div>
    </div>

  );
};

export default ItemPage;


//<img className="w-[100px] h-[100px] object-contain" src={data.img} alt="" />
//<img className="w-[100px] h-[100px] object-contain" src={data.img1} alt="" />
//<img className="w-[100px] h-[100px] object-contain" src={data.img2} alt="" />
//<img className="w-[100px] h-[100px] object-contain" src={data.img3} alt="" />


// <div className="lg:p-20  px-6 md:p-28  py-[100px]  w-full h-screen overflow-y-scroll">
//   <h1 className="text-lg font-bold px-3 mb-7">Item Title</h1>
//   <div className="lg:flex lg:flex-row">
//     <img
//       ref={mainImageRef}
//       className="w-full lg:w-[400px] object-contain rounded-md"
//       src={itemImageArr[0]}
//       alt="main item"
//     />

//     <div className="w-full lg:w-[600px] mt-5 grid grid-cols-4 text-center grid-rows-1 ">
//       {itemImageArr.map((ele, index) => (
//         <div key={index} className="lg:ml-4 lg:gap-4">
//           <ListItemButton className="w-full object-contain rounded-md " onClick={() => {
//             subImageRef.current[index].style.border = "3px solid gold"
//             mainImageRef.current.src = subImageRef.current[index].src
//             for (let i = 0; i < itemImageArr.length; i++) {
//               if (i !== index) {
//                 subImageRef.current[i].style.border = "none"
//               }
//             }
//             console.log("clicked", subImageRef.current[index])
//           }}>
//             <img
//               ref={(refEle) => subImageRef.current[index] = refEle}
//               name={`item image ref:${index}`}
//               className=" object-contain rounded-md"
//               src={ele}
//               alt={`img${index}`}
//             />
//           </ListItemButton>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

