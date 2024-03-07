import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.description}>
          <p className={styles.heading}>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className={styles.title}>SPACE</h1>
          <p className={styles.info}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className={styles.button}>EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;