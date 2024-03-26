'use client'

import styles from "./CaseStudy.module.css"
import Footer from "../_components/footer/Footer";
import IntroSection from "../_components/introSection/IntroSection";
import Cases from "./cases/Cases";

const CaseStudy = () => {
  return (
    <div className={styles.carrers}>
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