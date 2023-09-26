import styles from "./Carrers.module.css"
import Footer from "../_components/footer/Footer";
import CarrerIntro from "./_sections/introSection/IntroSection";

const Carrers = () => {
  return (
    <div className={styles.carrers}>
      <CarrerIntro />
      {/* <Footer /> */}
    </div>
  )
};

export default Carrers;