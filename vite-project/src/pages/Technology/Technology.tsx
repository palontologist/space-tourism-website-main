import { NavLink } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import styles from "./Technology.module.css";
import data from "../../data.json";
import TechnologyData from "../../components/TechnologyData/TechnologyData";
import { useEffect, useState } from "react";

interface Props {
  technology: string;
}

const Technology = ({ technology }: Props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const technologyData = data.technology.find(
    (member) => member.name === technology
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1280) {
        setIsLargeScreen(true);
      }
      if (window.innerWidth < 1280) {
        setIsLargeScreen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.background}>
      <Menu />

      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>03</span>SPACE LAUNCH 101
        </h1>

        <div className={styles[`second-section`]}>
          <div className={styles[`main-body`]}>
            <ul className={styles[`technology-menu`]}>
              <li>
                <NavLink to="../launch-vehicle">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    >
                      1
                    </div>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="../spaceport">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    >
                      2
                    </div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="../space-capsule">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    >
                      3
                    </div>
                  )}
                </NavLink>
              </li>
            </ul>
            <TechnologyData technology={technology} />
          </div>
          <img
            className={styles.photo}
            src={
              isLargeScreen
                ? technologyData?.images.portrait
                : technologyData?.images.landscape
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
