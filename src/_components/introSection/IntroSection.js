"use client";

import styles from "./IntroSection.module.css";
import NavBar from "@/_components/navBar/NavBar";

const IntroSection = ({ heading1, heading2, content }) => {
  return (
    <div className={styles.introSection}>
      <NavBar />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          {heading1} <br /> <span className={styles.color}>{heading2}</span>
        </h1>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
};

export default IntroSection;
