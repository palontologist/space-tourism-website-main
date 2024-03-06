import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <svg
        className={styles.logo}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className={styles.line}></div>
      <ul className={styles[`menu-list`]}>
        <li>
          <span className={styles.bold}>00</span> HOME
        </li>
        <li>
          <span className={styles.bold}>01</span> DESTINATION
        </li>
        <li>
          <span className={styles.bold}>02</span> CREW
        </li>
        <li>
          <span className={styles.bold}>03</span> TECHNOLOGY
        </li>
      </ul>
    </div>
  );
};

export default Menu;
