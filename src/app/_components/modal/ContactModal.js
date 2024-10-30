import { useState } from "react";
import axios from "axios";
import { Box, Modal, Typography, TextField } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@/app/_components/button/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "90%", md: "100%" },
  maxWidth: "600px",
  bgcolor: "#CECECE",
  color: "black",
  borderRadius: "10px",
};

export default function ContactModal({ open, setOpen }) {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.message === ""
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);

    try {
      setLoading(true);

      const response = await axios.post("/api/contactus", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(`Failed to send email: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(`Error sending email: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: {
          backdropFilter: "blur(4px)",
        },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            padding: { xs: "0 20px", md: "0 40px" },
            textAlign: "center",
            margin: { xs: "50px 0", md: "70px 0" },
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontSize: 24,
              fontWeight: 300,
              marginBottom: { xs: 3.5, md: 4.5 },
              fontFamily: "Avenir3 !important",
            }}
          >
            Feel free to connect with us...
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Phone"
              name="phone"
              type="number"
              onChange={handleChange}
              value={formData.phone}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Project Description"
              name="message"
              multiline
              rows={5}
              onChange={handleChange}
              value={formData.message}
              sx={{
                backgroundColor: "transparent",
                marginTop: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                },
              }}
            />
            {showError && (
              <Typography
                sx={{
                  textAlign: "start",
                  color: "error.main",
                  marginTop: 1,
                }}
              >
                Fill all the above fields
              </Typography>
            )}
            <Button
              text={loading ? "Sending..." : "Submit"}
              type="submit"
              margin="40px 0 0"
              disabled={loading}
            />
          </form>
        </Box>
      </Box>
    </Modal>
  );
}
