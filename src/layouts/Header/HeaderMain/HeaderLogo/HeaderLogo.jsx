import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const useStyle = (theme) => ({
  logo: {
    "& img": {
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        //  width: '80%',
      },
      [theme.breakpoints.down("xs")]: {},
    },
  },
});
class HeaderLogo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Link to="/" className={classes.logo}>
          <img
            src="https://preview.colorlib.com/theme/malefashion/img/logo.png"
            alt="Male Fashion"
          />
        </Link>
      </>
    );
  }
}

export default withStyles(useStyle)(HeaderLogo);
