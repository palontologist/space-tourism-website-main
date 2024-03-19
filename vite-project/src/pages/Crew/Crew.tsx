import { NavLink } from "react-router-dom";
import Menu from "../../Menu";
import styles from "./Crew.module.css";
import Member from "../Member/Member";

interface Props {
  crew: string;
}

const Crew = ({ crew }: Props) => {
  return (
    <div className={styles.background}>
      <Menu />
      <div>
        <div>
          <h1 className={styles.title}>
            <span>02</span>MEET YOUR CREW
          </h1>
        </div>

        <div className={styles[`second-section`]}>
          <div className={styles[`crew-menu`]}>
            <nav>
              <NavLink to="../commander">
                {({ isActive }) => (
                  <div
                    className={`${isActive ? styles.active : styles.option} `}
                  ></div>
                )}
              </NavLink>
            </nav>
          </div>
          <Member crew={crew} />
        </div>
      </div>
    </div>
  );
};

export default Crew;
