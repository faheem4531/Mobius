import styles from './Services.module.css'
import Image from 'next/image';
import Steps from "@/app/_assets/svg/service-steps.svg";
import Modeling from "@/app/_assets/svg/3d-service.svg";
import Step2 from "@/app/_assets/svg/simulation-service.svg";
import Video from "@/app/_assets/svg/video-service.svg";
import Lense from "@/app/_assets/png/lense.png";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.content}>
        <div className={styles.title}>Our Services</div>
        <h1>We Provide 3D Services</h1>
        <hr />
        <div className={styles.servicesSteps}>
          <Image
            alt=''
            src={Steps}
            className={styles.steps}
          />
          <div>
            <h2 className={styles.heading}>
              3D Modeling
              <Image
                alt=''
                src={Modeling}
                className={styles.logo}
              />
            </h2>
            <h2 className={`${styles.heading} ${styles.unselected}`}>
              3D Simulation
              <Image
                alt=''
                src={Step2}
                className={styles.logo}
              />
            </h2>
            <h2 className={`${styles.heading} ${styles.unselected}`}>
              Video Animation
              <Image
                alt=''
                src={Video}
                className={styles.logo}
              />
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.imageWraper}>
        <Image
          src={Lense}
          alt=''
          className={styles.lense}
        />
      </div>
    </div>
  )
};

export default Services;
