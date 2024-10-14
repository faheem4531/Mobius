"use client";

import styles from "./AboutUs.module.css";
import Image from "next/image";
import Model from "@/app/_assets/png/aboutUs-model.png";

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.modelContainer}>
        <Image src={Model} alt="" className={styles.model} />
      </div>
      <div className={styles.content}>
        <h4>About Us</h4>
        <h2 style={{ color: "var(--text-main)", fontSize: "38px" }}>
          Impracticality To Reality
        </h2>
        <hr />
        <p>
          At Mobius Studios, 3D animation is not just a job for us. It&apos;s
          our true passion. We&apos;re a team of passionate project managers,
          creative directors, 3D animators, CGI artists, and Simulation experts
          dedicated to helping businesses tell their stories through powerful 3d
          visual content. Our focus is on making high-quality 3D animation
          accessible to all, ensuring that every business—regardless of size or
          budget—can use the power of compelling visuals to communicate its
          message effectively. We believe in the power of simplicity and
          clarity, stripping away the unnecessary to deliver animations that are
          both impactful and memorable.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
