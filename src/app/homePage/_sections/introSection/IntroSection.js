"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "@/app/_components/navBar/NavBar";
import Title from "@/app/_assets/svg/heading.svg";
import Button from "@/app/_components/button/Button";
import Close from "@/app/_assets/svg/close.svg";
import styles from "./IntroSection.module.css";

const IntroSection = () => {
  const [showVideo, setShoewVideo] = useState(false);
  const headingImgRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  function handleVideo() {
    setShoewVideo(true);
  }
  function handleCloseVideo() {
    setShoewVideo(false);
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingImgRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingImgRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: -350, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      btnRef.current,
      { x: -500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

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
          <Image
            src={Title}
            alt="Mobius Studio"
            className={styles.heading}
            ref={headingImgRef}
          />
          <p className={styles.introSecText} ref={textRef}>
            We specialize in transforming your ideas into dynamic 3D animations
            that captivate your audience. Through our cutting-edge animation
            services, we bring your products to life in a way that is visually
            striking and emotionally engaging.
          </p>
          <div ref={btnRef}>
            <Button text="Talk to Our Expert" onClick={handleVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
