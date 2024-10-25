import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
  maxWidth: "750px",
  bgcolor: "#F3ECDA",
  border: "2px solid #F3ECDA",
  p: 4,
  color: "gray",
};

export default function ContactModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>Cointact Me</Box>
    </Modal>
  );
}
