'use client'

import styles from "./Carrers.module.css"
import Footer from "../_components/footer/Footer";
import IntroSection from "../_components/introSection/IntroSection";
import JoinUs from "./_sections/joinUS/JoinUs";
import Head from 'next/head';

const Carrers = () => {
  return (
    <div className={styles.carrers}>
      <Head>
        <link rel="canonical" href="https://www.mobiusstudios.co/carrers" />
      </Head>
      <IntroSection
        heading1="Wanna Join"
        heading2=" Mobius motion studios?"
        content="Discover your career path, elevate your prospects. Here are some job vacancies for you, apply now!"
      />
      <JoinUs />
      <Footer />
    </div>
  )
};

export default Carrers;