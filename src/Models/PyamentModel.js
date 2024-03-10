import Modal from "@mui/material/Modal";
import { doc, setDoc } from "firebase/firestore";
import { forwardRef, useImperativeHandle, useState } from "react";
import db from "../Firebase/Firebase";

const PyamentModel = (props, ref) => {
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
      Rating :"3.5"
    })
      .then(() => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Modal
      className="flex flex-col items-center justify-center"
      open={open}
      onClose={handleClose}
    >
      <div className="w-[90%] bg-white">
        Dharaka
        <button onClick={addData}>..click</button>
      </div>
    </Modal>
  );
};

export default forwardRef(PyamentModel);
