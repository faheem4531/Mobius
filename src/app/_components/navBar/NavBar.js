"use client";

import styles from './NavBar.module.css'
import Image from 'next/image';
import Logo from "@/app/_assets/svg/logo.svg";
import Close from "@/app/_assets/svg/close.svg";
import Menu from "@/app/_assets/svg/menu.svg";
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [mobileState, setMobileState] = useState(false);

  return (
    <div className={`${styles.navBar} ${mobileState && styles.responsiveNAv}`}>
      {!mobileState && <Image
        src={Logo}
        alt='Logo'
        className={styles.logo}
      />}
      {!mobileState && <Image
        alt='Menu'
        src={Menu}
        className={styles.menu}
        onClick={() => setMobileState(true)}
      />}
      {mobileState && <Image
        alt='Close'
        src={Close}
        className={styles.close}
        onClick={() => setMobileState(false)}
      />
      }

      <ul className={`${styles.linksList} ${styles.displayNone} ${mobileState && styles.displayBlock}`}>
        <Link href="/">
          <li className={styles.link}>Home</li>
        </Link>
        <Link href="/caseStudy">
          <li className={styles.link}>Case Studies</li>
        </Link>
        <Link href="/carrers">
          <li className={styles.link}>Carrers</li>
        </Link>
        <Link href="/connectUs">
          <li
            className={`${!mobileState && styles.btn} ${mobileState && styles.link}`}>
            Get in Touch
          </li>
        </Link>
      </ul>
      {mobileState && <p className={styles.copyrights} >All rights reserved.
        <br />
        © 2023 MMS | Mobius Motion Studio. </p>}
    </div >
  )
};

export default NavBar;
