import styles from "./Tag.module.css";

const Tag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        Special price in very limited{" "}
        <span style={{ color: "#7ed957" }}>times</span>
      </div>
      <div>
        <button className={styles.btn} type="button">
          Go , Baby Go
        </button>
      </div>
    </div>
  );
};

export default Tag;
