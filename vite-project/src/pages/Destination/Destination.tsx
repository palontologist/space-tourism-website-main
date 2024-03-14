import styles from "./Destination.module.css";
import Menu from "../../Menu";
import { NavLink } from "react-router-dom";
import Planet from "../Planet/Planet";

interface Props {
  planet: string;
}

const Destination = ({ planet }: Props) => {
  return (
    <div className={styles.background}>
      <Menu />
      <div className={styles.layout}>
        <div>
          <div>
            <h1 className={styles.title}>
              <span>01</span>PICK YOUR DESTINATION
            </h1>
          </div>
          <div className={styles[`second-section`]}>
            <div className={styles[`planets-menu`]}>
              <nav>
                <NavLink to="../moon">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>MOON</p>
                  )}
                </NavLink>
              </nav>
              <nav>
                <NavLink to="../mars">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>MARS</p>
                  )}
                </NavLink>
              </nav>
              <nav>
                <NavLink to="../europa">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>EUROPA</p>
                  )}
                </NavLink>
              </nav>
              <nav>
                <NavLink to="../titan">
                  {({ isActive }) => (
                    <p className={isActive ? styles.active : ""}>TITAN</p>
                  )}
                </NavLink>
              </nav>
            </div>
            <Planet planet={planet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
