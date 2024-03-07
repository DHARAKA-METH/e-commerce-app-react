import { IconButton, ListItemButton } from "@mui/material";
import { useRef } from "react";

const itemImageArr = [
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://i.ebayimg.com/images/g/VTgAAOSw6jdhxEhv/s-l1600.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);
  return (
    <div className="lg:p-20  px-6 md:p-28  py-[100px]  w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold px-3 mb-7">Item Title</h1>
     <div className="lg:flex lg:flex-row"> 
      <img
      ref={mainImageRef}
        className="w-full lg:w-[400px] object-contain rounded-md"
        src={itemImageArr[0]}
        alt="main item"
      />

      <div className="w-full lg:w-[600px] mt-5 grid grid-cols-4 text-center grid-rows-1 ">
        {itemImageArr.map((ele, index) => (
          <div className="lg:ml-4 lg:gap-4">
          <ListItemButton className="w-full object-contain rounded-md " key={index} onClick={()=>{
            subImageRef.current[index].style.border="3px solid gold"
            mainImageRef.current.src=subImageRef.current[index].src
            for(let i=0;i<itemImageArr.length;i++){
              if(i!==index){
                subImageRef.current[i].style.border="none"
              }
            }
            console.log("clicked",subImageRef.current[index])}}>
            <img
            ref={(refEle)=>subImageRef.current[index]=refEle}
            name={`item image ref:${index}`}
              className=" object-contain rounded-md"
              src={ele}
              alt={`img${index}`}
            />
          </ListItemButton>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ItemPage;
