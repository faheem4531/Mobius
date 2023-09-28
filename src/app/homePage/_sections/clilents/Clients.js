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

const Clients_data = [
  {
    url: "https://www.behance.net/gallery/179199227/Sony/modules/1012195441",
    logo: Sony
  },
  {
    url: "https://www.behance.net/gallery/178830637/Elevate-Beauty-3d-Animation-Fashion/modules/1010063989",
    logo: Elevant
  },
  {
    url: "https://www.behance.net/gallery/179258677/Fonestar/modules/1012553863",
    logo: Fonestar
  },
  {
    url: "https://www.behance.net/gallery/179175939/Formula-Z/modules/1013175477",
    logo: FormulaZ
  },
  {
    url: "https://www.behance.net/gallery/179280385/Houduo/modules/1012668957",
    logo: Houduo
  },
  {
    url: "https://www.behance.net/gallery/179264673/Pill-Puncher/modules/1018790321",
    logo: PillPuncher
  },
]

export const ClientsCard = ({ url, logo }) => {
  return (
    <Link
      href={url}
      target="_blank"
    >
      <div className={styles.logoWrap}>
        <Image
          className={styles.logo}
          src={logo}
          alt="icon"
        />
      </div>
    </Link>
  )
}

const Clients = () => {
  return (
    <div className={styles.clients}>
      <h3>Clients</h3>
      <h1>Here are our some Favorite Clients</h1>
      <Marquee>
        {
          Clients_data.map((items) => {
            return <ClientsCard url={items.url} logo={items.logo} />
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
