import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
const useStyle = (theme) => ({
  root: {
    overflow: "hidden",
    maxWidth:"650px",
    position:"relative",
    
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth:"650px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth:"650px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth:"100%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth:"100%",
    },
  },
  img: {
    float: "right",
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
      
    },
    [theme.breakpoints.down("md")]: {
     
    },
    [theme.breakpoints.down("sm")]: {
      float: 'none'
    },
    [theme.breakpoints.down("xs")]: {
      float: 'none'
    },
    "& img":{
        maxWidth: '100%',
        verticalAlign: 'middle',
        borderStyle: 'none',
      [theme.breakpoints.down("xl")]: {
      
      },
      [theme.breakpoints.down("lg")]: {
        width:"100%",
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
  text: {
    maxWidth: "300px",
    position: "absolute",
    left: 0,
    top: "140px",
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
      width:"100%",
    },
    [theme.breakpoints.down("md")]: {
      width:"75%",
    },
    [theme.breakpoints.down("sm")]: {
      width:"100%",
      position: "static",
      maxWidth: "100%",
      textAlign: "center"
    },
    [theme.breakpoints.down("xs")]: {
      width:"100%",
      position: "static",
      maxWidth: "100%",
      textAlign: "center"
    },
  },
  h2: {
    color: "#111",
    fontWeight: 700,
    lineHeight: "46px",
    marginBottom: "10px",
    fontSize: "36px",
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
});
class BannerTextCenter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
          <Box className={classes.root}>
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

export default withStyles(useStyle)(BannerTextCenter);
