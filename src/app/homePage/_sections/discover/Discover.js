'use client'

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
        <h4 style={{fontSize:"50px", fontWeight:"600",color: "var(--text-main)", marginBottom:"40px"}}>Don&rsquo;t let your designs go to waste. let us turn them into reality!</h4>

        <Link href="/case-study">
          <Button
            text="Discover More"
          />
        </Link>
      </div>
    </div>
    <div className={styles.stats}>
      <div className={styles.details}>
        <p style={{color:"#FAFAFA", fontSize:"60px", fontWeight:"900"}}>145+</p>
        <p>Clients</p>
      </div>
      <div className={styles.details}>
        <p style={{color:"#FAFAFA", fontSize:"60px", fontWeight:"900"}}>328+</p>
        <p>Projects</p>
      </div>
      <div className={styles.details}>
        <p style={{color:"#FAFAFA", fontSize:"60px", fontWeight:"900"}}>67+</p>
        <p>Experts</p>
      </div>
    </div>
  </>
  )
};

export default Discover;
