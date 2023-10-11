import styles from './Footer.module.css'
import Button from '../button/Button';
import LinkedIn from "@/app/_assets/svg/linkedIn.svg";
import Behance from "@/app/_assets/svg/behance.svg";
import Dribbble from "@/app/_assets/svg/dribbble.svg";
import Facebook from "@/app/_assets/svg/facebook.svg";
import Instagram from "@/app/_assets/svg/instagram.svg";
import Image from 'next/image';
import { Fragment } from 'react';
import Link from 'next/link';

const Footer = () => {
  const phoneNumber = "+92 307 4567890";
  const emailAddress = 'hr@mobiusmotionstudio.com';
  const address = '392, F Block Johar Town, Lahore, Punjab, Pakistan';
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.details}>
          <div className={styles.getInTouch}>
            <h3>Get in Touch</h3>
            <hr />
            <p>Email us at <br /> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            <p className={styles.callUs}>Call us at <br /> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
            <p className={styles.addresX}> <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              {address}
            </a></p>
          </div>
          <div className={`${styles.getInTouch} ${styles.address}`}>
            <h3>Address</h3>
            <hr />
            <p><a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              {address}
            </a></p>
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
            <input className={styles.email} type='email' placeholder='Enter your email' />
            <div className={styles.btn}>
              <Button
                text="submit"
                padding="6px 28px"
              />
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <Image
            alt='Logo'
            src={Dribbble}
            className={styles.logo}
          />
          <Image
            alt='Logo'
            src={Behance}
            className={styles.logo}
          />
          <Image
            alt='Logo'
            src={Facebook}
            className={styles.logo}
          />
          <Image
            alt='Logo'
            src={Instagram}
            className={styles.logo}
          />
          <Image
            alt='Logo'
            src={LinkedIn}
            className={styles.logo}
          />

        </div>
      </div>
      <div className={styles.copyright}>
        © 2023 MMS | Mobius Motion Studio. All rights reserved.
      </div>
    </Fragment>

  )
};

export default Footer;
