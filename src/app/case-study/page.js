"use client";

import Head from "next/head";

import Footer from "@/_components/footer/Footer";
import IntroSection from "@/_components/introSection/IntroSection";
import Cases from "./cases/Cases";

const CaseStudy = () => {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta
          name="description"
          content="Explore Mobius Studios' past projects and see how our CGI and animation solutions drive visual excellence and success for businesses of all sizes."
        />
        <link rel="canonical" href="https://www.mobiusstudios.co/case-study" />
      </Head>

      <div>
        <IntroSection
          heading1="Journey through"
          heading2="3D Wonders"
          content="A Showcase of Our Modeling and Animation Case Studies"
        />
        <Cases />
        <Footer />
      </div>
    </>
  );
};

export default CaseStudy;
