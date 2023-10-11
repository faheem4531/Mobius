import styles from './Clients.module.css'
import Image from 'next/image';
import Review from './ReviewCard';
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import Sony from "@/app/_assets/clients/sony.svg";
import Elevant from "@/app/_assets/clients/elevant.svg";
import Fonestar from "@/app/_assets/clients/fonestar.svg";
import FormulaZ from "@/app/_assets/clients/formulaZ.svg";
import Houduo from "@/app/_assets/clients/houduo.svg";
import PillPuncher from "@/app/_assets/clients/pill-puncher.svg";
import Luna from "@/app/_assets/clients/luna.svg";
import Avancus from "@/app/_assets/clients/avancus.svg";
import Metaleon from "@/app/_assets/clients/metaleon-society.svg";
import LightOne from "@/app/_assets/clients/light-one.svg";

const Clients_data = [
  {
    id: 'Sony',
    logo: Sony
  },
  {
    id: 'Luna',
    logo: Luna
  },
  {
    id: 'Elevant',
    logo: Elevant
  },
  {
    id: 'Fonestar',
    logo: Fonestar
  },
  {
    id: 'FormulaZ',
    logo: FormulaZ
  },
  {
    id: 'Houduo',
    logo: Houduo
  },
  {
    id: 'PillPuncher',
    logo: PillPuncher
  },
  {
    id: 'Avancus',
    logo: Avancus
  },
  {
    id: 'Metaleon',
    logo: Metaleon
  },
  {
    id: 'LightOne',
    logo: LightOne
  },

]


const Clients = () => {
  return (
    <div className={styles.clients}>
      <h3>Clients</h3>
      <h1>Here are our some Favorite Clients</h1>
      <Marquee>
        {
          Clients_data.map((items) => {
            return <Image
              className={styles.logoWrap}
              src={items.logo}
              alt="icon"
              key={items.id}
            />
          })
        }
      </Marquee>
      <div className={styles.reviewContainer}>
        <h3>Testimonial</h3>
        <h1>What they say about us</h1>
        <div className={styles.reviewCardWraper}>
          <div className={styles.innerWrapper}>
            <Review name="Angelina Molnar" />
            <Review name="Cehan alee" />
            <Review name="Hale Allon" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Clients;
