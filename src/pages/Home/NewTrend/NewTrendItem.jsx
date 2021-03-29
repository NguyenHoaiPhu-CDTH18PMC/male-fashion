import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Link, Typography } from "@material-ui/core";
const useStyle = (theme) => ({
  item: {
    position: "relative",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    width: "33.33%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  blogItem: {
    marginBottom: "45px",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.5",
    color: "#212529",
    textAlign: "left",
    fontFamily: "nunito sans,sans-serif",
    backgroundColor: "white",
  },
  blogItemText: {
    padding: "25px 30px 25px",
    margin: " 0 30px",
    marginTop: "-35px",
    background: " #fff",
    transition: "all 0.3s",
    overflow: "overlay",
    fontFamily: "nunito sans,sans-serif",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "25px 25px",
      margin: " 0 20px",
      marginTop: "-35px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "25px  25px",
      margin: " 0 20px",
      marginTop: "-35px",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    "& span": {
      color: " #3d3d3d",
      fontSize: "13px",
      display: "block",
      marginBottom: "10px",
      fontFamily: "nunito sans,sans-serif",
    },
    "& h5": {
      color: "#0d0d0d",
      fontWeight: 700,
      lineHeight: "28px",
      marginBottom: "10px",
      fontSize: "18px",
      fontFamily: "nunito sans,sans-serif",
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: "15px",
      },
    },
  },
  readMore: {
    display: "inline-block",
    color: "#111",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: " 4px",
    textTransform: " uppercase",
    padding: "3px 0",
    position: "relative",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "12px",
    },
    "&::after": {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "2px",
      background: " #111",
      content: "''",
      transition: "all 0.3s",
    },
    "&:hover": {
      "&::after": {
        width: "35%",
        background: " #E53637",
      },
    },
  },
  img: {
    "& img": {
      width: "100%",
    },
  },
});

class NewTrendItem extends Component {
  render() {
    const { classes, imgTrend } = this.props;
    return (
      <Box className={classes.item}>
        <Box className={classes.img}>
          <img src={this.props.imgTrend} alt="" />
        </Box>
        <Box className={classes.blogItem}>
          <Box className={classes.blogItemText}>
            <Typography component="span">
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/icon/calendar.png"
                alt=""
              />
              &ensp; 16 February 2020
            </Typography>
            <Typography component="h5">
              What Curling Irons Are The Best Ones
            </Typography>
            <Link href="#" underline="none" className={classes.readMore}>
              Read More
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyle)(NewTrendItem);
