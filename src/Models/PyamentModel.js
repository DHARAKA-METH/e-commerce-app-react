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
    <Modal open={open} onClose={handleClose}>
      <div>Dharaka</div>
    </Modal>
  );
};

export default forwardRef(PyamentModel);
