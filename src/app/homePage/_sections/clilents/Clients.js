'use client'

import Avancus from "@/app/_assets/clients/avancus.svg";
import Elevant from "@/app/_assets/clients/elevant.svg";
import Fonestar from "@/app/_assets/clients/fonestar.svg";
import FormulaZ from "@/app/_assets/clients/formulaZ.svg";
import Houduo from "@/app/_assets/clients/houduo.svg";
import LightOne from "@/app/_assets/clients/light-one.svg";
import Luna from "@/app/_assets/clients/luna.svg";
import Metaleon from "@/app/_assets/clients/metaleon-society.svg";
import PillPuncher from "@/app/_assets/clients/pill-puncher.svg";
import Sony from "@/app/_assets/clients/sony.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "./Clients.module.css";
import Review from "./ReviewCard";

const Clients_data = [
  {
    id: "Sony",
    logo: Sony,
  },
  {
    id: "Luna",
    logo: Luna,
  },
  {
    id: "Elevant",
    logo: Elevant,
  },
  {
    id: "Fonestar",
    logo: Fonestar,
  },
  {
    id: "FormulaZ",
    logo: FormulaZ,
  },
  {
    id: "Houduo",
    logo: Houduo,
  },
  {
    id: "PillPuncher",
    logo: PillPuncher,
  },
  {
    id: "Avancus",
    logo: Avancus,
  },
  {
    id: "Metaleon",
    logo: Metaleon,
  },
  {
    id: "LightOne",
    logo: LightOne,
  },
];

const Clients = () => {
  return (
    <div className={styles.clients}>
      <h3>Clients</h3>
      <h1>Here are our some Favorite Clients</h1>
      <Marquee>
        {Clients_data.map((items) => {
          return (
            <Image
              className={styles.logoWrap}
              src={items.logo}
              alt="icon"
              key={items.id}
            />
          );
        })}
      </Marquee>
      <div className={styles.reviewContainer}>
        <h3>Testimonial</h3>
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="mobiusstudios.co"
          data-businessunit-id="mobiusstudios.co"
          data-style-height="300px"
          data-style-width="100%"
        >
          <a
            href="https://www.trustpilot.com/review/mobiusstudios.co"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
        <div className={styles.reviewCardWraper}>
          <div className={styles.innerWrapper}>
            <Review name="Angelina Molnar" />
            <Review name="Cehan alee" />
            <Review name="Hale Allon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
