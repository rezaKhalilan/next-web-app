import styles from "./Pricing.module.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Pricing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Our features and pricing</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, labores dolorum scriptorem eum an, te quodsi
        sanctus neglegentur eam, et lorem persecuti conclusionemque mei.
      </p>
      <div className={styles.prices}>
        <div className={styles.card}>
          <h1 className={styles.card_heading}>Choose package and start grow</h1>
          <p className={styles.card_text}>
            Per an putent audiam adolescens, mel ceteros fierent democritum te.
            No ubique malorum euismod usu. Movet facilis democritum ea quo. Est
            ei illum consulatu accommodare, nam dicta expetenda suavitate ad.
          </p>
        </div>
        <div className={styles.card_gray}>
          <h1 className={styles.card_heading}>Standard</h1>
          <h3 className={styles.card_price}>$9 / Month</h3>
          <p className={styles.para}>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} />
              For 1 Application
            </div>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} />
              Free one year support
            </div>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} /> Unlimited disk spaces
            </div>
          </p>
          <button type="button" className={styles.btn}>
            Sign Up
          </button>
        </div>
        <div className={styles.card_gray}>
          <h1 className={styles.card_heading}>Medium</h1>
          <h3 className={styles.card_price}>$29 / Month</h3>
          <p className={styles.para}>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} />
              For 10 Application
            </div>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} />
              Free one year support
            </div>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} /> Unlimited disk spaces
            </div>
          </p>
          <button type="button" className={styles.btn}>
            Sign Up
          </button>
        </div>
        <div className={styles.card_gray}>
          <h1 className={styles.card_heading}>Elite</h1>
          <h3 className={styles.card_price}>$59 / Month</h3>
          <p className={styles.para}>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} />
              For unlimited appliacations
            </div>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} />
              Free life time support
            </div>
            <div className={styles.line}>
              <CheckCircleIcon className={styles.tick} /> Unlimited disk spaces
            </div>
          </p>
          <button type="button" className={styles.btn}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
