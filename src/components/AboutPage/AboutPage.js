import styles from "./AboutPage.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.myImage}
          src="/profile.jpg"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.section}>
        <h1 className={styles.name}>Reza Khalilan</h1>
        <h2 className={styles.title}>Front-end Developer</h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, elit persecuti efficiendi . Per an putent
          audiam adolescens, mel ceteros fierent democritum te. No ubique
          malorum euismod usu. Movet facilis democritum ea quo. Est ei illum
          consulatu accommodare, nam dicta expetenda suavitate ad.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
