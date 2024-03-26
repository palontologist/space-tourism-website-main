import data from "../../data.json";
import styles from "./Member.module.css";

interface Props {
  crew: string;
}
const MemberData = ({ crew }: Props) => {
  const crewData = data.crew.find((member) => member.role === crew);

  return (
    <div className={styles.container}>
      <h1 className={styles.role}>{crewData?.role.toUpperCase()}</h1>
      <h2 className={styles.name}>{crewData?.name.toLocaleUpperCase()}</h2>
      <p className={styles.bio}>{crewData?.bio}</p>
    </div>
  );
};

export default MemberData;
