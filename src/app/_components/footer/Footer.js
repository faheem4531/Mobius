"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import Button from "../button/Button";
import LinkedIn from "@/app/_assets/svg/linkedIn.svg";
import Behance from "@/app/_assets/svg/behance.svg";
import Dribbble from "@/app/_assets/svg/dribbble.svg";
import Facebook from "@/app/_assets/svg/facebook.svg";
import Instagram from "@/app/_assets/svg/instagram.svg";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  function handleEmail() {
    setEmail("");
  }

  const phoneNumber = "+92 307 4567890";
  const emailAddress = "hr@mobiusmotionstudio.com";
  const address = "392, F Block Johar Town, Lahore, Punjab, Pakistan";
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
            <Link href="/connectUs" passHref>
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
        <div className={styles.trustpilot}>
          {/* <!-- TrustBox widget - Review Collector --> */}
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6597b2fe021710c9f4a6bf6d"
            data-style-height="52px"
            data-style-width="100%"
          >
            <a
              href="https://www.trustpilot.com/review/mobiusstudios.co"
              target="_blank"
              rel="noopener"
              style={{fontSize:"30px"}}
            >
              Trustpilot
            </a>
          </div>
          {/* <!-- End TrustBox widget --> */}
        </div>
        <div className={styles.socialMedia}>
          <Link
            href="https://dribbble.com/mobius_motion_studio"
            className={styles.logoLink}
            target="_blank"
          >
            <Image alt="Logo" src={Dribbble} className={styles.logo} />
          </Link>
          <Link
            href="https://www.behance.net/mobiusmotion"
            className={styles.logoLink}
            target="_blank"
          >
            <Image alt="Logo" src={Behance} className={styles.logo} />
          </Link>
          <Link href="" className={styles.logoLink}>
            <Image alt="Logo" src={Facebook} className={styles.logo} />
          </Link>
          <Link href="" className={styles.logoLink}>
            <Image alt="Logo" src={Instagram} className={styles.logo} />
          </Link>
          <Link href="" className={styles.logoLink}>
            <Image alt="Logo" src={LinkedIn} className={styles.logo} />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2023 MMS | Mobius Motion Studio. All rights reserved.
      </div>
    </Fragment>
  );
};

export default Footer;
