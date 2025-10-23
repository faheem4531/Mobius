import IntroSection from "./_sections/introSection/IntroSection";
import AboutUs from "./_sections/aboutUs/AboutUs";
import Services from "./_sections/services/Services";
import JoinUs from "./_sections/joinUs/JoinUs";
import Footer from "@/_components/footer/Footer";
import Clients from "./_sections/clilents/Clients";
import Discover from "./_sections/discover/Discover";
import Projects from "./_sections/projects/Projects";
import Service1 from "./_sections/services/Service1";
import Service2 from "./_sections/services/Service2";
import Service3 from "./_sections/services/Service3";
import OurProcess from "./_sections/ourProcess/OurProcess";
import GotQuestions from "./_sections/gotQuestions/GotQuestions";
import Head from "next/head";
const questions = [
  {
    qs: "What services do you offer?",
    ans: "We specialize in high-quality 3D product animations, CGI (computer-generated imagery) videos, motion graphics, and visual effects (VFX) for product marketing, advertisements, and digital campaigns.",
    panel: "panel1",
    isexpanded: false,
  },
  {
    qs: "How can 3D product animations improve my brand?",
    ans: "3D animations bring your products to life, providing engaging visuals that highlight features, benefits, and design. This approach helps build a stronger emotional connection with your audience, leading to increased engagement and higher conversion rates.",
    panel: "panel2",
    isexpanded: false,
  },
  {
    qs: "How long does it take to create a 3D product animation?",
    ans: "The timeline depends on the complexity of the project, including factors such as product intricacy, animation length, and any additional features like VFX. On average, most projects take between 2 to 6 weeks from concept to final delivery.",
    panel: "panel3",
    isexpanded: false,
  },
  {
    qs: "What types of products can you create 3D animations for?",
    ans: "We can create 3D animations for a wide range of products, including consumer electronics, cosmetics, fashion items, medical devices, automotive parts, and industrial equipment. Whether it's a physical product or a conceptual idea, we can turn it into a compelling visual experience.",
    panel: "panel4",
    isexpanded: false,
  },
  {
    qs: "What is the cost of your 3D animation and CGI services?",
    ans: "Costs vary based on the scope of the project, including animation duration, level of detail, and specific requirements. We offer flexible pricing packages to fit different budgets. Contact us for a personalized quote.",
    panel: "panel5",
    isexpanded: false,
  },
  {
    qs: "Can I request revisions after the animation is completed?",
    ans: "Absolutely! We offer a set number of revisions as part of our standard packages to ensure the final product meets your expectations. We work closely with you during the process to minimize revisions and ensure a smooth experience.",
    panel: "panel6",
    isexpanded: false,
  },
  {
    qs: "What industries do you typically work with?",
    ans: "Our team works across multiple industries, including beauty and cosmetics, consumer electronics, fashion, automotive, medical devices, and more. If you have a product, we can bring it to life, regardless of the industry.",
    panel: "panel7",
    isexpanded: false,
  },
  {
    qs: "How do I get started with a 3D product animation project?",
    ans: "Getting started is easy! Simply reach out to us via our contact form, and we’ll schedule a consultation to discuss your product, your vision, and the goals for your animation. From there, we’ll provide a detailed proposal outlining the process, timeline, and pricing.",
    panel: "panel8",
    isexpanded: false,
  },
];
const HomePage = () => {
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
        <IntroSection />
        <AboutUs />
        <Services />
        <Service1 />
        <Service2 />
        <Service3 />
        <Projects />
        <Discover />
        <OurProcess />
        <Clients />
        <GotQuestions questions={questions} />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
