import { NavLink } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import styles from "./Crew.module.css";
import MemberData from "../../components/Member/MemberData";
import data from "../../data.json";

interface Props {
  crew: string;
}

const Crew = ({ crew }: Props) => {
  const crewData = data.crew.find((member) => member.role === crew);

  return (
    <div className={styles.background}>
      <Menu />

      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>02</span>MEET YOUR CREW
        </h1>

        <div className={styles[`second-section`]}>
          <div className={styles[`main-content`]}>
            <ul className={styles[`crew-menu`]}>
              <li>
                <NavLink to="../commander">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    ></div>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="../mission-specialist">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    ></div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="../pilot">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    ></div>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="../flight-engineer">
                  {({ isActive }) => (
                    <div
                      className={`${isActive ? styles.active : styles.option} `}
                    ></div>
                  )}
                </NavLink>
              </li>
            </ul>
            <MemberData crew={crew} />
          </div>
          <img className={styles.photo} src={crewData?.images.png} />
        </div>
      </div>
    </div>
  );
};

export default Crew;
