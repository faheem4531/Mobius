"use client";

import React, { useState } from 'react';
import styles from "./GetInTouch.module.css"
import NavBar from "@/app/_components/navBar/NavBar";
import Input from "@/app/_components/input/Input";
import Button from "@/app/_components/button/Button";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // e.preventDefault();

    // Use your own template ID from Email.js
    const templateId = 'template_16gph0l';

    // Send email
    emailjs
      .send('service_a21as21', templateId, formData, 'Pi3JkUms872980J13')
      .then((response) => {
        console.log('into sssss');
        toast(`Email sent successfully`, {
          type: 'success',
        });
        console.log('toast end');
        console.log('Email sent successfully:', response);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        toast(`Email sent fail`, {
          type: 'error',
        });
        console.log('into error');
        console.error('Error sending email:', error);
      });

  };



  return (
    <div className={styles.getInTouch}>
      <NavBar />
      <div className={styles.mainSection}>
        <div className={styles.block}>
          <div className={styles.introSec}>
            <h1>Wanna work with <br /> <span className={styles.color}> Mobius motion studios?</span></h1>
            <p>Get in touch with us today and let&apos;s bring your ideas to life. We&apos;re here to answer your questions and discuss your next project.</p>
          </div>
        </div>
        <div className={styles.formParent}>
          <div className={styles.form}>
            <h2>Feel free to connet with us...</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeHolder="Name"
                name="name"
                onChange={handleChange}
              />
              <Input
                type="email"
                placeHolder="Email Address"
                margin="20px 0 0"
                name="email"
                onChange={handleChange}
              />
              <Input
                type="number"
                placeHolder="Phone "
                margin="20px 0 0"
                name="phone"
                onChange={handleChange}
              />
              <textarea
                className={styles.textarea}
                onChange={handleChange}
                name="message"
                placeholder="Project Description"
                rows="5"
              >
              </textarea>
              <Button
                text="Submit"
                // type="submit"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </div >
  )
};

export default GetInTouch;
