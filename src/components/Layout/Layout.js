import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

const Layout = ({ children, title = "Next Web" }) => {
  const [theme, setTheme] = useState("firstTheme");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "firstTheme") {
      setTheme("secondTheme");
      localStorage.setItem("theme", "secondTheme");
      document.documentElement.setAttribute("data-theme", "secondTheme");
    } else {
      setTheme("firstTheme");
      localStorage.setItem("theme", "firstTheme");
      document.documentElement.setAttribute("data-theme", "firstTheme");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/title-logo.png" />
      </Head>

      <header>
        <div className={styles.topHeader}>
          <div className={styles.links}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
            <button
              className={styles.theme}
              onClick={switchTheme}
              type="button"
            >
              Change Theme
            </button>
          </div>
          <div className={styles.icons}>
            <a>
              <FacebookIcon />
            </a>
            <a>
              <TwitterIcon />
            </a>
            <a>
              <EmailIcon />
            </a>
          </div>
        </div>

        <div className={styles.logoAndLinks}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              className={styles.img}
            ></Image>
          </div>
          <div className={styles.text}>
            Create Next
            <br /> Generation Web Apps
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer>
        <div className={styles.footer}>
          <div className={styles.footer_left}>
            <Image
              src="/logo.png"
              width={80}
              height={80}
              className={styles.img}
            ></Image>
            <div className={styles.footer_text}>
              Make Dreams Come to Reality
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_title}>Browse Pages</div>
            <div className={styles.footer_links}>
              <ul>
                <li>Our Company</li>
                <li>Terms and Conditions</li>
                <li>What We Have Done</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.lowerFooter}>
          <div className={styles.lowerFooter_text}>All Rights Reserved</div>
          <div className={styles.lowerFooter_title}>
            Created by Reza Khalilan
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
