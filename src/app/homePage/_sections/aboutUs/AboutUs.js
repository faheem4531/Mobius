"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Model from "@/app/_assets/png/aboutUs-model.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text flying in from left to right
    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start animation when the top of the element is 80% from the top of the viewport
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for image flying in from bottom to top
    gsap.fromTo(
      imageRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current, // Trigger the image animation based on the text animation trigger
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.modelContainer}>
        <Image src={Model} alt="" className={styles.model} ref={imageRef} />
      </div>
      <div
        className={styles.content}
        ref={textRef}
        style={{ position: "relative", zIndex: 2 }}
      >
        <h4>About Us</h4>
        <h2 style={{ color: "var(--text-main)", fontSize: "38px" }}>
          Impracticality To Reality
        </h2>
        <hr />
        <p>
          At Mobius Studios, 3D animation is not just a job for us. It&apos;s
          our true passion. We&apos;re a team of passionate project managers,
          creative directors, 3D animators, CGI artists, and Simulation experts
          dedicated to helping businesses tell their stories through powerful 3D
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
