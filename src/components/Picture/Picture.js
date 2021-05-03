import styles from "./Picture.module.css";

const Picture = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text1}>Welcome to Next App</div>
      <div className={styles.text2}>
        Lorem ipsum dolor sit amet, elit persecuti efficiendi
      </div>
      <button className={styles.btn} type="button">
        Start Now
      </button>
    </div>
  );
};

export default Picture;
