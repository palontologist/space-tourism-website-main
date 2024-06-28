import data from "../../data.json";
import styles from "./PlanetData.module.css";

interface Props {
  planet: string;
}

const PlanetData = ({ planet }: Props) => {
  const planetData = data.destinations.find(
    (destination) => destination.name === planet
  );

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.name}>{planetData?.name.toUpperCase()}</h1>
        <p className={styles.description}>{planetData?.description}</p>
        <div className={styles.line}></div>

        <div className={styles[`bottom-section`]}>
          <div>
            <h2 className={styles[`bottom-title`]}> </h2>
            <p className={styles[`bottom-info`]}>
              {planetData?.distance.toUpperCase()}
            </p>
          </div>
          <div>
            <h2 className={styles[`bottom-title`]}>EST TIME</h2>
            <p className={styles[`bottom-info`]}>
              {planetData?.travel.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetData;
