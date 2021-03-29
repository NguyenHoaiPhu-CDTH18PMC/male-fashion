import { Box } from "@material-ui/core";
import React, { Component, useEffect, useRef, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  shopCartRight: {
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
  cartDiscount: {
    "& h6": {
      color: "#111111",
      fontWeight: 700,
      textTransform: "uppercase",
      marginBottom: "35px",
      fontSize: "16px",
      margin: 0,
      fontFamily: '"Nunito Sans", sans-serif',
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "30px",
      },
    },
    "& .inputDiscount": {
      display: "flex",
      "& input": {
        fontSize: "14px",
        color: "#b7b7b7",
        height: "50px",
        width: "100%",
        border: "1px solid #e1e1e1",
        paddingLeft: "20px",
        overflow: "visible",
        margin: 0,
        fontFamily: "inherit",
        lineHeight: "inherit",
        "&:focus": {
          outline: "none",
        },
      },
      "& button": {
        fontSize: "14px",
        color: "#ffffff",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        background: "#111111",
        padding: "0 30px",
        border: "none",
      },
    },
  },
  cartTotal: {
    background: "#f3f2ee",
    padding: "35px 40px 40px",
    "& h6": {
      color: "#111111",
      textTransform: "uppercase",
      marginBottom: "12px",
      fontSize: "16px",
      margin: 0,
      fontWeight: 400,
      fontFamily: '"Nunito Sans", sans-serif',
    },
    "& ul": {
      marginBottom: "25px",
      padding: 0,
      margin: 0,
      "& li": {
        listStyle: "none",
        fontSize: "16px",
        color: "#444444",
        lineHeight: "40px",
        overflow: "hidden",
        "& span": {
          fontWeight: 700,
          color: "#e53637",
          float: "right",
        },
      },
    },
    "& a": {
      display: "block",
      padding: "12px 10px",
      textAlign: "center",
      letterSpacing: "2px",
      fontSize: "13px",
      fontWeight: 700,
      textTransform: "uppercase",
      color: "#ffffff",
      background: "#000000",
      outline: "none",
      border: "none",
      "&:active": {
        outline: "none",
      },
    },
  },
}));
const END_POINT =
  "https://60472c879e5ab30017394469.mockapi.io/api/male-fashion";
function ShoppingCartRight(props) {
  const { cartList, payCart, checkCodeDiscount } = props;
  const classes = useStyles();
  const refDiscountCode = useRef(null);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);

  const handleAcceptDiscountCode = () => {
    setDiscountCode(refDiscountCode.current.value);
  };

  useEffect(() => {
    if (discountCode === "Hello") {
      setDiscountPrice(10);
    } else {
      setDiscountPrice(0);
    }
    checkCodeDiscount(discountCode);
  }, [discountCode]);
  const [newCartList, setNewCartList] = useState(cartList);
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("cartList"))) {
  //     setNewCartList(JSON.parse(localStorage.getItem("cartList")));
  //   }
  // }, []);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartList"))) {
      setNewCartList(JSON.parse(localStorage.getItem("cartList")));
      setTotalPrice(sumPrice(cartList));
    } else {
      setTotalPrice(0);
      setDiscountPrice(0);
    }
  }, [cartList]);

  const sumPrice = (newCartList) => {
    return newCartList.reduce((sum, cart) => sum + cart.total, 0);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePay = () => {
    payCart(newCartList.length, discountPrice, totalPrice);
  };
  return (
    <Box className={classes.shopCartRight} paddingLeft="30px" width="33.33%">
      <Box className={classes.cartDiscount} marginBottom="60px">
        <Typography component="h6">Discount codes</Typography>
        <Box className="inputDiscount">
          <input type="text" placeholder="Coupon code" ref={refDiscountCode} />
          <button onClick={handleAcceptDiscountCode}>Apply</button>
        </Box>
      </Box>
      <Box className={classes.cartTotal}>
        <Typography component="h6">Cart total</Typography>
        <ul>
          <li>
            Discount:
            <Typography component="span">{`$${discountPrice}`}</Typography>
          </li>
          <li>
            Total: <Typography component="span">{`$${totalPrice}`}</Typography>
          </li>
        </ul>
        <Link
          to="/checkout"
          id="proceed-to-checkout"
          // onClick={handlePay}
        >
          Proceed to checkout
        </Link>
      </Box>
    </Box>
  );
}

export default ShoppingCartRight;
