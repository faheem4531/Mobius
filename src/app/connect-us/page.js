"use client";

import React from "react";
import Head from "next/head";

import GetInTouch from "./getInTouch/GetInTouch";
import Footer from "../_components/footer/Footer";

const ConnectUs = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.mobiusstudios.co/connect-us" />
      </Head>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default ConnectUs;
