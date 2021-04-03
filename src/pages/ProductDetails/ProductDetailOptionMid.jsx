import { Box, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Rating from "@material-ui/lab/Rating";
const useStyles = (theme) => ({
  countReview: {
    padding: 0,
    margin: 0,
    alignItems: "center",
    "& .MuiRating-sizeSmall": {
      height: "fit-content",
    },
    "& p": {
      display: "inline-block",
      color: "#3d3d3d",
      marginLeft: "5px",
      fontFamily: '"Nunito Sans", sans-serif',
    },
  },
  price: {
    color: "#0d0d0d",
    fontWeight: 700,
    marginBottom: "16px",
    marginTop: "20px",
    fontSize: "30px",
    margin: 0,
    color: "#111111",
    fontFamily: '"Nunito Sans", sans-serif',
    "& span": {
      color: "#b7b7b7",
      fontSize: "20px",
      fontWeight: 400,
      marginLeft: "10px",
      textDecoration: "line-through",
    },
  },
  description: {
    marginBottom: "35px",
    fontSize: "15px",
    fontFamily: '"Nunito Sans", sans-serif',
    color: "#3d3d3d",
    fontWeight: 400,
    lineHeight: "25px",
    margin: "0 0 15px 0",
  },
  optionSize: {
    "& span": {
      color: "#111111",
      display: "inline-block",
      marginRight: "10px",
      boxSizing: "border-box",
      textAlign: "center",
    },
    "& label": {
      color: "#111111",
      fontSize: "15px",
      fontWeight: 700,
      textTransform: "uppercase",
      display: "inline-block",
      border: "1px solid #e5e5e5",
      padding: "6px 15px",
      marginBottom: 0,
      marginRight: "5px",
      cursor: "pointer",
    },
    "& input": {
      position: "absolute",
      visibility: "hidden",
      "&:checked + label": {
        background: "#111111",
        color: "#ffffff",
        borderColor: " #111111",
      },
    },
  },
  optionColor: {
    marginTop: "5px",
    "& span": {
      color: "#111111",
      display: "inline-block",
      marginRight: "10px",
      position: "relative",
      top: "-9px",
    },
    "& label": {
      background: "#0b090c",
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      position: "relative",
      marginRight: "10px",
      marginBottom: 0,
      display: "inline-block",
      cursor: "pointer",
      "&::after": {
        position: "absolute",
        left: "-4px",
        top: "-4px",
        height: "36px",
        width: "36px",
        border: "1px solid red",
        content: "''",
        borderRadius: "50%",
        display: "none",
      },
    },
    "& input": {
      position: "absolute",
      visibility: "hidden",
      "&:checked + label::after": {
        display: "block",
      },
    },
  },
  inputNumber: {
    width: "150%",
    padding: "10px",
    paddingLeft: "10px",
    color: "#0d0d0d",
    fontSize: "15px",
    fontWeight: 700,
    textAlign: "center",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  addCart: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "14px 30px",
    color: "#ffffff",
    background: "#000000",
    letterSpacing: "4px",
    marginLeft: "70px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      padding: "12px 15px",
    },
  },
  buttonOption: {
    "& a": {
      display: "inline-block",
      fontSize: "13px",
      color: "#3d3d3d",
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontWeight: 700,
      margin: "10px",
    },
  },
  lastOption: {
    "& span": {
      color: "#111111",
      fontWeight: 700,
      fontSize: "20px",
      position: "relative",
    },
    "& p": {
      marginBottom: "26px",
    },
    "& ul": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
      marginTop: "20px",
      "& li": {
        fontSize: "15px",
        color: "#111111",
        fontWeight: 700,
        lineHeight: "30px",
        "& span": {
          fontWeight: 400,
          color: "#b7b7b7",
          fontSize: "15px",
          lineHeight: "30px",
        },
      },
    },
  },
  mainDetailsText: {
    "& h4": {
      color: "#111111",
      fontWeight: 700,
      marginBottom: "10px",
      fontSize: "24px",
      fontFamily: '"Nunito Sans", sans-serif',
    },
  },
  mainDetails: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  payment: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
});
class ProductDetailOptionMid extends Component {
  state = {
    count: 0,
  }
 
  handleAddCart = () => {
    this.props.addToCart(this.props.findProductDetail , this.state.count);
  };
  handleChangeCount = (value) => {
    if (value <= 10 && value >= 1) {
      this.setState({
        count: value
      })
    }
  };
  handleUpCount = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      })
    }
  };
  handleDownCount = () => {
    if (this.props.cart.count > 1) {
      this.setState({
        count: this.state.count - 1,
      })
    }
  };
  render() {
    const { classes, findProductDetail, cartList, changeCount ,  addToCart } = this.props;
    const findCart = cartList.find((item) => item.idProduct === findProductDetail.id);
    return (
      <Box display="flex" justifyContent="center">
        <Box width="70%" className={classes.mainDetails}>
          <Box className={classes.mainDetailsText} textAlign="center">
            <Typography component="h4">{findProductDetail.name}</Typography>
            <Box
              className={classes.countReview}
              display="flex"
              justifyContent="center"
            >
              <Rating
                name="half-rating"
                defaultValue={findProductDetail.rate}
                precision={0.5}
                size="small"
              />
              <Typography component="p">
                - {findProductDetail.review} Reviews
              </Typography>
            </Box>

            <Typography component="h3" className={classes.price}>
              {`$${findProductDetail.price}`}
              <Typography component="span">{`$${findProductDetail.oldPrice}`}</Typography>
            </Typography>
            <Typography component="p" className={classes.description}>
              {findProductDetail.description}
            </Typography>
            <Box
              className={classes.detailOption}
              display="flex"
              justifyContent="center"
            >
              <Box className={classes.optionSize} marginRight="30px">
                <Typography component="span">Size:</Typography>
                {findProductDetail.size.listSize.map((size, index) => (
                  <>
                    <input type="radio" id={size} name="size" />
                    <label for={size}>{size}</label>
                  </>
                ))}
              </Box>
              <Box className={classes.optionColor}>
                <Typography component="span">Color:</Typography>
                {findProductDetail.color.listColor.map((color, index) => (
                  <>
                    <input type="radio" id={color} name="color" />
                    <label
                      for={color}
                      style={{ backgroundColor: `${color}` }}
                      key={index}
                    ></label>
                  </>
                ))}
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" marginY="20px">
              <Box className={classes.quantity}>
                <Box>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className={classes.inputNumber}
                    value={this.state.count}
                    onChange={(e) =>
                      this.handleChangeCount(Number(e.target.value))
                    }
                  />
                </Box>
              </Box>
              <Link
                underline="none"
                onClick={this.handleAddCart}
                id="add-cart-detail"
                className={classes.addCart}
              >
                add to cart
              </Link>
            </Box>
            <Box
              className={classes.buttonOption}
              marginBottom="40px"
              display="flex"
              justifyContent="center"
            >
              <Link underline="none" href="#">
                <i class="fa fa-heart"></i> add to wishlist
              </Link>
              <Link underline="none" href="#">
                <i class="fas fa-exchange-alt"></i> Add To Compare
              </Link>
            </Box>
            <Box className={classes.lastOption}>
              <Typography>
                <span>Guaranteed Safe Checkout</span>
              </Typography>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/shop-details/details-payment.png"
                alt=""
                className={classes.payment}
              />
              <ul>
                <li>
                  <span>SKU:</span> {findProductDetail.id}
                </li>
                <li>
                  <span>Categories:</span> {findProductDetail.type}
                </li>
                <li>
                  <span>Tag:</span> Clothes, Skin, Body
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ProductDetailOptionMid);
