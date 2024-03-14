import data from "../../data.json";
import styles from "./Planet.module.css";

interface Props {
  planet: string;
}

const Planet = ({ planet }: Props) => {
  const planetData = data.destinations.find(
    (destination) => destination.name === planet
  );

  return (
    <div className={styles.container}>
      <img src={planetData?.images.png} />
      <div>
        <h1 className={styles.name}>{planetData?.name.toUpperCase()}</h1>
        <p className={styles.description}>{planetData?.description}</p>
        <div className={styles.line}></div>

        <div className={styles[`bottom-section`]}>
          <div>
            <h2 className={styles[`bottom-title`]}>AVG. DISTANCE</h2>
            <p className={styles[`bottom-info`]}>
              {planetData?.distance.toUpperCase()}
            </p>
          </div>
          <div>
            <h2 className={styles[`bottom-title`]}>EST. TRAVEL TIME</h2>
            <p className={styles[`bottom-info`]}>
              {planetData?.travel.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
