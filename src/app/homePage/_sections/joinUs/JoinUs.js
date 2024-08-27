"use client";

import styles from "./JoinUs.module.css";
import Image from "next/image";
import BackGround from "@/app/_assets/png/join-us-bg.png";
import Button from "@/app/_components/button/Button";
import Model from "@/app/_assets/svg/joinUs-model.svg";
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.imagWrap}>
        <Image alt="" src={BackGround} className={styles.background} />
        <div className={styles.content}>
          <p
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "var(--text-main)",
              marginBottom: "40px",
            }}
          >
            Want to Work Together?
          </p>
          <Link href="/carrers">
            <Button text="Join Us Now" />
          </Link>
        </div>
      </div>
      <Image alt="" src={Model} className={styles.model} />
    </div>
  );
};

export default JoinUs;
