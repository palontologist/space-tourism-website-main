import data from "../../data.json";
import styles from "./Member.module.css";

interface Props {
  crew: string;
}
const Member = ({ crew }: Props) => {
  const crewData = data.crew.find((member) => member.role === crew);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.role}>{crewData?.role.toUpperCase()}</h1>
        <h2 className={styles.name}>{crewData?.name.toLocaleUpperCase()}</h2>
        <p className={styles.bio}>{crewData?.bio}</p>
      </div>

      <img src={crewData?.images.png} />
    </div>
  );
};

export default Member;
