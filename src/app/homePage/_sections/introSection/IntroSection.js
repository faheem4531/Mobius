"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "@/_components/navBar/NavBar";
import Title from "@/_assets/svg/heading.webp";
import styles from "./IntroSection.module.css";
import MaskButton from "@/_components/button/MaskButton";
import ContactModal from "@/_components/modal/ContactModal";

const IntroSection = () => {
  const headingImgRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const [modal, setModal] = useState(false);

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
    <>
      <div className={styles.container}>
        <div className={styles.bgVideo}>
          <video className={styles.bgVideoContent} autoPlay muted loop>
            {/* <source src="video/showreel-3d-animation.webm" type="video/webm" /> */}
            <source src="video/Showreel-2024.webm" type="video/webm" />
          </video>
        </div>
        <div className={styles.introSection}>
          <NavBar />
          <div className={styles.content}>
            <Image
              src={Title}
              alt="Mobius Studio"
              className={styles.heading}
              ref={headingImgRef}
            />
            <p className={styles.introSecText} ref={textRef}>
              We specialize in transforming your ideas into dynamic 3D
              animations that captivate your audience. Through our cutting-edge
              animation services, we bring your products to life in a way that
              is visually striking and emotionally engaging.
            </p>
            <div ref={btnRef}>
              <MaskButton
                text="Talk to Our Expert"
                onClick={() => setModal(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={modal} setOpen={setModal} />
    </>
  );
};

export default IntroSection;
