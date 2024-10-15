"use client";

import { useState } from "react";
import styles from "./IntroSection.module.css";
import Image from "next/image";
import NavBar from "@/app/_components/navBar/NavBar";
import Title from "@/app/_assets/svg/heading.svg";
import Button from "@/app/_components/button/Button";
import Close from "@/app/_assets/svg/close.svg";

const IntroSection = () => {
  const [showVideo, setShoewVideo] = useState(false);

  function handleVideo() {
    setShoewVideo(true);
  }
  function handleCloseVideo() {
    setShoewVideo(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgVideo}>
        <video className={styles.bgVideoContent} autoPlay muted loop>
          <source src="video/showreel-3d-animation.webm" type="video/webm" />
        </video>
      </div>
      {showVideo && (
        <div className={styles.videoParent}>
          <video controls className={styles.video} autoPlay>
            <source src="video/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src={Close}
            alt=""
            className={styles.closeVideo}
            onClick={handleCloseVideo}
          />
        </div>
      )}
      <div className={`${styles.introSection} ${showVideo && styles.backdrop}`}>
        <NavBar />
        <div className={styles.content}>
          <Image src={Title} alt="Mobius Studio" className={styles.heading} />
          <p className={styles.introSecText}>
            We specialize in transforming your ideas into dynamic 3D animations
            that captivate your audience. Through our cutting-edge animation
            services, we bring your products to life in a way that is visually
            striking and emotionally engaging.
          </p>
          <Button text="Talk to Our Expert" onClick={handleVideo} />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
