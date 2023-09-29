import styles from './Footer.module.css'
import Button from '../button/Button';
import LinkedIn from "@/app/_assets/svg/linkedIn.svg";
import Behance from "@/app/_assets/svg/behance.svg";
import Dribbble from "@/app/_assets/svg/dribbble.svg";
import Facebook from "@/app/_assets/svg/facebook.svg";
import Instagram from "@/app/_assets/svg/instagram.svg";
import Image from 'next/image';
import { Fragment } from 'react';

const Footer = () => {

  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.details}>
          <div className={styles.getInTouch}>
            <h3>Get in Touch</h3>
            <hr />
            <p>Email us at <br /> hr@mobiusmotionstudio.com</p>
            <p className={styles.callUs}>Call us at <br /> +92 307 4567890</p>
            <p className={styles.addresX}>392, F Block Johar Town, Lahore, Punjab, Pakistan  </p>
          </div>
          <div className={`${styles.getInTouch} ${styles.address}`}>
            <h3>Address</h3>
            <hr />
            <p>392, F Block Johar Town, Lahore, Punjab, Pakistan  </p>
          </div>
          <div className={`${styles.getInTouch} ${styles.studio}`}>
            <h3>Studio</h3>
            <hr />
            <p className={styles.terms}>Terms of Condition </p>
            <p>Privacy Policy </p>
            <p className={styles.addresX}>Career</p>
            <p className={styles.addresX}>Contact Us</p>
          </div>
          <div className={`${styles.getInTouch} ${styles.inputDiv}`}>
            <h3>Newsletter</h3>
            <hr />
            <p>Receive the latest trend updates directly in your inbox.</p>
            <input className={styles.email} type='email' placeholder='Enter your email' />
            <div className={styles.btn}>
              <Button
                text="submit"
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
