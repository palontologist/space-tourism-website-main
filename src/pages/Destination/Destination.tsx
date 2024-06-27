import styles from "./Destination.module.css";
import Menu from "../../components/Menu/Menu";
import { NavLink } from "react-router-dom";
import PlanetData from "../../components/PlanetData/PlanetData";
import data from "../../data.json";
interface Props {
  planet: string;
}

const Destination = ({ planet }: Props) => {
  const planetData = data.destinations.find(
    (destination) => destination.name === planet
  );
  return (
    <div className={styles.background}>
      <Menu />
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>01</span>Empower the Future with Edusat
        </h1>

        <div className={styles[`second-section`]}>
          <img className={styles.planetPhoto} src={planetData?.images.png} />
          <div>
            <div className={styles[`planets-menu`]}>
              <nav>
                <NavLink to="../edusat">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>EDUSAT</p>
                  )}
                </NavLink>
              </nav>
              <nav>
                <NavLink to="../rocketry">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>ROCKETRY</p>
                  )}
                </NavLink>
              </nav>
              <nav>
                <NavLink to="../robotics">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>ROBOTICS</p>
                  )}
                </NavLink>
              </nav>
              <nav>
                <NavLink to="../iot">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>IOT</p>
                  )}
                </NavLink>
              </nav>
            </div>
            <PlanetData planet={planet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
