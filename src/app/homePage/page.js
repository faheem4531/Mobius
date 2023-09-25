import React from "react";
import styles from "./HomePage.module.css";
import IntroSection from "./_sections/introSection/IntroSection";
import AboutUs from "./_sections/aboutUs/AboutUs";
import Footer from "../_components/footer/Footer";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <IntroSection />
      <AboutUs />
      <Footer />
    </div>
  )
};

export default HomePage;