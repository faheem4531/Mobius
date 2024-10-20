"use client";

import styles from "./JoinUs.module.css";
import Image from "next/image";
import BackGround from "@/app/_assets/png/join-us-bg.png";
import Button from "@/app/_components/button/Button";
import Model from "@/app/_assets/svg/joinUs-model.svg";
import Link from "next/link";
import { Typography, Box } from "@mui/material";

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.imagWrap}>
        <Image alt="" src={BackGround} className={styles.background} />
        <div className={styles.content}>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "20px", lg: "38px" },
              fontWeight: { xs: 400, sm: 500, lg: 600 },
              color: "var(--text-main)",
              marginBottom: { xs: "27px", sm: "30px", lg: "50px" },
            }}
          >
            Still confused on 3d?
          </Typography>
          <Box sx={{ width: { lg: "265px", sm: "240px", xs: "230px" } }}>
            <Link href="/carrers">
              <Button width="100%" text="Get Free Consultation" />
            </Link>
          </Box>
        </div>
      </div>
      <Image alt="" src={Model} className={styles.model} />
    </div>
  );
};

export default JoinUs;
