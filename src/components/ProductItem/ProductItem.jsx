import { Box, Icon, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Rate from "../Rate/Rate";
import LabelNew from "./LabelNew";
import LabelSale from "./LabelSale";
import NavProductItem from "./NavProductItem";
import ChooseColor from "./ChooseColor";

const useStyle = () => ({
  itemProduct: {
    margin: "10px",
    marginBottom: "40px",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      "& .showAddCart": {
        top: "30px",
        opacity: 1,
        visibility: "visible",
      },
      "& .hideTitle": {
        opacity: 0,
      },
      "& .navItem": {
        right: "20px",
        opacity: 1,
      },
      "& .showChooseColor": {
        opacity: 1,
        transition: "all  1s ",
      },
    },
    "& #activeAddCart": {
      opacity: 1,
      animation: "$myClickAdd 1s linear",
    },
  },
  imgProduct: {
    display: "block",
    width: "100%",
  },
  detailProduct: {},
  h6: {
    fontFamily: '"Nunito Sans", sans-serif',
    color: "#111",
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "6px",
    transition: "all 0.3s",
  },
  h5: {
    color: "#0d0d0d",
    fontWeight: 700,
    fontSize: "18px",
  },
  linkAddCart: {
    color: "#E53637",
    fontSize: "15px",
    fontWeight: 700,
    position: "absolute",
    left: 0,
    top: "0px",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s",
  },
  labelNew: {
    color: "#111",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    display: "inline-block",
    padding: "4px 15px 2px",
    background: "#fff",
    position: "absolute",
    left: 0,
    top: "20px",
  },
  chooseColor: {
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0,
    transition: "all 0.5s",
  },
  animationAddCart: {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: 0,
    zIndex: "100",
    transform: "translate(-50% , -50%)",
    fontSize: "40px",
    color: "#02A388",
  },
  "@global": {
    "@keyframes myHoverProduct": {
      "0%": {
        opacity: "0",
        visibility: "hidden",
        top: 0,
      },
      "100%": {
        opacity: "1",
        visibility: "visible",
        top: "30px",
      },
    },
    "@keyframes myClickAdd": {
      "0%": {
        position: "absolute",
        top: "50%",
        left: "50%",
        opacity: 0,
        zIndex: "100",
        transform: "translate(-50% , -50%)",
        fontSize: "40px",
        color: "#02A388",
      },
      "25%": {
        position: "fixed",
        top: "50%",
        left: "60%",
        opacity: 1,
      },
      "50%": {
        position: "fixed",
        top: "50px",
        left: "70%",
        opacity: 1,
        zIndex: "100",
      },
      "75%": {
        position: "fixed",
        top: "50%",
        left: "80%",
        opacity: 1,
        zIndex: "100",
      },
      "100%": {
        position: "fixed",
        top: "0px",
        left: "95%",
        opacity: 1,
        display: "none",
      },
    },
  },
});
function toSlug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
}
class ProductItem extends Component {
  state = {
    clickAdd: false,
  };
  handleAddCart = () => {
    this.setState(
      {
        clickAdd: true,
      },
      () => this.callBackSetState()
    );
    this.props.addToCart(this.props.product , 1);
  };
  callBackSetState = () => {
    setTimeout(() => {
      this.setState({
        clickAdd: false,
      });
    }, 1000);
  };

  render() {
    const {
      classes,
      product,
      addToCart,
      likeProduct,
      changeRateProduct,
      changeColorProduct,
    } = this.props;
    return (
      <Box
        width={`calc(${this.props.width} - 20px)`}
        className={classes.itemProduct}
      >
        <Box position="relative">
          <Link
            to={{
              pathname: `/detail/${product.id}/${toSlug(product.name)}`,
              product: this.product,
            }}
          >
            <img
              className={classes.imgProduct}
              src={`https://preview.colorlib.com/theme/malefashion/img/product/${product.image}`}
              alt={product.name}
            />
          </Link>
          {product.new ? <LabelNew /> : <></>}
          {product.sale ? <LabelSale /> : <></>}
          {/* <Icon
            className={`${classes.animationAddCart}`}
            id={this.state.clickAdd ? "activeAddCart" : ""}
          >
            shopping_cart
          </Icon> */}
          <NavProductItem likeProduct={likeProduct} product={product} />
        </Box>
        <Box position="relative" paddingTop="30px">
          <Typography component="h6" className={`${classes.h6}  hideTitle`}>
            {product.name ? product.name : "---"}
          </Typography>
          <Link
            underline="none"
            className={`${classes.linkAddCart}  showAddCart`}
            onClick={this.handleAddCart}
          >
            + Add To Cart
          </Link>
          <Rate
            rate={product.rate}
            product={product}
            changeRateProduct={changeRateProduct}
          />
          <Typography component="h5" className={`${classes.h5}`}>
            {product.price ? `$${product.price}` : "---"}
          </Typography>
          <Box className={`${classes.chooseColor} showChooseColor`}>
            <ChooseColor
              color={product.color}
              changeColorProduct={changeColorProduct}
              product={product}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyle)(ProductItem);
