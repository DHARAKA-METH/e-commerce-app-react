import { IconButton } from "@mui/material";
import { useRef } from "react";

const itemImageArr = [
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold px-3 mb-7">Item Title</h1>
      <img
        className="w-full object-contain rounded-md"
        src={itemImageArr[0]}
        alt="main item"
      />

      <div className="w-full mt-5 grid grid-cols-4 text-center grid-rows-1 ">
        {itemImageArr.map((ele, index) => (
          <IconButton className="w-full object-contain rounded-md " key={index}>
            <img
              className=" object-contain rounded-md"
              src={ele}
              alt={`img${index}`}
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
