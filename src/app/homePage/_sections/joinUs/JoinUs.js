"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";

import styles from "./JoinUs.module.css";
import BackGround from "@/app/_assets/png/join-us-bg.webp";
import Model from "@/app/_assets/svg/joinUs-model.svg";
import MaskButton from "@/app/_components/button/MaskButton";
import ContactModal from "@/app/_components/modal/ContactModal";

const JoinUs = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={styles.joinUs}>
        <div className={styles.imagWrap}>
          <Image
            alt="background image"
            src={BackGround}
            className={styles.background}
          />
          <div className={styles.content}>
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "20px", lg: "38px" },
                fontWeight: { xs: 400, sm: 500, lg: 600 },
                color: "var(--text-main)",
                fontFamily: "Avenir !important",
                marginBottom: { xs: "27px", sm: "30px", lg: "50px" },
              }}
            >
              Still confused on 3d?
            </Typography>
            <Box sx={{ width: { lg: "265px", sm: "240px", xs: "230px" } }}>
              <MaskButton
                text="Get Free Consultation"
                onClick={() => setModal(true)}
              />
            </Box>
          </div>
        </div>
        <Image
          alt="Metaleon 3d character"
          src={Model}
          className={styles.model}
        />
      </div>

      <ContactModal open={modal} setOpen={setModal} />
    </>
  );
};

export default JoinUs;
