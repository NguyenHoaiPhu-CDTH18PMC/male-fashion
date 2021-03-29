import { Box } from "@material-ui/core";
import React, { Component, useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { borderRight } from "@material-ui/system";
import FormCheckOutLeft from "./FormCheckOutLeft";
const useStyles = makeStyles((theme) => ({
  checkBox: {
    "& label": {
      fontSize: "15px",
      color: "#0d0d0d",
      position: "relative",
      paddingLeft: "30px",
      cursor: "pointer",
      marginBottom: "16px",
      display: "block",
      fontFamily: '"Nunito Sans", sans-serif',
    },
    "& input": {
      position: "absolute",
      visibility: "hidden",
      "&:checked~ #checked-create": {
        borderColor: "red",
        "&:after": {
          opacity: 1,
        },
      },
      "&:checked~ #checked-pay-ment": {
        borderColor: "red",
        "&:after": {
          opacity: 1,
        },
      },
      "&:checked~ #checked-pay-all": {
        borderColor: "red",
        "&:after": {
          opacity: 1,
        },
      },
    },
  },
  checkMark: {
    position: "absolute",
    left: 0,
    top: "3px",
    height: "14px",
    width: "14px",
    border: "1.5px solid #d7d7d7",
    content: "''",
    borderRadius: "2px",
    "&::after": {
      position: "absolute",
      left: "1px",
      top: "1px",
      width: "10px",
      height: "5px",
      border: "solid #e53637",
      borderWidth: "1.5px 1.5px 0px 0px",
      transform: "rotate(127deg)",
      content: "''",
      opacity: 0,
    },
  },
  checkOutPay: {
    background: "#f3f2ee",
    padding: "30px",
    "& h4": {
      color: "#111111",
      fontWeight: 700,
      textTransform: "uppercase",
      borderBottom: "1px solid #d7d7d7",
      paddingBottom: "25px",
      marginBottom: "30px",
      fontSize: "24px",
      margin: 0,
      fontFamily: '"Nunito Sans", sans-serif',
    },
  },
  productTotal: {
    fontSize: "16px",
    color: "#111111",
    overflow: "hidden",
    marginBottom: "18px",
    fontFamily: '"Nunito Sans", sans-serif',
    "& span": {
      float: "right",
    },
  },
  listProductTotal: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    fontSize: "16px",
    color: "#111111",
    overflow: "hidden",
    marginBottom: "18px",
    fontFamily: '"Nunito Sans", sans-serif',
    "& li": {
      fontSize: "16px,",
      color: "#444444",
      listStyle: "none",
      lineHeight: "26px",
      overflow: "hidden",
      marginBottom: "15px",
      "& span": {
        float: "right",
      },
    },
  },
  totalAll: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    borderTop: "1px solid #d7d7d7",
    borderBottom: "1px solid #d7d7d7",
    padding: "15px 0",
    marginBottom: "26px",
    "& li": {
      listStyle: "none",
      fontSize: "16px",
      color: "#111111",
      lineHeight: "40px",
      overflow: "hidden",
      "& span": {
        float: "right",
        color: " #e53637",
        fontWeight: 700,
      },
    },
  },
  textBottom: {
    color: "#444444",
    fontSize: "16px",
    lineHeight: "28px",
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 400,
    margin: "0 0 15px 0",
  },
  buttonPay: {
    width: "100%",
    marginTop: "8px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#ffffff",
    background: "#111111",
    fontWeight: 700,
    border: "none",
    textTransform: "uppercase",
    display: "inline-block",
    padding: "14px 30px",
  },
}));
function FormCheckOutRight(props) {
  const {
    cartList,
    payCart,
    discountPrice,
    customer,
    address,
    email,
    phone,
  } = props;
  const classes = useStyles();
  const sumPrice = (newCartList) => {
    return newCartList.reduce((sum, cart) => sum + cart.total, 0);
  };
  const [newCartList, setNewCartList] = useState(cartList);
  const [totalPrice, setTotalPrice] = useState(0);
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
    }
  }, [cartList]);
  const handlePay = (e) => {
    e.preventDefault();
    payCart(newCartList.length, discountPrice, totalPrice);
    if (payCart(newCartList.length, discountPrice, totalPrice) === true) {
      setNewCartList([]);
    }
  };

  return (
    <Box className={classes.infoLeft} width="31%">
      <Box className={classes.checkOutPay}>
        <Typography varian="h4" component="h4">
          Your order
        </Typography>
        <Box class={classes.productTotal}>
          Product <span>Total</span>
        </Box>
        <ul className={classes.listProductTotal}>
          {newCartList
            ? newCartList.map((cart, index) => (
                <li key={index}>
                  {`${index + 1}. ${cart.name}`}
                  <span>{`$${cart.price * cart.count}`}</span>
                </li>
              ))
            : ""}
        </ul>
        <ul class={classes.totalAll}>
          <li>
            Discount <span>{`$${discountPrice}`}</span>
          </li>
          <li>
            Total <span>{`$${totalPrice}`}</span>
          </li>
        </ul>
        <Box className={classes.checkBox}>
          <label for="create-acount-right">
            Create an account?
            <input type="checkbox" id="create-acount-right" />
            <span className={classes.checkMark} id="checked-create"></span>
          </label>
        </Box>
        <Typography className={classes.textBottom}>
          Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box className={classes.checkBox}>
          <label for="pay-ment">
            Check Payment
            <input type="checkbox" id="pay-ment" />
            <span className={classes.checkMark} id="checked-pay-ment"></span>
          </label>
        </Box>
        <Box className={classes.checkBox}>
          <label for="pay-all">
            Paypal
            <input type="checkbox" id="pay-all" />
            <span className={classes.checkMark} id="checked-pay-all"></span>
          </label>
        </Box>
        <button className={classes.buttonPay} onClick={handlePay}>
          PLACE ORDER
        </button>
      </Box>
    </Box>
  );
}

export default withStyles(useStyles)(FormCheckOutRight);
