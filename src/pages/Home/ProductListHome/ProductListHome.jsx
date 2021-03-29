import { Box, CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import ProductItem from "../../../components/ProductItem/ProductItem";
import NavFilterHome from "./NavFilterHome/NavFilterHome";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
const useStyle = (theme) => ({
  root: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "0px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px 2em",
      marginTop: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 1em",
    },
  },
  listResponsive: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    "& >div": {
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {
        width: "calc(33.33% - 20px)",
        margin: "0 10px",
        marginBottom: "40px",
      },
      [theme.breakpoints.down("md")]: {
        width: "calc(50% - 20px)",
        margin: "0 10px",
        marginBottom: "40px",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    },
    "& .MuiCircularProgress-root": {
      margin: "auto",
    },
  },
  noProduct: {
    width: "100%",
    textAlign: "center",
    padding: "0.8em",
    color: "red",
    borderRadius: "4px",
    border: "1px solid black",
  },
});
class ProductListHome extends Component {
  render() {
    const {
      classes,
      hideLoading,
      productAll,
      productNew,
      productSale,
      listProductHome,
      addToCart,
      likeProduct,
      changeRateProduct,
      changeColorProduct,
    } = this.props;
    return (
      <Box
        component="section"
        paddingTop="0"
        paddingX="12em"
        className={classes.root}
      >
        <NavFilterHome
          productAll={productAll}
          productNew={productNew}
          productSale={productSale}
        />
        <Box
          display="flex"
          marginTop="50px"
          flexWrap="wrap"
          className={classes.listResponsive}
        >
          {hideLoading === false ? (
            <CircularProgress />
          ) : listProductHome ? (
            listProductHome.map((p) => (
              <ProductItem
                width="25%"
                key={p.id}
                product={p}
                addToCart={addToCart}
                likeProduct={likeProduct}
                changeRateProduct={changeRateProduct}
                changeColorProduct={changeColorProduct}
              />
            ))
          ) : (
            <Box className={classes.noProduct}>Không tìm thấy sản phẩm</Box>
          )}
          {/* <ProductItem width="25%" rate="1" />
          <ProductItem width="25%" rate="2" />
          <ProductItem width="25%" rate="3.5" />
          <ProductItem width="25%" rate="4.5" />
          <ProductItem width="25%" rate="1" />
          <ProductItem width="25%" rate="2" />
          <ProductItem width="25%" rate="3.5" />
          <ProductItem width="25%" rate="4.5" /> */}
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyle)(ProductListHome);
