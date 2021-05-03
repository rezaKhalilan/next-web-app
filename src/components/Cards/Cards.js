import React, { useState } from "react";
import styles from "./Cards.module.css";
import Image from "next/image";

import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Cards = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imag}>
          <Image
            className={styles.theimg}
            src="/1.jpg"
            width={200}
            height={120}
            layout="responsive"
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, elit persecuti efficiendi, elit persecuti
          efficiendi
        </p>
        <Button
          className={styles.btn}
          size="large"
          color="primary"
          variant="contained"
          aria-describedby={id}
          onClick={handleClick}
        >
          Click Me
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={styles.content}>
            Lorem ipsum dolor sit amet{" "}
            <img
              src="/logo.png"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            ></img>
          </Typography>
        </Popover>
      </div>
      <div className={styles.card}>
        <div className={styles.imag}>
          <Image
            className={styles.theimg}
            src="/2.jpg"
            width={200}
            height={120}
            layout="responsive"
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, elit persecuti efficiendi, elit persecuti
          efficiendi
        </p>
        <Button
          className={styles.btn}
          size="large"
          color="primary"
          variant="contained"
          aria-describedby={id}
          onClick={handleClick}
        >
          Click Me
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={styles.content}>
            Lorem ipsum dolor sit amet{" "}
            <img
              src="/logo.png"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            ></img>
          </Typography>
        </Popover>
      </div>
      <div className={styles.card}>
        <div className={styles.imag}>
          <Image
            className={styles.theimg}
            src="/3.jpg"
            width={200}
            height={120}
            layout="responsive"
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, elit persecuti efficiendi, elit persecuti
          efficiendi
        </p>
        <Button
          className={styles.btn}
          size="large"
          color="primary"
          variant="contained"
          aria-describedby={id}
          onClick={handleClick}
        >
          Click Me
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={styles.content}>
            Lorem ipsum dolor sit amet{" "}
            <img
              src="/logo.png"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            ></img>
          </Typography>
        </Popover>
      </div>
      <div className={styles.card}>
        <div className={styles.imag}>
          <Image
            className={styles.theimg}
            src="/4.jpg"
            width={200}
            height={120}
            layout="responsive"
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, elit persecuti efficiendi, elit persecuti
          efficiendi
        </p>
        <Button
          className={styles.btn}
          size="large"
          color="primary"
          variant="contained"
          aria-describedby={id}
          onClick={handleClick}
        >
          Click Me
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={styles.content}>
            Lorem ipsum dolor sit amet{" "}
            <img
              src="/logo.png"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            ></img>
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Cards;
