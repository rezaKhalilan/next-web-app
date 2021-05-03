import styles from "./RecentWork.module.css";

const RecentWork = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Recent Works</h1>
      <div className={styles.pictures}>
        <div className={styles.pic}>
          <img src="a.jpg" alt="Avatar" className={styles.image}></img>
          <div className={styles.overlay}>
            <div className={styles.text}>Project number 1</div>
          </div>
        </div>
        <div className={styles.pic}>
          <img src="b.jpg" alt="Avatar" className={styles.image}></img>
          <div className={styles.overlay}>
            <div className={styles.text}>Project number 2</div>
          </div>
        </div>
        <div className={styles.pic}>
          <img src="c.jpg" alt="Avatar" className={styles.image}></img>
          <div className={styles.overlay}>
            <div className={styles.text}>Project number 3</div>
          </div>
        </div>
        <div className={styles.pic}>
          <img src="d.jpg" alt="Avatar" className={styles.image}></img>
          <div className={styles.overlay}>
            <div className={styles.text}>Project number 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
