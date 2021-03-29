import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  itemShoppingCart: {
    borderBottom: "1px solid #f2f2f2",
    "& td": {
      paddingBottom: "30px",
      paddingTop: "30px",
      fontFamily: "nunito sans,sans-serif",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
    },
  },
  imgText: {
    display: "flex",
    width: "400px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  itemImg: {
    marginRight: "30px",
    width: "90px",
    height: "90px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "50px",
    },
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      marginRight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "5px",
    },
  },

  itemText: {
    overflow: "hidden",
    paddingTop: "21px",
    "& h6": {
      color: "#111111",
      fontSize: "15px",
      fontWeight: 600,
      marginBottom: "10px",
      margin: 0,
      fontFamily: '"Nunito Sans", sans-serif',
    },
    "& h5": {
      color: "#0d0d0d",
      fontWeight: 700,
      margin: 0,
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "18px",
    },
  },
  quantity: {
    width: "175px",
    paddingBottom: "30px",
    paddingTop: "30px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
    "& div": {
      width: "80px",
      "& input": {
        width: "50px",
        border: "none",
        textAlign: "center",
        color: "#111111",
        fontSize: "16px",
        overflow: "visible",
      },
      "& span": {
        fontSize: "16px",
        color: "#888888",
        width: "10px",
        cursor: "pointer",
      },
    },
  },
  cartPrice: {
    color: "#111111",
    fontSize: "18px",
    fontWeight: 700,
    width: "140px",
    paddingBottom: "30px",
    paddingTop: "30px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
  },
  cartClose: {
    paddingBottom: "30px",
    paddingTop: "30px",
    "& i": {
      fontSize: "18px",
      color: "#111111",
      height: "40px",
      width: "40px",
      background: "#f3f2ee",
      borderRadius: "50%",
      lineHeight: "40px",
      textAlign: "center",
    },
  },
});
class ShoppingCartProductItem extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.count !== this.props.cart.count) {
  //     this.setState({
  //       count: this.props.cart.count,
  //     });
  //   }
  // }
  handleChangeCount = (value, cart) => {
    if (value <= 10 && value >= 1) {
      this.props.changeCount(Number(value), cart);
    } else {
      this.props.changeCount("", cart);
    }
  };
  handleUpCount = (cart) => {
    if (this.props.cart.count < 10) {
      this.props.changeCount(this.props.cart.count + 1, cart);
    }
  };
  handleDownCount = (cart) => {
    if (this.props.cart.count > 1) {
      this.props.changeCount(this.props.cart.count - 1, cart);
    }
  };
  handleDelete = (cart) => {
    this.props.handleRemove(cart);
  };
  render() {
    const { classes, cart } = this.props;
    return (
      <tr className={classes.itemShoppingCart}>
        <td className={classes.imgText}>
          <div className={classes.itemImg}>
            <img
              src={`https://preview.colorlib.com/theme/malefashion/img/product/${cart.image}`}
              alt=""
            />
          </div>
          <div className={classes.itemText}>
            <h6>{cart.name}</h6>
            <h5>{`$${cart.price}`} </h5>
          </div>
        </td>
        <td className={classes.quantity}>
          <div>
            <div>
              <span
                className="fa fa-angle-left up"
                onClick={() => this.handleDownCount(cart)}
              ></span>
              <input
                type="text"
                value={this.props.cart.count}
                onChange={(e) =>
                  this.handleChangeCount(Number(e.target.value), cart)
                }
              />
              <span
                className="fa fa-angle-right down"
                onClick={() => this.handleUpCount(cart)}
              ></span>
            </div>
          </div>
        </td>
        <td className={classes.cartPrice}>${cart.total}</td>
        <td className={classes.cartClose}>
          <i
            className="fas fa-times"
            onClick={() => this.handleDelete(cart)}
          ></i>
        </td>
      </tr>
    );
  }
}

export default withStyles(useStyles)(ShoppingCartProductItem);
