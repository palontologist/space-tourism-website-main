import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";



// ... existing code ...

const Menu = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="/21.png"
            width="150"
            height="150"
            alt="Logo"
          />
        </div>
        {/* <div className={styles.line}></div> */}
        <ul
          className={`${styles[`menu-list`]} ${
            isHamburgerClicked ? styles.menuActive : null
          }`}
        >
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                  <span className={styles.bold}>00</span> HOME
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination/moon">
              {({ isActive }) => (
                <span className={isActive ? styles.active : styles[`not-moon`]}>
                  <span className={styles.bold}>01</span> EDUSPACE
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew/commander">
              {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                  <span className={styles.bold}>02</span> CREW
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology/launch-vehicle">
              {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                  <span className={styles.bold}>03</span> TECHNOLOGY
                </span>
              )}
            </NavLink>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${
            isHamburgerClicked ? styles.menuActive : null
          }`}
          onClick={() => setIsHamburgerClicked((prev) => !prev)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </div>
  );
};

export default Menu;


