import IntroSection from "./_sections/introSection/IntroSection";
import AboutUs from "./_sections/aboutUs/AboutUs";
import Services from "./_sections/services/Services";
import JoinUs from "./_sections/joinUs/JoinUs";
import Footer from "../_components/footer/Footer";
import Clients from "./_sections/clilents/Clients";
import Discover from "./_sections/discover/Discover";
import Projects from "./_sections/projects/Projects";
import Service1 from "./_sections/services/Service1";
import Service2 from "./_sections/services/Service2";
import Service3 from "./_sections/services/Service3";
import OurProcess from "./_sections/ourProcess/OurProcess";
import GotQuestions from "./_sections/gotQuestions/GotQuestions";

const HomePage = () => {
  return (
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
      <GotQuestions />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
