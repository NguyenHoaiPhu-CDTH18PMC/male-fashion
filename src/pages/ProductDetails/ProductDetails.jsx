import { Box, CircularProgress, TextField } from "@material-ui/core";
import React, { Component, useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ProductDetailListBottom from "./ProductDetailListBottom";
import ProductDetailBreadcrumbs from "./ProductDetailBreadcrumbs";
import ProductDetailTab from "./ProductDetailTab";
import ProductDetailOptionMid from "./ProductDetailOptionMid";
import NoMatch from "../NoMatch/NoMatch";
import { useParams } from "react-router";
import axios from "axios";
const END_POINT =
  "https://60472c879e5ab30017394469.mockapi.io/api/male-fashion";
const colors = ["#0b090c", "#20315f", "#f1af4d", "#636068"];
const useStyles = makeStyles((theme) => ({
  detailHead: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "100px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "30px 1em",
    },
  },
  detailContent: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "100px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "30px 1em",
    },
  },
  root: {
    "& .MuiCircularProgress-root": {
      margin: "100px auto",
      display: "block",
    },
  },
}));

function ProductDetails(props) {
  const { productList } = props;
  const classes = useStyles();
  const param = useParams();
  const pid = param.id;
  const [findProductDetail, setFindProductDetail] = useState(
    productList.find((product) => product.id === pid)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(END_POINT + "/ListProduct/" + pid)
      .then((response) => {
        setFindProductDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Box className={classes.root}>
      {findProductDetail ? (
        <>
          <ProductDetailBreadcrumbs
            findProductDetail={findProductDetail}
            className={classes.detailHead}
          />
          <Box padding="100px 12em" className={classes.detailContent}>
            <ProductDetailOptionMid findProductDetail={findProductDetail} />
            <ProductDetailTab findProductDetail={findProductDetail} />
            {/* <ProductDetailListBottom productList={productList} /> */}
          </Box>
        </>
      ) : (
        <CircularProgress className={classes.loading} />
      )}
    </Box>
  );
}

export default ProductDetails;
