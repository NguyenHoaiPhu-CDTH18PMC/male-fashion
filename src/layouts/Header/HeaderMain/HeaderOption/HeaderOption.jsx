import React, { Component, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import iconSearch from "../../../../assets/images/search.webp";
import iconHeart from "../../../../assets/images/heart.webp";
import iconCart from "../../../../assets/images/cart.webp";
const useStyles = makeStyles((theme) => ({
  option: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icon: {
    marginLeft: "20px",
    padding: "5px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  cart: {
    position: "relative",
  },
  small: {
    position: "absolute",
    top: "16%",
    left: "63.5%",
    [theme.breakpoints.down("lg")]: {
      left: "37.5%",
    },
  },
  b: {
    paddingTop: "5px",
    marginLeft: "10px",
  },
}));
function HeaderOption(props) {
  const { cartList } = props;
  const classes = useStyles();

  const [newCartList, setNewCartList] = useState(cartList);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartList"))) {
      setNewCartList(JSON.parse(localStorage.getItem("cartList")));
    } else {
      setNewCartList([]);
    }
  }, []);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartList"))) {
      setNewCartList(JSON.parse(localStorage.getItem("cartList")));
    } else {
      setNewCartList([]);
    }
  }, [cartList]);

  const sumPrice = (newCartList) => {
    return newCartList.reduce((sum, cart) => sum + parseFloat(cart.total), 0);
  };
  const totalCount = newCartList.length;
  const totalPrice = sumPrice(newCartList);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        component="div"
        position="relative"
        className={classes.option}
      >
        <HeaderSearch />
        {/* <div>
               <i className={`fa fa-search ${classes.icon}`}aria-hidden="true"></i>
               <i class={`far fa-heart ${classes.icon}`} aria-hidden="true"></i>
            </div> */}
        <Box display="flex" justifyContent="space-between">
          <a href="">
            <img src={iconSearch} alt="Search" className={classes.icon} />
          </a>
          <a href="">
            <img src={iconHeart} alt="Heart" className={classes.icon} />
          </a>
          <Link to="/shopping-cart" className={classes.cart}>
            <img src={iconCart} alt="Cart" className={classes.icon} />
            <small className={classes.small}>{totalCount}</small>
          </Link>
          <b className={classes.b}>{`$${totalPrice}`}</b>
        </Box>
      </Box>
    </>
  );
}

export default HeaderOption;
