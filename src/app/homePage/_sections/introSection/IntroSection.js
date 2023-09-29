import styles from './IntroSection.module.css'
import Image from 'next/image';
import NavBar from '@/app/_components/navBar/NavBar';
import Title from "@/app/_assets/svg/heading.svg";
import Button from '@/app/_components/button/Button';

const IntroSection = () => {
  return (
    <div className={styles.introSection}>
      <NavBar />
      <div className={styles.content}>
        <Image
          src={Title}
          alt=''
          className={styles.heading}
        />
        <p className={styles.dextopText}>We provide expert animation services, bringing your ideas to life with creativity and flair.
          Elevate your storytelling with our exceptional team at your service.</p>
        <p className={styles.resText}>We provide expert animation services, bringing your ideas to life with creativity and flair. </p>
        <Button
          text="Watch our Showreel"
        />
      </div>
    </div>
  )
};

export default IntroSection;
