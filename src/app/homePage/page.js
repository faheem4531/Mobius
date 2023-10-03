import React from "react";
import styles from "./HomePage.module.css";
import IntroSection from "./_sections/introSection/IntroSection";
import AboutUs from "./_sections/aboutUs/AboutUs";
import Services from "./_sections/services/Services";
import JoinUs from "./_sections/joinUs/JoinUs";
import Footer from "../_components/footer/Footer";
import Clients from "./_sections/clilents/Clients";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <IntroSection />
      <AboutUs />
      <Services />
      <Clients />
      <JoinUs />
      <Footer />
    </div>
  )
};

export default HomePage;