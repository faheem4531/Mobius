import styles from './AboutUs.module.css'
import Image from 'next/image';
import Model from "@/app/_assets/png/aboutUs-model.png";

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.modelContainer}>
        <Image
          src={Model}
          alt=''
          className={styles.model}
        />
      </div>
      <div className={styles.content}>
        <h4>About Us</h4>
        <h1>We Create Impracticality To Reality</h1>
        <hr />
        <p>We provide expert animation services, With a dedicated team of skilled animators,
          we infuse creativity and flair into every frame. Our mission is to elevate your storytelling,
          making it both engaging and memorable.  Let&apos;s embark on a creative journey together and bring your
          vision to life</p>
      </div>
    </div>
  )
};

export default AboutUs;
