import Box from "@material-ui/core/Box";
import React, { Component } from "react";
import "./SlideShowItem.scss";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import "./SlideShowItem.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: " cover",
    backgroundPosition: "top center",
    position: "relative",
    transition: "background 0.5s  linear",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "100px 6em",
      height: "600px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "100px 2em",
      height: "600px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "100px 2em",
      height: "600px",
      backgroundPositionX: "-550px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "100px 2em",
      backgroundPositionX: "-600px",
    },
  },
  h6: {
    margin: 0,
    color: "#e53637",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "28px",
    position: "relative",
    top: 0,
    opacity: 1,
    transition: "all 0.3s",
  },
  h2: {
    margin: 0,
    color: "#111111",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "58px",
    marginBottom: "30px",
    position: "relative",
    top: 0,
    opacity: 1,
    transition: " all 0.6s",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  p: {
    color: "#3d3d3d",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "28px",
    marginBottom: "35px",
    position: "relative",
    top: 0,
    opacity: 1,
    transition: "all 0.9s",
  },
  a: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "14px 30px",
    color: "#ffffff",
    background: "#000000",
    letterSpacing: " 4px",
    position: "relative",
    top: 0,
    opacity: 1,
    transition: "all 1.1s",
    textDecoration: "none",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  arrowLeft: {
    color: "#3d3d3d",
    fontSize: "25px",
    position: "absolute",
    top: "50%",
    left: "3em",
    transform: "translateY(-50%)",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      left: "1em",
    },
    [theme.breakpoints.down("md")]: {
      left: "0em",
    },
    [theme.breakpoints.down("sm")]: {
      left: "0em",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  arrowRight: {
    color: "#3d3d3d",
    fontSize: "25px",
    position: "absolute",
    top: "50%",
    right: "3em",
    transform: "translateY(-50%)",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      right: "1em",
    },
    [theme.breakpoints.down("lg")]: {
      right: "0em",
    },
    [theme.breakpoints.down("md")]: {
      right: "0em",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  spanArrow: {
    fontFamily: "eleganticons",
    speak: "none",
    fontStyle: "normal",
    fontWeight: 400,
    fontVariant: "normal",
    textTransform: "none",
    "&::before": {
      content: "#",
    },
  },
  linkIcon: {
    color: "#3d3d3d",
    marginRight: "32px",
  },
  listLinkIcon: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  textSlide: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      maxWidth: "41%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
    },
  },
}));
function SlideShowItem(props) {
  const classes = useStyles();
  const { slideShow, slideShowBack, slideShowNext } = props;
  const handleSlideShowBack = (id) => {
    slideShowBack(id);
  };
  const handleSlideShowNext = (id) => {
    slideShowNext(id);
  };
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        width="100%"
        className="item-absolute new-active"
        display={slideShow.show ? "block" : "none"}
      >
        <Box
          className={classes.root}
          id="animation-background"
          height="800px"
          paddingLeft="12em"
          paddingTop="230px"
          style={{ backgroundImage: `url(${slideShow.background})` }}
        >
          <span
            className={classes.arrowLeft}
            onClick={() => handleSlideShowBack(slideShow.id)}
          >
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span
            className={classes.arrowRight}
            onClick={() => handleSlideShowNext(slideShow.id)}
          >
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
          <Box maxWidth="39%" className={classes.textSlide}>
            <h6 className={classes.h6}>Summer Collection</h6>
            <h2 className={classes.h2}>Fall - Winter Collections 2030</h2>
            <p className={classes.p}>
              A specialist label creating luxury essentials. Ethically crafted
              with an unwavering commitment to exceptional quality.
            </p>
          </Box>

          <a href="#" className={classes.a} id="btn-shop-now">
            SHOP NOW &ensp;
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          <Box
            display="flex"
            marginTop="190px"
            className={classes.listLinkIcon}
          >
            <a href="#" className={classes.linkIcon}>
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={classes.linkIcon}>
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className={classes.linkIcon}>
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a href="#" className={classes.linkIcon}>
              <i class="fab fa-instagram"></i>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SlideShowItem;
