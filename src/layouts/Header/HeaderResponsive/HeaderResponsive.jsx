import React, { Component } from "react";
import Box from "@material-ui/core/Box";

import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import iconSearch from "../../../assets/images/search.webp";
import iconHeart from "../../../assets/images/heart.webp";
import iconCart from "../../../assets/images/cart.webp";
import { withTheme } from "@material-ui/styles";

const useStyle = (theme) => ({
  canvasMenuWraper: {
    position: "fixed",
    width: "300px",
    height: "100%",
    background: "#ffffff",
    padding: "50px 20px 30px 30px",
    zIndex: 199,
    overflowY: "auto",
    transition: "all 0.5s",
    top: 0,
    left: "-300px",
    opacity: "0",
    [theme.breakpoints.up("lg")]: {
      left: "-300px !important",
      opacity: "0 !important",
    },
  },
  canvasOption: {
    textAlign: "center",
    marginBottom: "30px",
  },
  canvasLink: {
    display: "inline-block",
    marginRight: "25px",
    "& a": {
      color: "#111111",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginRight: "16px",
      display: "inline-block",
      fontWeight: 600,
    },
    "& a:last-child": {
      marginRight: 0,
    },
  },
  canvasTopHover: {
    display: "inline-block",
    position: "relative",
    "& span": {
      color: "#111111",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      display: "inline-block",
      cursor: "pointer",
      fontWeight: 600,
      "&:hover": {
        "& + #choose-money-res": {
          opacity: 1,
          top: "20px",
        },
      },
    },
    "& ul": {
      padding: "10px 5px",
      margin: 0,
      background: "black",
      color: "white",
      display: "inline-block",
      position: "absolute",
      left: 0,
      top: "54px",
      opacity: 0,
      zIndex: 3,
      transition: "all 0.3s",
      listStyleType: "none",
      fontSize: "13px",
    },
  },
  canvasNavOption: {
    textAlign: "center",
    marginBottom: "25px",
    "& a": {
      display: "inline-block",
      marginRight: "26px",
      position: "relative",
      "& img": {
        maxWidth: "100%",
        verticalAlign: "middle",
        borderStyle: "none",
      },
      "& span": {
        color: "#0d0d0d",
        fontSize: "11px",
        position: "absolute",
        left: "5px",
        top: "8px",
      },
    },
  },
  price: {
    fontSize: "15px",
    color: "#111111",
    fontWeight: 700,
    display: "inline-block",
    marginLeft: "-20px",
    position: "relative",
    top: "3px",
  },
  mobileMenuWrap: {},
  slickNavMenu: {
    background: "transparent",
    padding: 0,
    marginBottom: "20px",
    fontSize: "16px",
  },
  slickNav: {
    "& >ul": {
      margin: 0,
      marginTop: "10px",
      paddingLeft: "30px",
      "& li": {
        display: "block",
        padding: "10px 0",
        "& a": {
          margin: 0,
          color: "#111111",
          fontWeight: 600,
        },
      },
    },
  },
  slickNavCollapsed: {
    padding: "10px 0 !important",
    paddingBottom: "10px!important",
    "&:hover": {
      "& ul": {
        maxHeight: "240px",
        transition: "max-height 0.2s ease-in-out",
      },
    },
  },
  slickArrow: {},
  dropdownSlickNavHidden: {
    transition: "max-height 1s ease-in-out",
    margin: 0,
    padding: 0,
    maxHeight: "0",
    overflow: "hidden",
  },
  textFreeShip: {
    fontSize: "15px",
    fontFamily: '"Nunito Sans", sans-serif',
    color: "#3d3d3d",
    fontWeight: 400,
    lineHeight: "25px",
    margin: "0 0 15px 0",
    paddingLeft: "30px",
  },
  noFocus: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    content: "''",
    zIndex: 198,
    transition: "all 0.5s",
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
});
class HeaderResponsive extends Component {
  render() {
    const { classes, isOpenMenu, idMenu, idNoFocus, toggleMenu } = this.props;
    return (
      <>
        <Box className={classes.canvasMenuWraper} id={idMenu}>
          <Box className={classes.canvasOption}>
            <Box className={classes.canvasLink}>
              <Link to="/signin" underline="none">
                Sign in
              </Link>
              <Link to="/faqs" underline="none">
                FAQs
              </Link>
            </Box>
            <Box className={classes.canvasTopHover}>
              <span>
                USD <i className="fa fa-caret-down" aria-hidden="true"></i>
              </span>
              <ul id="choose-money-res">
                <li>USD</li>
                <li>EUR</li>
                <li>USD</li>
              </ul>
            </Box>
          </Box>
          <Box className={classes.canvasNavOption}>
            <Link underline="none" to="" class="search-switch">
              <img src={iconSearch} alt="" />
            </Link>
            <Link underline="none" to="">
              <img src={iconHeart} alt="" />
            </Link>
            <Link underline="none" to="">
              <img src={iconCart} alt="" /> <span>0</span>
            </Link>
            <Box className={classes.price}>$0.00</Box>
          </Box>
          <Box id="mobile-menu-wrap" className={classes.mobileMenuWrap}>
            <Box className={classes.slickNavMenu}>
              <nav className={classes.slickNav}>
                <ul>
                  <li className="active">
                    <Link underline="none" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className={classes.slickNavCollapsed}>
                    <Link to="#" underline="none">
                      <Link underline="none" to="#">
                        Pages
                      </Link>
                      <span className={classes.slickArrow}>►</span>
                    </Link>
                    <ul className={classes.dropdownSlickNavHidden}>
                      <li>
                        <Link to="" underline="none">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link underline="none" to="">
                          Shop Details
                        </Link>
                      </li>
                      <li>
                        <Link to="" underline="none">
                          Shopping Cart
                        </Link>
                      </li>
                      <li>
                        <Link to="" underline="none">
                          Check Out
                        </Link>
                      </li>
                      <li>
                        <Link to="" underline="none">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link underline="none" to="">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="" underline="none">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            </Box>
          </Box>
          <Box className={classes.textFreeShip}>
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </Box>
        </Box>
        <div
          className={classes.noFocus}
          // style={{ display: isOpenMenu ? "block" : "none" }}
          id={idNoFocus}
          onClick={toggleMenu}
        ></div>
      </>
    );
  }
}
export default withStyles(useStyle)(HeaderResponsive);
