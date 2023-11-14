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
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name == '' || formData.email == '' || formData.phone == '' || formData.message == '') {
      setShowError(true)
      return
    }
    setShowError(false)

    // Use your own template ID from Email.js
    const templateId = 'template_l1n3bav';
    // Send email
    emailjs
      .send('service_wzj6jwh', templateId, formData, 'jidiVNfnYWDhMfZP-')
      .then((response) => {
        toast(`Email sent successfully`, {
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        toast(`Error sending email: ${error.message}`, {
          type: 'error',
        });
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
              {showError && <div className={styles.errorMsg}>Fill all the above fields</div>}
              <Button
                text="Submit"
                type="submit"
                margin="40px 0 0"
              />
            </form>
          </div>
        </div>
      </div>
    </div >
  )
};

export default GetInTouch;
