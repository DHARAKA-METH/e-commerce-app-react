import Modal from "@mui/material/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";

const PyamentModel = (props, ref) => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  return (
    <Modal className="flex flex-col items-center justify-center" open={open} onClose={handleClose}>
      <div className="w-[90%] bg-white">Dharaka</div>
    </Modal>
  );
};

export default forwardRef(PyamentModel);
