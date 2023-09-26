import styles from './IntroSection.module.css'
import Image from 'next/image';
import NavBar from '@/app/_components/navBar/NavBar';
import Title from "@/app/_assets/svg/heading.svg";
import Button from '@/app/_components/button/Button';

const CarrerIntro = () => {
  return (
    <div className={styles.introSection}>
      <NavBar />
      <div className={styles.content}>
        <h1 className={styles.heading}>Wanna Join <br /> <span className={styles.color}> Mobius motion studios?</span></h1>
        <p className={styles.text}>Discover your career path, elevate your prospects. Here are some job vacancies for you, apply now!</p>
      </div>
    </div>

  )
};

export default CarrerIntro;
