import styles from "./CaseStudy.module.css"
import Footer from "../_components/footer/Footer";
import IntroSection from "../_components/introSection/IntroSection";

const CaseStudy = () => {
  return (
    <div className={styles.carrers}>
      <IntroSection
        heading1="Wanna Join"
        heading2=" Mobius motion studios?"
        content="Discover your career path, elevate your prospects. Here are some job vacancies for you, apply now!"
      />
      <Footer />
    </div>
  )
};

export default CaseStudy;