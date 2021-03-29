import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ShoppingCartProductItem from "./ShoppingCartProductItem";
const useStyles = (theme) => ({
  shoppingCartTable: {
    marginBottom: "30px",
    fontFamily: '"Nunito Sans", sans-serif',
    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      "& thead": {
        borderBottom: "1px solid #f2f2f2",
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
        "& tr": {
          "& th": {
            color: "#111111",
            fontSize: "16px",
            fontWeight: 700,
            textTransform: "uppercase",
            paddingBottom: "25px",
            textAlign: "left",
          },
        },
      },
      "& tbody": {},
    },
  },
  btnBottom: {
    "& .btn-continue": {
      "& a": {
        color: "#111111",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        border: "1px solid #e1e1e1",
        padding: "14px 35px",
        display: "inline-block",
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {
          padding: "8px 10px",
          fontSize: "12px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
          padding: "8px 10px",
        },
      },
    },
    "& .btn-update": {
      "& a": {
        color: "#ffffff",
        background: "#111111",
        borderColor: "#111111",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        border: "1px solid #e1e1e1",
        padding: "14px 35px",
        display: "inline-block",
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {
          padding: "8px 10px",
          fontSize: "12px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
          padding: "8px 10px",
        },
      },
    },
  },
});
class ShoppingCartLeft extends Component {
  render() {
    const { classes, cartList, changeCount, handleRemove } = this.props;
    return (
      <Box width="66.66%">
        <Box className={classes.shoppingCartTable}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((cart, index) => (
                <ShoppingCartProductItem
                  key={cart.idProduct}
                  cart={cart}
                  changeCount={changeCount}
                  handleRemove={handleRemove}
                />
              ))}
            </tbody>
          </table>
        </Box>
        <Box
          className={classes.btnBottom}
          display="flex"
          justifyContent="space-between"
        >
          <Box className="btn-continue">
            <Link to="/shop">Continue Shopping</Link>
          </Box>
          <Box className="btn-update">
            <Link underline="none" href="#">
              <i className="fa fa-spinner"></i> Update cart
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ShoppingCartLeft);
