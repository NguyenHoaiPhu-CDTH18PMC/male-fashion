import { Box } from "@material-ui/core";
import React, { Component, useEffect, useRef, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FormCheckOutLeft from "./FormCheckOutLeft";
import FormCheckOutRight from "./FormCheckOutRight";
const useStyles = makeStyles((theme) => ({
  root: {
    "& h4": {
      color: "#111",
      fontWeight: "700",
      marginBottom: "8px",
      fontSize: "24px",
      fontFamily: "nunito sans,sans-serif",
      lineHeight: "1.2",
    },
  },
  nav: {
    "& a": {
      fontSize: "15px",
      color: "#111",
      display: "inline-block",
      position: "relative",
      fontFamily: "nunito sans,sans-serif",
    },
    "& p": {
      fontSize: "15px",
      display: "inline-block",
      position: "relative",
      fontFamily: "nunito sans,sans-serif",
    },
  },
}));
function ContentCheckOut(props) {
  const classes = useStyles();
  const {
    discountPrice,
    cartList,
    payCart,
    infoCustomer,
    changeAddressCustomer,
    changeFirstNameCustomer,
    changeLastNameCustomer,
    changeEmailCustomer,
    changePhoneCustomer,
  } = props;
  return (
    <Box>
      <Box style={{ backgroundColor: "#f3f2ee" }} padding="40px 12em">
        <Box className={classes.root}>
          <Typography component="h4">Shop</Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={classes.nav}
          >
            <Link color="inherit" href="/" underline="none">
              Home
            </Link>
            <Link color="inherit" href="/" underline="none">
              Shop
            </Link>
            <Typography color="#b7b7b7" component="p">
              Check Out
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <Box padding="100px 12em">
        <form>
          <Box display="flex" justifyContent="space-between">
            <FormCheckOutLeft
              changeAddressCustomer={changeAddressCustomer}
              changeFirstNameCustomer={changeFirstNameCustomer}
              changeLastNameCustomer={changeLastNameCustomer}
              changeEmailCustomer={changeEmailCustomer}
              changePhoneCustomer={changePhoneCustomer}
              infoCustomer={infoCustomer}
            />
            <FormCheckOutRight
              discountPrice={discountPrice}
              cartList={cartList}
              payCart={payCart}
              infoCustomer={infoCustomer}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default withStyles(useStyles)(ContentCheckOut);
