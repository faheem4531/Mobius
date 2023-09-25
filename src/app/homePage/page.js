import React from "react";
import styles from "./HomePage.module.css";
import IntroSection from "./_sections/introSection/IntroSection";
import AboutUs from "./_sections/aboutUs/AboutUs";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <IntroSection />
      <AboutUs />
    </div>
  )
};

export default HomePage;