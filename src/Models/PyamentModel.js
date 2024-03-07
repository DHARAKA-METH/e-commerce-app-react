import * as React from "react";
import Modal from "@mui/material/Modal";

export default function PyamentModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal>
        <div>Dharaka</div>
      </Modal>
    </div>
  );
}
