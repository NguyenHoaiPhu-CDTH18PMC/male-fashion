import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FilterSearchLeft from "../FilterSearchLeft/FilterSearchLeft";
import ShopProduct from "../ShopProduct/ShopProduct";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  contentShop: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "40px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "40px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 1em",
    },
  },
  contentMainShop: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "100px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "100px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "50px 1em",
    },
  },
  contentMain: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  root: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    "& h4": {
      color: "#111",
      fontWeight: "700",
      marginBottom: "8px",
      fontSize: "24px",
      fontFamily: "nunito sans,sans-serif",
      lineHeight: "1.2",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    },
  },
  nav: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    "& a": {
      fontSize: "15px",
      color: "#111",
      display: "inline-block",
      position: "relative",
      fontFamily: "nunito sans,sans-serif",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    },
    "& p": {
      fontSize: "15px",
      display: "inline-block",
      position: "relative",
      fontFamily: "nunito sans,sans-serif",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    },
  },
});
class ContentShop extends Component {
  render() {
    const {
      classes,
      hideLoading,
      productList,
      productPrice,
      productBrand,
      productWomen,
      productMen,
      productAdults,
      productKid,
      productType,
      listProductShop,
      productAll,
      queryFilterShop,
      changeQueryName,
      sortShop,
      sortProducts,
      addToCart,
      likeProduct,
      changeRateProduct,
    } = this.props;
    return (
      <Box>
        <Box
          style={{ backgroundColor: "#f3f2ee" }}
          padding="40px 12em"
          className={classes.contentShop}
        >
          <Box className={classes.root}>
            <Typography component="h4">Shop</Typography>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              className={classes.nav}
            >
              <Link to="/" underline="none">
                Home
              </Link>
              <Typography color="#b7b7b7" component="p">
                Shop
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
        <Box padding="100px 12em" className={classes.contentMainShop}>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            className={classes.contentMain}
          >
            <FilterSearchLeft
              productList={productList}
              hideLoading={hideLoading}
              productWomen={productWomen}
              productMen={productMen}
              productAdults={productAdults}
              productKid={productKid}
              productType={productType}
              productPrice={productPrice}
              productBrand={productBrand}
              productAll={productAll}
              changeQueryName={changeQueryName}
            />
            <ShopProduct
              hideLoading={hideLoading}
              listProductShop={listProductShop}
              queryFilterShop={queryFilterShop}
              sortShop={sortShop}
              sortProducts={sortProducts}
              addToCart={addToCart}
              likeProduct={likeProduct}
              changeRateProduct={changeRateProduct}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ContentShop);
