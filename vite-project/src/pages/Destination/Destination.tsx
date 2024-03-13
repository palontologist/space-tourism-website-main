import styles from "./Destination.module.css";
import Menu from "../../Menu";
import { NavLink, Outlet } from "react-router-dom";

const Destination = () => {
  return (
    <div className={styles.background}>
      <Menu />
      <div className={styles.layout}>
        <div>
          <div>
            <h1>
              <span>01</span>PICK YOUR DESTINATION
            </h1>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
