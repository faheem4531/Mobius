import HeroIntro from "@/_components/design-home/hero-intro";
import Clients from "@/_components/design-home/clients";
// import Services from "./_sections/services/Services";
// import JoinUs from "./_sections/joinUs/JoinUs";
// import Footer from "@/_components/footer/Footer";
// import Clients from "../homePage/_sections/clilents/Clients";
// import Discover from "./_sections/discover/Discover";
// import Projects from "./_sections/projects/Projects";
// import Service1 from "./_sections/services/Service1";
// import Service2 from "./_sections/services/Service2";
// import Service3 from "./_sections/services/Service3";
// import OurProcess from "./_sections/ourProcess/OurProcess";
// import GotQuestions from "./_sections/gotQuestions/GotQuestions";
import Head from "next/head";
import AboutUs from "@/_components/design-home/about-us";
import OurWork from "@/_components/design-home/our-work";
import DesignVerticals from "@/_components/design-home/design-verticals";
import Dividers from "@/_components/design-home/dividers";
import OurProcess from "@/_components/design-home/our-process";

const Page = () => {
  return (
    <>
      <Head>
        <title>Mobius Studios | 3d animation & CGI videos in USA</title>
        <meta
          name="description"
          content="Mobius Studios, a USA-based 3D animation & CGI video agency, creates stunning animations to enhance your brand’s social media, ads, and digital marketing presence"
        />
      </Head>
      <div>
        <HeroIntro />
        <AboutUs />
        <Clients />
        <OurWork />

        <Dividers />

        <DesignVerticals />
        <Dividers />
        <OurProcess />

        {/*  <Services />
        <Service1 />
        <Service2 />
        <Service3 />
        <Projects />
        <Discover />
        <OurProcess />
        <Clients />
        <GotQuestions />
        <JoinUs />
        <Footer /> */}
      </div>
    </>
  );
};

export default Page;
