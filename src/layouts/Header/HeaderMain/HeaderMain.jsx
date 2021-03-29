import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderLink from "./HeaderLink/HeaderLink";
import HeaderOption from "./HeaderOption/HeaderOption";
import { withStyles } from "@material-ui/core/styles";
import HeaderResponsive from "../HeaderResponsive/HeaderResponsive";
const useStyle = (theme) => ({
  headerMain: {
    [theme.breakpoints.down("lg")]: {
      padding: "30px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "30px 2em",
    },
  },
  bar: {
    display: "none",
    fontSize: "22px",
    color: "#111111",
    height: "35px",
    width: "35px",
    lineHeight: "35px",
    textAlign: "center",
    border: "1px solid #111111",
    borderRadius: "2px",
    cursor: "pointer",
    position: "absolute",
    right: "15px",
    top: "25px",
    "& + #show-menu": {
      opacity: 1,
      left: 0,
    },
    "& ~ #no-focus": {
      display: "block",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
});

class HeaderMain extends Component {
  render() {
    const {
      classes,
      isOpenMenu,
      toggleMenu,
      idMenu,
      idNoFocus,
      loadingNewPage,
      cartList,
    } = this.props;
    return (
      <Box
        className={classes.headerMain}
        display="flex"
        justifyContent="space-between"
        px="12em"
        py="30px"
        paddingBottom="20px"
        alignItems="flex-start"
      >
        <HeaderLogo />
        <HeaderLink loadingNewPage={loadingNewPage} />
        <HeaderOption cartList={cartList} />
        <Box className={classes.bar} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </Box>
        <HeaderResponsive
          isOpenMenu={isOpenMenu}
          idMenu={idMenu}
          idNoFocus={idNoFocus}
          toggleMenu={toggleMenu}
        />
      </Box>
    );
  }
}
export default withStyles(useStyle)(HeaderMain);
