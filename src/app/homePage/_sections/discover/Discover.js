import styles from './Discover.module.css'
import Button from '@/app/_components/button/Button';
import Image from 'next/image';
import Background from "@/app/_assets/png/discover-bg.png";
import Link from 'next/link';

const Discover = () => {
  return (<>
    <div className={styles.discover}>
      <Image
        src={Background}
        alt=''
        className={styles.bgImg} />
      <div className={styles.content}>
        <h1>Don&rsquo;t let your designs go to waste. let us turn them into reality!</h1>

        <Link href="/caseStudy">
          <Button
            text="Discover More"
          />
        </Link>
      </div>
    </div>
    <div className={styles.stats}>
      <div className={styles.details}>
        <h1>145+</h1>
        <p>Clients</p>
      </div>
      <div className={styles.details}>
        <h1>328+</h1>
        <p>Projects</p>
      </div>
      <div className={styles.details}>
        <h1>67+</h1>
        <p>Experts</p>
      </div>
    </div>
  </>
  )
};

export default Discover;
