import styles from "./Carrers.module.css"
import Footer from "../_components/footer/Footer";
import CarrerIntro from "./_sections/introSection/IntroSection";
import JoinUs from "./_sections/joinUS/JoinUs";

const Carrers = () => {
  return (
    <div className={styles.carrers}>
      <CarrerIntro />
      <JoinUs />
      <Footer />
    </div>
  )
};

export default Carrers;