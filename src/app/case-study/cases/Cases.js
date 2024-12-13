"use client";

import Card from "./Card";
import styles from "./Cases.module.css";
import Formula from "@/app/_assets/png/formulaZ.webp";
import Avancus from "@/app/_assets/png/avancus.webp";
import Baraka from "@/app/_assets/png/baraka.webp";
import Elevate from "@/app/_assets/png/elevate.webp";
import Fonestar from "@/app/_assets/png/fonestar.webp";
import Grana from "@/app/_assets/png/grana.webp";
import Houduo from "@/app/_assets/png/houduo.webp";
import PillPuncher from "@/app/_assets/png/pill-puncher.webp";
import Metaleon from "@/app/_assets/png/metaleon.webp";

import Light from "@/app/_assets/png/light-one.webp";
import Luna from "@/app/_assets/png/luna.webp";
import Sony from "@/app/_assets/png/sony.webp";

const cases_data = [
  {
    id: "c1",
    img: Formula,
    name: "FORMULA Z",
    url: "https://www.behance.net/gallery/179175939/Formula-Z/modules/1013175477",
  },
  {
    id: "c2",
    img: Avancus,
    name: "AVANCUS",
    url: "https://www.behance.net/gallery/179276231/Avancus/modules/1018687355",
  },
  {
    id: "c3",
    img: Sony,
    name: "SONY",
    url: "https://www.behance.net/gallery/179199227/Sony/modules/1012195441",
  },
  {
    id: "c4",
    img: Elevate,
    name: "ELEVATE",
    url: "https://www.behance.net/gallery/178830637/Elevate-Beauty-3d-Animation-Fashion/modules/1010063989",
  },
  {
    id: "c5",
    img: Houduo,
    name: "HOUDUO",
    url: "https://www.behance.net/gallery/179280385/Houduo/modules/1012668957",
  },
  {
    id: "c6",
    img: Luna,
    name: "LUNA",
    url: "https://www.behance.net/gallery/178853083/LUNA/modules/1010191853",
  },
  {
    id: "c7",
    img: Metaleon,
    name: "METALEON",
    url: "https://www.behance.net/gallery/179182043/Metaleon/modules/1012103393",
  },
  {
    id: "c8",
    img: Baraka,
    name: "BARAKA",
    url: "https://www.behance.net/gallery/179283511/Baraka/modules/1012685793",
  },
  {
    id: "c9",
    img: Grana,
    name: "GRANAGARD",
    url: "https://www.behance.net/gallery/126319937/GranaGard-Tablets/modules/717030357",
  },
  {
    id: "c10",
    img: PillPuncher,
    name: "PILL PUNCHER",
    url: "https://www.behance.net/gallery/179264673/Pill-Puncher/modules/1018790321",
  },
  {
    id: "c11",
    img: Light,
    name: "LIGHT ONE",
    url: "https://www.behance.net/gallery/178844541/Light-One/modules/1010143713",
  },
  {
    id: "c12",
    img: Fonestar,
    name: "FONESTAR",
    url: "https://www.behance.net/gallery/179258677/Fonestar/modules/1012553863",
  },
];
const Cases = () => {
  return (
    <div className={styles.carrers}>
      {cases_data.map((item) => {
        return (
          <Card key={item.id} img={item.img} name={item.name} url={item.url} />
        );
      })}
    </div>
  );
};

export default Cases;
