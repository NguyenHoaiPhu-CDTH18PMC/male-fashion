import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import DropdownPages from "../DropdownPages/DropdownPages";

const useStyle = (theme) => ({
  root: {
    color: "#111111",
    fontSize: "18px",
    fontWeight: "600",
    position: "relative",
    height: "fit-content",
    cursor: "pointer",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("xxl")]: {
      fontSize: "18px",
    },
    "&::after": {
      content: "''",
      width: "0%",
      height: "2px",
      position: "absolute",
      bottom: "-3px",
      backgroundColor: "#E53637",
      left: "50%",
      transform: "translateX(-50%)",
      transition: "width 250ms linear",
    },
    "&:hover": {
      "&::after": {
        width: "100%",
        // animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
        animation: "$myHoverLineBottom 250ms linear",
      },
    },
  },
  navLink: {
    listStyleType: "none",
    marginLeft: 0,
    margin: 0,
    padding: 0,
    height: "fit-content",
    "& #page-hover:hover": {
      "& #drop-down-page": {
        top: "30px",
        opacity: 1,
      },
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  "@global": {
    "@keyframes myHoverLineBottom": {
      "0%": {
        height: "3px",
      },
      "100%": {
        height: "2px",
      },
    },
  },
});

class HeaderLink extends Component {
  render() {
    const { classes , loadingNewPage } = this.props;
    const handleRedirect = ()=>{
      loadingNewPage();
    }
    return (
      <>
        <Box
          display="flex"
          justifyContent="space-between"
          width="40%"
          component="ul"
          className={classes.navLink}
        >
          <li>
            <Link to="/" className={classes.root} underline="none" onClick={handleRedirect}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={classes.root} underline="none" onClick={handleRedirect}>
              Shop
            </Link>
          </li>
          <li className={classes.root} id="page-hover">
            Pages
            <DropdownPages />
          </li>
          <li>
            <Link to="/blog" className={classes.root} underline="none" onClick={handleRedirect}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.root} underline="none" onClick={handleRedirect}>
              Contacts
            </Link>
          </li>
        </Box>
      </>
    );
  }
}

export default withStyles(useStyle)(HeaderLink);
