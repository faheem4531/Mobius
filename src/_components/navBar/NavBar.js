"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";
import Logo from "@/_assets/svg/logo.svg";
import Close from "@/_assets/svg/close.svg";
import Menu from "@/_assets/svg/menu.webp";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [mobileState, setMobileState] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`${styles.navBar} ${mobileState && styles.responsiveNAv}`}>
      {!mobileState && <Image src={Logo} alt="Logo" className={styles.logo} />}
      {!mobileState && (
        <Image
          alt="Menu"
          src={Menu}
          className={styles.menu}
          onClick={() => setMobileState(true)}
        />
      )}
      {mobileState && (
        <Image
          alt="Close"
          src={Close}
          className={styles.close}
          onClick={() => setMobileState(false)}
        />
      )}

      <ul
        className={`${styles.linksList} ${styles.displayNone} ${
          mobileState && styles.displayBlock
        }`}
      >
        <Link
          href="/"
          className={`
        ${pathname === "/" ? styles.active : ""} 
        ${styles.link} 
        `}
        >
          <li className={mobileState && styles.borderBottom}>Home</li>
        </Link>
        <Link
          href="/case-study"
          className={`
        ${pathname === "/case-study" ? styles.active : ""} 
        ${styles.link} `}
        >
          <li className={mobileState && styles.borderBottom}>Case Studies</li>
        </Link>
        <Link
          href="/carrers"
          className={`
        ${pathname === "/carrers" ? styles.active : ""} 
        ${styles.link} `}
        >
          <li className={mobileState && styles.borderBottom}>Carrers</li>
        </Link>
        <Link
          href="/connect-us"
          className={pathname === "/connect-us" ? styles.activebtn : ""}
        >
          <li
            className={`${!mobileState && styles.btn} ${
              mobileState && styles.borderBottom
            }`}
          >
            Get in Touch
          </li>
        </Link>
      </ul>
      {mobileState && (
        <p className={styles.copyrights}>
          All rights reserved.
          <br />© 2023 MMS | Mobius Motion Studio.{" "}
        </p>
      )}
    </div>
  );
};

export default NavBar;
