'use client'

import React from "react";
import styles from "./ConnetUs.module.css"
import GetInTouch from "./getInTouch/GetInTouch";
import Footer from "../_components/footer/Footer";
import Head from 'next/head';

const ConnectUs = () => {
  return (
    <div>
      <Head>
      <link rel="canonical" href="https://www.mobiusstudios.co/connect-us" />
      </Head>
      <GetInTouch />
      <Footer />
    </div>
  )
};

export default ConnectUs;