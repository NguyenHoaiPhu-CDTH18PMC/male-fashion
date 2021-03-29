import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
const useStyle = (theme) => ({
  root: {
    maxWidth: "58.33%",
    // [theme.breakpoints.between("lg" , "xl")]:{
    //   maxWidth:"85%",
    // },
    // [theme.breakpoints.up( "xxl")]:{
    //   maxWidth: "58.33%",
    // },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
     },
     [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
     },
  },
  h2: {
    color: "#111",
    fontWeight: 700,
    lineHeight: "46px",
    fontSize: "36px",
    margin: "0",
    padding: "22px 0",
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
     
    },
    [theme.breakpoints.down("md")]: {
     
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  a: {
    display: "inline-block",
    color: "#111",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "4px",
    textTransform: "uppercase",
    padding: "3px 0",
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
     
    },
    [theme.breakpoints.down("md")]: {
     
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    "&::after": {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: " 2px",
      background: "#111",
      content: "''",
      transition: "all 0.3s",
    },
    "&:hover": {
      "&::after": {
        width: "40%",
        background: "#E53637",
      },
    },
  },
  img:{
    "& img":{

      [theme.breakpoints.down("xl")]: {
      
      },
      [theme.breakpoints.down("lg")]: {
        width:"75%",
      },
      [theme.breakpoints.down("md")]: {
        width:"75%",
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%",
      },
      [theme.breakpoints.down("xs")]: {
        width:"100%",
      },
    }
  },
  text:{
    [theme.breakpoints.down("sm")]: {
     textAlign: "center"
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    },
  }
});
class BannerTextBottom extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
          <Box position="relative" className={classes.root}>
            <Box className={classes.img}>
              <img src={this.props.img} alt="Banner" />
            </Box>
            <Box className={classes.text}>
              <h2 className={classes.h2}>{this.props.title}</h2>
              <a href="#" className={classes.a}>
                SHOP NOW
              </a>
            </Box>
          </Box>
      </>
    );
  }
}

export default withStyles(useStyle)(BannerTextBottom);
