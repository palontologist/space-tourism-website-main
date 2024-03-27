import styles from "./TechnologyData.module.css";

interface Details {
  name: string;
  description: string;
}

interface Props {
  technologyData: Details | undefined;
}
const MemberData = ({ technologyData }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.caption}>THE TERMINOLOGY...</p>
      <h1 className={styles.name}>{technologyData?.name.toUpperCase()}</h1>
      <p className={styles.description}>
        {technologyData?.description.toLocaleUpperCase()}
      </p>
    </div>
  );
};

export default MemberData;
