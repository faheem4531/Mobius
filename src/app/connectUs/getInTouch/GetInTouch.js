import React from "react";
import styles from "./GetInTouch.module.css"
import NavBar from "@/app/_components/navBar/NavBar";
import Input from "@/app/_components/input/Input";
import Button from "@/app/_components/button/Button";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <NavBar />
      <div className={styles.mainSection}>
        <div className={styles.block}>
          <div className={styles.introSec}>
            <h1>Wanna work with <br /> <span className={styles.color}> Mobius motion studios?</span></h1>
            <p>Get in touch with us today and let's bring your ideas to life. We're here to answer your questions and discuss your next project.</p>
          </div>
        </div>
        <div className={styles.formParent}>
          <div className={styles.form}>
            <h2>Feel free to connet with us...</h2>
            <Input
              type="text"
              placeHolder="Name"
            />
            <Input
              type="email"
              placeHolder="Email Address"
              margin="20px 0 0"
            />
            <Input
              type="number"
              placeHolder="Phone "
              margin="20px 0 0"
            />
            <textarea className={styles.textarea} placeholder="Project Description" rows="5">
            </textarea>
            <Button
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div >
  )
};

export default GetInTouch;