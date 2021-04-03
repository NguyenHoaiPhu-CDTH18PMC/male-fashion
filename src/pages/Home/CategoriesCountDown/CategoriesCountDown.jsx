import React, { Component, useEffect, useRef, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Link, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  content: {
    background: " #f3f2ee",
    overflow: "hidden",
    paddingTop: "150px",
    paddingBottom: "125px",
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "70px",
      paddingBottom: "50px",
      marginTop: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "70px",
      paddingBottom: "50px",
      marginTop: "50px",
    },
    "& >div": {
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {
        padding: "0px 6em",
      },
      [theme.breakpoints.down("md")]: {
        padding: "0px 2em",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0px 1em",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "0px 1em",
      },
    },
  },
  contentText: {
    paddingTop: "40px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
    },
    zIndex: 1,
    "&::before": {
      position: "absolute",
      left: "-485px",
      top: 0,
      height: "300px",
      width: "600px",
      background: "#fff",
      zIndex: -1,
      content: "''",
      [theme.breakpoints.down("xs")]: {
        height: "120px",
        width: "100%",
        left: "0",
      },
    },
  },
  left: {
    position: "relative",
    maxWidth: "25%",
    paddingRight: "15px",
    paddingLeft: "15px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      maxWidth: "100%",
      width: "100%",
      marginBottom: "60px",
    },
  },
  mid: {
    position: "relative",
    maxWidth: "33.33%",
    paddingRight: "15px",
    paddingLeft: "15px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      maxWidth: "100%",
      width: "100%",
      marginBottom: "30px",
    },
    "& img": {
      verticalAlign: "middle",
      borderStyle: "none",
      maxWidth: "100%",
    },
  },
  right: {
    marginLeft: "8.33%",
    maxWidth: "33.33%",
    position: "relative",
    paddingRight: "15px",
    paddingLeft: "15px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      marginLeft: "0",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0px",
      paddingLeft: "0px",
      maxWidth: "100%",
      width: "100%",
      textAlign: "center",
    },
  },
  colCountDown: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  h2: {
    margin: 0,
    color: "#111",
    fontWeight: 400,
    fontFamily: "nunito sans,sans-serif",
    color: "#b7b7b7",
    lineHeight: "72px",
    fontSize: "34px",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "40px",
      textAlign: "center",
    },
  },
  span: {
    fontWeight: 700,
    color: "#111",
  },
  labelSale: {
    height: "100px",
    width: "100px",
    background: "#111",
    borderRadius: "50%",
    paddingTop: "22px",
    textAlign: "center",
    position: "absolute",
    right: 0,
    top: "-36px",
    "& span": {
      display: "block",
      fontSize: "15px",
      color: "#fff",
      marginBottom: "4px",
      fontFamily: "nunito sans,sans-serif",
    },
    "& h5": {
      color: "#fff",
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
      fontFamily: "nunito sans,sans-serif",
    },
  },
  countDown: {
    "& >span": {
      color: "#e53637",
      fontSize: "14px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: "15px",
      display: "block",
    },
    "& >h2": {
      color: "#111",
      fontWeight: 700,
      lineHeight: "46px",
      marginBottom: "25px",
      fontFamily: "nunito sans,sans-serif",
      fontSize: "36px",
      margin: 0,

      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    },
  },
  timer: {
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
    },
  },
  itemTimer: {
    justifyContent: "space-between",
    marginBottom: "25px",
    position: "relative",
    width: "25%",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      justifyContent: "center",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "25%",
      right: 0,
      transform: "translateY(-50%)",
      fontSize: "25px",
      fontWeight: 700,
    },
    "& >span": {
      fontFamily: "nunito sans,sans-serif",
      fontWeight: 700,
      lineHeight: "46px",
      fontSize: "36px",
      display: "flex",
      justifyContent: "space-between",

      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
      "& span": {
        width: "100%",
        // [theme.breakpoints.between("992" , "1200")]:{
        //   fontSize: "24px",
        // },
      },
      "& p": {
        width: "100%",
        margin: 0,
        padding: 0,
        textAlign: "center",
      },
    },
    "& >p": {
      fontFamily: "nunito sans,sans-serif",
      fontWeight: 100,
      fontStyle: "normal",
      marginTop: "15px",

      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "7px",
        textAlign: "left",
        paddingLeft: "10px",
      },
    },
  },
  endItem: {
    "&::after": {
      content: "''",
    },
    "& span": {
      textAlign: "left",
      paddingLeft: "5px",
    },
  },
  buttonShopNow: {
    display: "inline-block",
    fontWeight: 700,
    fontSize: "13px",
    padding: "15px 30px",
    color: "white",
    background: "black",
    letterSpacing: "4px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
    },
  },
}));
function CategoriesCountDown(props) {
  const classes = useStyles();
  const [timmerDays, setTimmerDays] = useState("00");
  const [timmerHours, setTimmerHours] = useState("00");
  const [timmerMinutes, setTimmerMinutes] = useState("00");
  const [timmerSeconds, setTimmerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("April 5, 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop the timer
        clearInterval(interval.current);
      } else {
        setTimmerDays(days);
        setTimmerHours(hours);
        setTimmerMinutes(minutes);
        setTimmerSeconds(seconds);
      }
    }, 1000);
  };

  //componentDidMount

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <Box className={classes.content}>
        <Box padding="0 12em">
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.colCountDown}
          >
            <Box className={classes.left}>
              <Box className={classes.contentText}>
                <Typography component="h2" className={classes.h2}>
                  Clothings Hot
                  <br />
                  <Typography component="span" className={classes.span}>
                    Shoe Collection
                  </Typography>
                  <br />
                  Accessories
                </Typography>
              </Box>
            </Box>
            <Box className={classes.mid}>
              <Box className={classes.productSale}>
                <img
                  src="https://preview.colorlib.com/theme/malefashion/img/product-sale.png"
                  alt="Sale"
                />
                <Box className={classes.labelSale}>
                  <Typography component="span">Sale Of</Typography>
                  <Typography component="h5">$29.99</Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.right}>
              <Box className={classes.countDown}>
                <Typography component="span">Deal Of The Week</Typography>
                <Typography component="h2">
                  Multi-pocket Chest Bag Black
                </Typography>
                <Box className={classes.timer} display="flex">
                  <Box className={classes.itemTimer}>
                    <Typography component="span">
                      <span>
                        {timmerDays < 10 ? `0${timmerDays}` : timmerDays}
                      </span>{" "}
                      <p>:</p>
                    </Typography>
                    <Typography component="p">Days</Typography>
                  </Box>
                  <Box className={classes.itemTimer}>
                    <Typography component="span">
                      <span>
                        {timmerHours < 10 ? `0${timmerHours}` : timmerHours}
                      </span>{" "}
                      <p>:</p>
                    </Typography>
                    <Typography component="p">Hours</Typography>
                  </Box>
                  <Box className={classes.itemTimer}>
                    <Typography component="span">
                      <span>
                        {timmerMinutes < 10
                          ? `0${timmerMinutes}`
                          : timmerMinutes}
                      </span>
                      <p>:</p>
                    </Typography>
                    <Typography component="p">Minutes</Typography>
                  </Box>
                  <Box className={`${classes.itemTimer} ${classes.endItem}`}>
                    <Typography component="span">
                      <span>
                        {timmerSeconds < 10
                          ? `0${timmerSeconds}`
                          : timmerSeconds}
                      </span>
                    </Typography>
                    <Typography component="p">Seconds</Typography>
                  </Box>
                </Box>
              </Box>
              <Link className={classes.buttonShopNow} underline="none">
                SHOP NOW
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CategoriesCountDown;
