
import styles from "./Cases.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = ({ img, name, url }) => {
  return (
    <div className={styles.card}>
      <Image
        src={img}
        alt=""
        className={styles.image}
      />
      <div className={styles.details}>
        <span>{name}</span>
        <Link
          href={url}
          target="_blank">
          <p>View Details</p>
        </Link>
      </div>
    </div>
  )
};

export default Card;