import { notFound } from "next/navigation";
import { projectsData } from "@/utils/data";
import { Box, Typography } from "@mui/material";
import NavBar from "@/_components/navBar/NavBar";
import AboutUsImage from "@/_assets/png/about-us.png";
import Toolsweuse from "@/_assets/png/Tools we use.png";
import Image from "next/image";
import workrow1 from "@/_assets/png/workrow1.png";
import workrow2 from "@/_assets/png/workrow2.png";
import GenericIdeaSection from "@/_components/design-home/product-idea";
import camera from "@/_assets/png/camera2.png";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) return notFound();
  return (
    <>
      <NavBar />
      <main>
        <HeroSection industryName={project.industry} proName={project.title} />
        <AboutUs
          industryName={project.industry}
          title={project.title}
          about={project.about}
        />
        <ConceptSketches />
        <AboutUsCArds />
        <GenericIdeaSection
          title="Book a call? So we bring your idea to life!"
          buttonText="Talk to Our Expert"
          imageSrc={camera}
        />
      </main>
    </>
  );
}
// hero section
export function HeroSection({ industryName, proName }) {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Background Video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "500px", sm: "530px", md: "720px" },

          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            // height: "100%",
            objectFit: "cover",
            display: "block",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <source src="/video/Showreel-2024.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Section */}
      <Box
        sx={{
          // bgcolor: "red",
          height: { xs: "500px", sm: "530px", md: "720px" },
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "30px", sm: "50px", md: "90px" },
            bottom: { xs: "30px", sm: "70px", md: "120px" },
            color: "var(--text-primary)",
            fontWeight: 300,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              width: { xs: "90%", sm: "80%", md: "50%" },
              fontSize: { xs: "16px", md: "20px" },
              textTransform: "capitalize",
              fontFamily: {
                xs: "Avenir3 !important",
              },
              textTransform: "capitalize",
            }}
          >
            {industryName}
          </Typography>
          <Typography
            sx={{
              width: { xs: "90%", sm: "80%", md: "50%" },
              fontWeight: 500,
              fontSize: { xs: "24px", md: "30px", lg: "32px" },
              color: "var(--text-main)",
              fontFamily: "Avenir5 !important",
              lineHeight: { xs: "32px", md: "48px" },
              textTransform: "capitalize",
            }}
          >
            {proName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// about us
export function AboutUs({ industryName, title, about }) {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "32px" },
        m: "auto",
        padding: {
          xs: "32px 20px",
          md: "40px",
          lg: "80px",
        },
      }}
    >
      <Box
        component="img"
        src={AboutUsImage.src}
        alt="Metaleon 3D character"
        sx={{
          width: "100%",
          maxWidth: { xs: "350px", sm: "460px", lg: "508px" },
          AspectRatio: "1/1",
          zIndex: 2,
        }}
      />
      <Box
        component="img"
        src={Toolsweuse.src}
        alt="Metaleon 3D character"
        sx={{
          // bgcolor: "red",
          transform: { xs: "rotate(90deg)", md: "none" },
          width: "100%",
          maxWidth: { xs: "14px", md: "17px" },
          my: { xs: "-85px", md: "none" },
        }}
      />

      <Box
        sx={{
          color: "var(--text-primary)",
          width: { xs: "100%" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "20px" },
            mb: { xs: "8px" },
          }}
        >
          {industryName}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px" },
            mb: { xs: "24px" },
            color: "var(--text-main)",
            lineHeight: "120%",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>

        <Box
          // key={index}
          sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {[
            {
              title: "Project Overview",
              des: "The project showcases a sleek camera with its various components on display, highlighting its features and functionality. With a modern and dynamic style, the camera is presented from multiple angles and the visuals are designed to emphasize its high-tech appeal.",
            },
            {
              title: "Challenge",
              des: "The challenges in creating the camera animation were recreating intricate components, ensuring accurate representation of the camera's features, meeting the audience's expectations, balancing creativity with brand guidelines, all while completing the project within a limited time frame. Thorough research and understanding of the camera's capabilities were necessary to achieve a high-quality output.",
            },
            {
              title: "Solution",
              des: "Utilizing 3D modeling software to create detailed camera components and experimenting with different techniques to achieve desired aesthetic appeal. Conducting thorough research and collaborating with the product team to accurately represent the camera's features and capabilities.",
            },
          ].map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "rgba(237, 237, 239, 1)",
                  mb: { xs: "8px" },
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: { xs: "130%", sm: "120%" },
                  zIndex: 20,
                }}
              >
                {item.des}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function ConceptSketches() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", sm: "600px", md: "800px", lg: "932px" },
          backgroundImage: "url(/bgimgcasestudy.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "120% 100%", sm: "100% 100%" },
          backgroundPosition: { xs: "center top", sm: "right" },
          position: "relative",
          p: { xs: "32px 20px", md: "40px", lg: "40px 80px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "304px", sm: "400px", md: "700px", lg: "880px" },
            background:
              "linear-gradient(180deg, #000000 -8.83%, rgba(0, 0, 0, 0) 50.36%, #000000 108.42%)",
            position: "absolute",
            top: 0,
            // bgcolor: "red",
            left: 0,
          }}
        />
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
            position: "relative",
            zIndex: 2,
            px: { lg: "80px" },
          }}
        >
          <Box
            component="video"
            src="/video/bidet-buddy-snip.mp4"
            alt="bidet-buddy-snip"
            autoPlay
            loop
            muted
            sx={{
              width: "100%",
              height: { xs: "240px", sm: "340px", md: "600px", lg: "720px" },
              objectFit: "cover",
              borderRadius: { xs: "8px" },
            }}
          />
          <Box sx={{ mt: { xs: "70px", md: "40px" } }}>
            <Typography
              sx={{
                fontSize: { xs: "24px" },
                color: "#EDEDEF",
                // lineHeight: { xs: "32px", md: "48px" },
                textTransform: "capitalize",
              }}
            >
              Concept Sketches
            </Typography>
            <Typography
              sx={{
                mt: "8px",
                fontSize: { xs: "16px", md: "20px" },
                textTransform: "capitalize",
                fontFamily: {
                  xs: "Avenir3 !important",
                },
                color: "#B9B6BD",
              }}
            >
              We take your product idea and sketch various concepts for
              visualizing your idea
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function AboutUsCArds() {
  return (
    <Box
      sx={{
        position: "relative",
        background:
          " linear-gradient(180deg, #000000 -16.67%, rgba(0, 0, 0, 0) 42.23%, #000000 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          m: "auto",
          padding: {
            xs: "32px 20px",
            md: "40px",
            lg: " 40px 80px",
          },
        }}
      >
        {[
          {
            video: "/video/bidet-buddy-snip.mp4",
            title: "3D CAD & Modelling",
            des: "With our expert design team you get not only a functional product but an ergonomic aesthetic product that stands out in the noise.",
          },
          {
            video: "/video/bidet-buddy-snip.mp4",
            title: "Design for Manufacture",
            des: "With attention to detail we craft each product defining minor engineering detail to ensure design is ready to manufacture.",
          },
          {
            video: "/video/bidet-buddy-snip.mp4",
            title: "Prototyping",
            des: "With our prototyping techniques you get a one window solution for your product idea from concept to a working prototype.",
          },
          {
            video: "/video/bidet-buddy-snip.mp4",
            title: "Solution",
            des: "Utilizing 3D modeling software to create detailed camera components and experimenting with different techniques to achieve.",
          },
        ].map((items, i) => {
          return (
            <Box key={i} sx={{}}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "8px",
                  height: { xs: "240px", md: "500px", lg: "720px" },
                  mb: { xs: " 24px" },
                }}
              >
                <Box
                  component="video"
                  src={items.video}
                  alt="bidet-buddy-snip"
                  autoPlay
                  loop
                  muted
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    boder: "1px solid #434245",
                    borderRadius: { xs: "8px" },
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#EDEDEF",
                  textTransform: "capitalize",
                }}
              >
                {items.title}
              </Typography>
              <Typography
                sx={{
                  mt: "8px",
                  fontSize: { xs: "16px", md: "20px" },
                  fontFamily: {
                    xs: "Avenir3 !important",
                  },
                  color: "#B9B6BD",
                }}
              >
                {items.des}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "411px",
          aspectRatio: "1/1",
          // height: "238px",
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          display: { xs: "none", sm: "none", md: "block" },
          backgroundColor: "#EDEDEF",
          borderRadius: "1000px",
          filter: "blur(200px)",
          overflow: "hidden",
        }}
      >
        <Image
          src={workrow1}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "311px",
          aspectRatio: "1/1",
          // height: "238px",
          position: "absolute",
          zIndex: 1,
          top: "60%",
          left: 0,
          display: { xs: "none", sm: "none", md: "block" },
          backgroundColor: "#EDEDEF",
          borderRadius: "1000px",
          filter: "blur(200px)",
          overflow: "hidden",
        }}
      >
        <Image
          src={workrow2}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "311px",
          aspectRatio: "1/1",
          display: { xs: "none", sm: "none", md: "block" },
          position: "absolute",
          zIndex: 1,
          bottom: "70%",
          right: 0,
          opacity: 0.5,
          backgroundColor: "#646268",
          borderRadius: "1000px",
          filter: "blur(100px)",
          overflow: "hidden",
        }}
      >
        <Image
          src={workrow2}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "411px",
          aspectRatio: "1/1",
          display: { xs: "none", sm: "none", md: "block" },
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          right: 0,
          opacity: 0.5,
          backgroundColor: "#646268",
          borderRadius: "1000px",
          filter: "blur(100px)",
          overflow: "hidden",
        }}
      >
        <Image
          src={workrow2}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
