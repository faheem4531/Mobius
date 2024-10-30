"use client";

import { useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

import Button from "../button/Button";
import LinkedIn from "@/app/_assets/svg/linkedIn.svg";
import Behance from "@/app/_assets/svg/behance.svg";
import Dribbble from "@/app/_assets/svg/dribbble.svg";
import Facebook from "@/app/_assets/svg/facebook.svg";
import Instagram from "@/app/_assets/svg/instagram.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  function handleEmail() {
    setEmail("");
  }

  const phoneNumber = "+1 (415) 800 3047";
  // const emailAddress = "hr@mobiusmotionstudio.com";
  const emailAddress = "info@mobiusstudios.co";
  const address = "30 N Gould St STE N, Sheridan, WY 82801";
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}`;

  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.details}>
          <div className={styles.getInTouch}>
            <h3>Get in Touch</h3>
            <hr />
            <p>
              Email us at <br />{" "}
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
            <p className={styles.callUs}>
              Call us at <br /> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>
            <p className={styles.addresX}>
              {" "}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </a>
            </p>
          </div>
          <div className={`${styles.getInTouch} ${styles.address}`}>
            <h3>Address</h3>
            <hr />
            <p>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </a>
            </p>
          </div>
          <div className={`${styles.getInTouch} ${styles.studio}`}>
            <h3>Studio</h3>
            <hr />
            <p className={styles.terms}>Terms of Condition </p>
            <p>Privacy Policy </p>
            <Link href="/carrers" passHref>
              <p className={styles.addresX}>Career</p>
            </Link>
            <Link href="/connect-us" passHref>
              <p className={styles.addresX}>Contact Us</p>
            </Link>
          </div>
          <div className={`${styles.getInTouch} ${styles.inputDiv}`}>
            <h3>Newsletter</h3>
            <hr />
            <p>Receive the latest trend updates directly in your inbox.</p>
            <input
              className={styles.email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className={styles.btn}>
              <Button text="submit" padding="6px 28px" onClick={handleEmail} />
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <Link
            href="https://dribbble.com/aliimranmms"
            className={styles.logoLink}
            target="_blank"
          >
            <Image
              alt="Dribbble Logo - Portfolio of mobius motion studio. We are 3d animation studio providing 3d animation services "
              src={Dribbble}
              className={styles.logo}
            />
          </Link>
          <Link
            href="https://www.behance.net/aliimran4"
            className={styles.logoLink}
            target="_blank"
          >
            <Image
              alt="Logo Behance: Portfolio of mobius motion studio. We are 3d modeling artist providing 3d modeling, rendering and 3d animation services "
              src={Behance}
              className={styles.logo}
            />
          </Link>
          <Link
            href="https://www.facebook.com/Mobiusmotionstudio/"
            className={styles.logoLink}
          >
            <Image
              alt="Logo - Mobius Motion Studio is animation studio providing best vfx services, product modeling, 3d product animation services"
              src={Facebook}
              className={styles.logo}
            />
          </Link>
          <Link
            href="https://www.instagram.com/mobiusmotion.studio/"
            className={styles.logoLink}
          >
            <Image
              alt="Logo - You can hire top animation and best vfx company. You get product modeling 3d product animation video"
              src={Instagram}
              className={styles.logo}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/mobius-motion-studio/?viewAsMember=true"
            className={styles.logoLink}
          >
            <Image
              alt="Logo - Mobius motion studio is 3d modeling company. We have best 3d animation artist, motion capture artist, cgi designer, and 3d modeling designer"
              src={LinkedIn}
              className={styles.logo}
            />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 MMS | Mobius Motion Studio. All rights reserved.
      </div>
    </Fragment>
  );
};

export default Footer;
