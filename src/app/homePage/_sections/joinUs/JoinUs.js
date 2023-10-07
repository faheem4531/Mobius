import styles from './JoinUs.module.css'
import Image from 'next/image';
import BackGround from "@/app/_assets/png/join-us-bg.png";
import Button from '@/app/_components/button/Button';
import Model from "@/app/_assets/svg/joinUs-model.svg";
import Link from 'next/link';

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.imagWrap}>
        <Image
          alt=''
          src={BackGround}
          className={styles.background}
        />
        <div className={styles.content}>
          <h1>Want to Work Together?</h1>
          <Link href="/carrers">
            <Button
              text="Join Us Now"
            />
          </Link>
        </div>
      </div>
      <Image
        alt=''
        src={Model}
        className={styles.model} />
    </div>
  )
};

export default JoinUs;
