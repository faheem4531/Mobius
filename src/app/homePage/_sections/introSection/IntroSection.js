"use client";

import { useState } from 'react';
import styles from './IntroSection.module.css'
import Image from 'next/image';
import NavBar from '@/app/_components/navBar/NavBar';
import Title from "@/app/_assets/svg/heading.svg";
import Button from '@/app/_components/button/Button';
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
        <video className={styles.bgVideoContent} autoPlay muted loop >
          <source src="video/home-video.mp4" type="video/mp4" />
        </video>
      </div>
      {
        showVideo && <div className={styles.videoParent}>
          <video controls className={styles.video} autoPlay >
            <source src="video/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src={Close}
            alt=''
            className={styles.closeVideo}
            onClick={handleCloseVideo} />
        </div>
      }
      <div className={`${styles.introSection} ${showVideo && styles.backdrop}`}>

        {/* <video autoplay muted loop id="background-video">
        <source src="video/home-video.mp4" type="video/mp4" />
      </video> */}
        <NavBar />

        <div className={styles.content}>
          <Image
            src={Title}
            alt=''
            className={styles.heading}
          />
          <p className={styles.dextopText}>We provide expert animation services, bringing your ideas to life with creativity and flair.
            Elevate your storytelling with our exceptional team at your service.</p>
          <p className={styles.resText}>We provide expert animation services, bringing your ideas to life with creativity and flair. </p>
          <Button
            text="Watch our Showreel"
            onClick={handleVideo}
          />
        </div>
      </div>
    </div >
  )
};

export default IntroSection;
