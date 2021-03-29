import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ShoppingCartLeft from "./ShoppingCartLeft";
import ShoppingCartRight from "./ShoppingCartRight";
import { Link } from "react-router-dom";
const useStyles = (theme) => ({
  responsive: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      padding: "50px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 2em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "50px 1em",
    },
  },
  contentCart: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      padding: "50px 2em",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 2em",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "50px 1em",
      flexDirection: "column",
    },
    "& >.MuiBox-root ": {
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  },
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
});
class ShoppingCart extends Component {
  render() {
    const {
      classes,
      cartList,
      changeCount,
      handleRemove,
      payCart,
      checkCodeDiscount,
    } = this.props;
    return (
      <Box>
        <Box
          style={{ backgroundColor: "#f3f2ee" }}
          padding="40px 12em"
          className={classes.responsive}
        >
          <Box className={classes.root}>
            <Typography component="h4">Shopping Cart</Typography>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              className={classes.nav}
            >
              <Link to="/" underline="none">
                Home
              </Link>
              <Link to="/shop" underline="none">
                Shop
              </Link>
              <Typography color="#b7b7b7" component="p">
                Shopping Cart
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
        <Box
          padding="100px 12em"
          display="flex"
          justifyContent="center"
          className={classes.contentCart}
        >
          <ShoppingCartLeft
            cartList={cartList}
            changeCount={changeCount}
            handleRemove={handleRemove}
          />
          <ShoppingCartRight
            cartList={cartList}
            payCart={payCart}
            checkCodeDiscount={checkCodeDiscount}
          />
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ShoppingCart);
