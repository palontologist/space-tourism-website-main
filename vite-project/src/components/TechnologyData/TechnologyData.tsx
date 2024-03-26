import data from "../../data.json";
import styles from "./TechnologyData.module.css";

interface Props {
  technology: string;
}
const MemberData = ({ technology }: Props) => {
  const technologyData = data.technology.find(
    (member) => member.name === technology
  );

  return (
    <div className={styles.container}>
      <p>THE TERMINOLOGY</p>
      <h1 className={styles.role}>{technologyData?.name.toUpperCase()}</h1>
      <p className={styles.description}>
        {technologyData?.description.toLocaleUpperCase()}
      </p>
    </div>
  );
};

export default MemberData;
