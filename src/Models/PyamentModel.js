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
    setDoc(doc(db, "cities", "002"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef);
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
