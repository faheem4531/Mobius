"use client";

import React from "react";
import styles from "./ApplyForm.module.css";
import Input from "@/app/_components/input/Input";
import Button from "@/app/_components/button/Button";
import Pin from "@/app/_assets/svg/attachPin.svg";
import Image from "next/image";

const ApplyForm = () => {
  return (
    <div className={styles.formParent}>
      <div className={styles.form}>
        <h2>Join our Team</h2>
        <Input type="text" placeHolder="Name" />
        <Input type="email" placeHolder="Email Address" margin="20px 0 0" />
        <Input type="number" placeHolder="Phone " margin="20px 0 0" />
        <Input type="text" placeHolder="Job Description" margin="20px 0" />
        <div className={styles.attachDoc}>
          <Image src={Pin} alt="pin icon" className={styles.pin} />
          Attach your Resume
        </div>
        <Button text="Get a Job" color="var(--text-primary)" />
      </div>
    </div>
  );
};

export default ApplyForm;
