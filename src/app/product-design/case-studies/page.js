import Head from "next/head";
import ProductIdea from "@/_components/design-home/product-idea";
import Footer from "@/_components/footer/Footer";
import ProductHero from "@/_components/design-home/product-hero";

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
        <ProductHero />
        <ProductIdea />
        <Footer />
      </div>
    </>
  );
};

export default Page;
