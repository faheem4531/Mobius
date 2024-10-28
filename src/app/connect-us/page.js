"use client";

import React from "react";
import Head from "next/head";

import GetInTouch from "./getInTouch/GetInTouch";
import Footer from "../_components/footer/Footer";

const ConnectUs = () => {
  return (
    <>
      <Head>
        <title>Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with Mobius Studios for custom CGI and animation solutions. Let's collaborate to bring your vision to life with creative visual excellence."
        />
        <link rel="canonical" href="https://www.mobiusstudios.co/connect-us" />
      </Head>

      <div>
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default ConnectUs;
