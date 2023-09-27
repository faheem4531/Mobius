import styles from './Clients.module.css'
import Image from 'next/image';

const Review = ({ name }) => {
  return (
    <div className={styles.review}>
      <h2>{name}</h2>
      <span>COORDINATOR</span>
      <p>“Regardless of the type of testimonial you like to use, letting people know exactly what benefits
        your product or service can offer them in the words of people. Product or service can offer them in
        the words of people.” </p>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="98" height="19" viewBox="0 0 98 19" fill="none">
          <path d="M10.0186 0.078125L12.8324 5.50308L19.2914 6.29697L14.5715 10.4437L15.7495 16.3593L10.0186 13.4971L4.28765 16.3593L5.46561 10.4437L0.745753 6.29697L7.20468 5.50308L10.0186 0.078125Z" fill="#BC9362" />
          <path d="M29.5186 0.078125L32.3324 5.50308L38.7914 6.29697L34.0715 10.4437L35.2495 16.3593L29.5186 13.4971L23.7876 16.3593L24.9656 10.4437L20.2458 6.29697L26.7047 5.50308L29.5186 0.078125Z" fill="#BC9362" />
          <path d="M49.0186 0.078125L51.8324 5.50308L58.2914 6.29697L53.5715 10.4437L54.7495 16.3593L49.0186 13.4971L43.2876 16.3593L44.4656 10.4437L39.7458 6.29697L46.2047 5.50308L49.0186 0.078125Z" fill="#BC9362" />
          <path d="M68.5186 0.078125L71.3324 5.50308L77.7914 6.29697L73.0715 10.4437L74.2495 16.3593L68.5186 13.4971L62.7876 16.3593L63.9656 10.4437L59.2458 6.29697L65.7047 5.50308L68.5186 0.078125Z" fill="#BC9362" />
          <path d="M88.0186 0.078125L90.8324 5.50308L97.2914 6.29697L92.5715 10.4437L93.7495 16.3593L88.0186 13.4971L82.2876 16.3593L83.4656 10.4437L78.7458 6.29697L85.2047 5.50308L88.0186 0.078125Z" fill="#BC9362" />
        </svg>
      </div>
    </div>
  )
};

export default Review;
