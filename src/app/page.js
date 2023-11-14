import styles from './page.module.css'
import HomePage from './homePage/page'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <HomePage />
      <ToastContainer />
    </div>
  )
};
