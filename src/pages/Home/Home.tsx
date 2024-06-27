import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <p className={styles.heading}>SHAPING THE FUTURE OF CONNECTIVITY</p>
          <h1 className={styles.title}>Afriorbit</h1>
          <p className={styles.info}>
            
            AfriOrbit bridges the digital divide for businesses,
            providing secure, scalable, and sustainable data center solutions alongside reliable internet connectivity options.
            We empower you to revolutionize your operations with:
            Diverse connectiviy solutions, modern data centres, Edusat/Rocketry programs , Spaceport
          </p>
        </div>
        <Link to="destination/edusat">
          <button className={styles.button}>EXPLORE</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
