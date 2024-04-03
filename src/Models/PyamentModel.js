import Modal from "@mui/material/Modal";
import { doc, setDoc } from "firebase/firestore";
import { forwardRef, useImperativeHandle, useState } from "react";
import db from "../Firebase/Firebase";
import { useSelector } from "react-redux";

const PyamentModel = (props, ref) => {
  const ShoppingCartData = useSelector((store) => store.ShopingCart);
  //console.log('ShoppingCartData...',ShoppingCartData.Items)
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  const addData = () => {
    setDoc(doc(db, "Category/Category4/Category4", " Category4_item1 "), {
      title: "Category4_item1",
      img: "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
      Rating: "3.5",
    })
      .then(() => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  const ItemUnit = ({ imgLink, unitPrice, Qty, Total }) => {
    return (
      <div className="grid grid-cols-4  grid-rows-[auto]">
        <div className="w-[50px] h-[50px] overflow-hidden">
          {" "}
          <img src={imgLink} alt="" />
        </div>
        <div>100</div>
        <div>10</div>
        <div> 10</div>
      </div>
    );
  };

  return (
    <Modal
      className="flex justify-center items-center overflow-y-scroll"
      open={open}
      onClose={handleClose}
    >
      <div className=" w-[95%] h-[auto] p-5 bg-gray-200 flex overflow-y-scroll  ">
        <div className="w-3/4">
          <div className="grid grid-cols-4 text-sm font-semibold grid-rows-[auto]">
            <div>Product</div>
            <div>Price</div>
            <div>Qty</div>
            <div>Total</div>
          </div>
          <div className="mt-1">
            {ShoppingCartData.Items.map(({ imgLink }, index) => (
              <ItemUnit key={index} imgLink={imgLink} />
            ))}
            {/* <ItemUnit imgLink={"https://rb.gy/302mre"} /> */}
          </div>
        </div>
        <div className="w-1/4">
          <div className="w-full h-[auto] p-5 bg-white">
            <h1 className="font-bold ml-2">Summary</h1>
            <div className="flex justify-between">
              <h3>Discount :</h3>
              <h3>00.00</h3>
            </div>
            <div className="flex justify-between">
              <h3>Tax :</h3>
              <h3>00.00</h3>
            </div>
            <hr className="border border-black" />
            <div className="flex justify-between">
              <h3>Balance :</h3>
              <h3>1000.00</h3>
            </div>
            <div className=" mt-2 w-full h-[50px] flex justify-center items-center rounded-3xl bg-blue-600 text-white text-lg font-semibold border border-black hover:bg-black cursor-pointer ">
              <button>CheckOut</button>
            </div>
          </div>
          {/* <button onClick={addData}>..click</button> */}
        </div>
      </div>
    </Modal>
  );
};
export default forwardRef(PyamentModel);
