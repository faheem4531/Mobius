'use client'

import styles from "./CaseStudy.module.css"
import Footer from "../_components/footer/Footer";
import IntroSection from "../_components/introSection/IntroSection";
import Cases from "./cases/Cases";
import Head from 'next/head';
const CaseStudy = () => {
  return (
    <div className={styles.carrers}>
      <Head>
      <link rel="canonical" href="https://www.mobiusstudios.co/case-study" />
      </Head>
      <IntroSection
        heading1="Journey through"
        heading2="3D Wonders"
        content="A Showcase of Our Modeling and Animation Case Studies"
      />
      <Cases />
      <Footer />
    </div>
  )
};

export default CaseStudy;