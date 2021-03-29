import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Box from "@material-ui/core/Box";

const useStyle = () => ({
  root: {
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    position: "relative",
    lineHeight: 2.3,
    "&:hover": {
      color: "#e53637",
    },
  },
  navDropdown: {
    listStyleType: "none",
    padding: "10px 20px",
    paddingRight: "40px",
    margin: 0,
    position: "absolute",
    top: "60px",
    left: "0",
    width: "max-content",
    backgroundColor: "#111111",
    zIndex: 199,
    opacity: 0,
    transition: "all 0.3s linear",
  },
});

class DropdownPages extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Box
          component="ul"
          className={classes.navDropdown}
          underline="none"
          id="drop-down-page"
        >
          <li>
            <Link to="about" className={classes.root} underline="none">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/shop/detail" className={classes.root} underline="none">
              Shop Details
            </Link>
          </li>
          <li>
            <Link to="/shopping-cart" className={classes.root} underline="none">
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" className={classes.root} underline="none">
              Check Out
            </Link>
          </li>
          <li>
            <Link to="/blog/details" className={classes.root} underline="none">
              Blog Details
            </Link>
          </li>
        </Box>
      </>
    );
  }
}

export default withStyles(useStyle)(DropdownPages);
