import Head from "next/head";
import ProductIdea from "@/_components/design-home/product-idea";
import Footer from "@/_components/footer/Footer";
import ProductHero from "@/_components/design-home/product-hero";
import CaseStudyProducts from "@/_components/design-home/case-studyProducts";
import Dividers from "@/_components/design-home/dividers";
import camera from "@/_assets/png/camera2.png";
import GenericIdeaSection from "@/_components/design-home/product-idea";

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
        {/* <NavBar /> */}
        <ProductHero />
        <CaseStudyProducts />
        <Dividers />
        <GenericIdeaSection
          title="Book a call? So we bring your idea to life!"
          buttonText="Talk to Our Expert"
          imageSrc={camera}
        />

        <Footer />
      </div>
    </>
  );
};

export default Page;
