"use client";

import React, { useState } from "react";
import styles from "./GetInTouch.module.css";
import NavBar from "@/app/_components/navBar/NavBar";
import Input from "@/app/_components/input/Input";
import Button from "@/app/_components/button/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = () => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.message === ""
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);

    try {
      setLoading(true);

      const response = await axios.post("/api/contactus", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(`Failed to send email: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(`Error sending email: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.getInTouch}>
      <NavBar />
      <div className={styles.mainSection}>
        <div className={styles.block}>
          <div className={styles.introSec}>
            <h1>
              Wanna work with <br />{" "}
              <span className={styles.color}> Mobius motion studios?</span>
            </h1>
            <p>
              Get in touch with us today and let&apos;s bring your ideas to
              life. We&apos;re here to answer your questions and discuss your
              next project.
            </p>
          </div>
        </div>
        <div className={styles.formParent}>
          <div className={styles.form}>
            <h2>Feel free to connect with us...</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeHolder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
              <Input
                type="email"
                placeHolder="Email Address"
                margin="20px 0 0"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <Input
                type="number"
                placeHolder="Phone"
                margin="20px 0 0"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
              />
              <textarea
                className={styles.textarea}
                onChange={handleChange}
                name="message"
                placeholder="Project Description"
                rows="5"
                value={formData.message}
              ></textarea>
              {showError && (
                <div className={styles.errorMsg}>Fill all the above fields</div>
              )}
              <Button
                text={loading ? "Sending..." : "Submit"}
                type="submit"
                margin="40px 0 0"
                disabled={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
