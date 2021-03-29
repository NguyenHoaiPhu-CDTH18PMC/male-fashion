import { Box, CircularProgress, Link, Typography } from "@material-ui/core";
import React, { Component, useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ProductItem from "../../../components/ProductItem/ProductItem";
import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "65%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "& #p-left": {
      "& p": {
        color: "#111111",
        marginBottom: 0,
        fontSize: "15px",
        fontFamily: '"Nunito Sans", sans-serif',
        color: "#3d3d3d",
        fontWeight: 400,
        padding: 0,
      },
    },
    "& #p-right": {
      "& p": {
        color: "#111111",
        marginBottom: 0,
        fontSize: "15px",
        fontFamily: '"Nunito Sans", sans-serif',
        color: "#3d3d3d",
        fontWeight: 400,
        lineHeight: "25px",
        padding: 0,
        marginRight: "10px",
      },
      "& span": {
        color: "#111111",
        fontSize: "15px",
        fontWeight: 700,
      },
    },
  },
  selectOpen: {
    position: "relative",
  },
  listOption: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    marginTop: "15px",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "black",
    color: "white",
    padding: "1em",
    width: "max-content",
    right: "0",
    "& li": {
      cursor: "pointer",
      fontSize: "15px",
      "&:hover": {
        color: "tomato",
      },
    },
  },
  numberPage: {
    width: "fit-content",
    margin: "0 auto",
  },
  listProduct: {
    "& >div": {
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        width: "calc(50% - 20px) !important",
      },
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
    color: "#FD2446",
    borderRadius: "6px",
    marginBottom: "300px",
    background: "#ffffff",
    boxShadow: "0px 0px 10px rgb(0 0 0 / 25%)",
    marginTop: "100px",
  },
  tagFilter: {
    padding: "0.2em 1em !important",
    backgroundColor: "tomato",
    color: "white !important",
    textAlign: "center",
    width: "fit-content",
    textTransform: "uppercase",
    fontWeight: "bold !important",
    marginTop: "10px",
    marginRight: "10px",
    fontSize: "10px !important",
  },
  value: {
    cursor: "pointer",
  },
}));
const sorts = [
  {
    title: "Name A-Z",
    type: "name",
    order: "asc",
  },
  {
    title: "Name Z-A",
    type: "name",
    order: "desc",
  },
  {
    title: "Price Slow-High",
    type: "price",
    order: "asc",
  },
  {
    title: "Price High-Slow",
    type: "price",
    order: "desc",
  },
];

function ShopProduct(props) {
  const classes = useStyles();
  const [isOpenSort, setIsOpenSort] = useState(false);
  const {
    hideLoading,
    listProductShop,
    queryFilterShop,
    sortShop,
    sortProducts,
    addToCart,
    likeProduct,
    changeRateProduct,
  } = props;

  const itemsPerPage = 9;
  const [page, setPage] = React.useState(1);
  const [noOfPages, setNoOfPages] = React.useState(
    Math.ceil(listProductShop.length / itemsPerPage)
  );
  useEffect(() => {
    setNoOfPages(Math.ceil(listProductShop.length / itemsPerPage));
  }, [listProductShop]);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handelSort = (title, type, order) => {
    sortProducts(title, type, order);
    setIsOpenSort(!isOpenSort);
  };

  return (
    <Box width="75%" className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <Box id="p-left">
          <Typography>{`Showing -- of -- results`}</Typography>
          <Box className={classes.boxTagFilter} display="flex">
            {queryFilterShop.name.length > 0 ? (
              <Typography className={classes.tagFilter}>
                {queryFilterShop.name}
              </Typography>
            ) : (
              ""
            )}
            {queryFilterShop.filterSex === "1" ? (
              <Typography className={classes.tagFilter}>Men</Typography>
            ) : queryFilterShop.filterSex === "2" ? (
              <Typography className={classes.tagFilter}>Women</Typography>
            ) : (
              ""
            )}
            {queryFilterShop.filterAge === "2" ? (
              <Typography className={classes.tagFilter}>Kids</Typography>
            ) : queryFilterShop.filterAge === "1" ? (
              <Typography className={classes.tagFilter}>Adults</Typography>
            ) : (
              ""
            )}
            {queryFilterShop.filterBrand.length > 0 ? (
              <Typography className={classes.tagFilter}>
                {queryFilterShop.filterBrand}
              </Typography>
            ) : (
              ""
            )}
            {queryFilterShop.filterType.length > 0 ? (
              <Typography className={classes.tagFilter}>
                {queryFilterShop.filterType}
              </Typography>
            ) : (
              ""
            )}
            {queryFilterShop.valueFilterPriceMin.length != "" &&
            queryFilterShop.valueFilterPriceMin.length != "" ? (
              <Typography
                className={classes.tagFilter}
              >{`$${queryFilterShop.valueFilterPriceMin} - $${queryFilterShop.valueFilterPriceMax}`}</Typography>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box id="p-right" display="flex">
          <Typography component="p">Sort by:</Typography>
          <select style={{ display: "none" }}>
            {sorts.map((sort, index) => (
              <option value={sort.title}>{sort.title}</option>
            ))}
          </select>
          <Box className={classes.selectOpen}>
            <Typography
              component="span"
              className={classes.value}
              onClick={() => {
                setIsOpenSort(!isOpenSort);
              }}
            >
              {sortShop.sortTitle} &ensp;
              <i className="fas fa-chevron-down"></i>
            </Typography>
            <ul
              className={classes.listOption}
              style={{ display: isOpenSort ? "block" : "none" }}
            >
              {sorts.map((sort, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handelSort(sort.title, sort.type, sort.order);
                  }}
                >
                  {sort.title}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.listProduct}
        display="flex"
        flexWrap="wrap"
        marginTop="30px"
      >
        {hideLoading === false ? (
          <CircularProgress className={classes.loading} />
        ) : listProductShop.length > 0 ? (
          listProductShop
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((p) => (
              <ProductItem
                width="33.33%"
                key={p.id}
                product={p}
                addToCart={addToCart}
                likeProduct={likeProduct}
                changeRateProduct={changeRateProduct}
              />
            ))
        ) : (
          <Box className={classes.noProduct}>Không tìm thấy sản phẩm</Box>
        )}
      </Box>
      <Box className={classes.numberPage}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
        />
      </Box>
    </Box>
  );
}

export default ShopProduct;
