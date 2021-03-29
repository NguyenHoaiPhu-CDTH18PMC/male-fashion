import { Box } from "@material-ui/core";
import React, { Component, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    listStyleType: "none",
    padding: 0,
    "& .active": {
      color: "#111",
    },
  },
  li: {
    color: "#b7b7b7",
    fontSize: "24px",
    fontWeight: 700,
    listStyle: "none",
    display: "inline-block",
    margin: "0 44px",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      margin: "0 14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      margin: "0 14px",
    },
  },
}));
function NavFilterHome(props) {
  const { productAll, productNew, productSale } = props;
  const classes = useStyles();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handelAll = () => {
    productAll();
    toggleTab(1);
  };
  const handelNew = () => {
    productNew();
    toggleTab(3);
  };
  const handelSale = () => {
    productSale();
    toggleTab(2);
  };
  return (
    <Box margin="0 auto">
      <Box
        component="ul"
        className={classes.root}
        margin="0 auto"
        display="flex"
        justifyContent="center"
      >
        <li
          className={`${classes.li} ${toggleState === 1 ? "active" : ""}`}
          onClick={handelAll}
        >
          All
        </li>
        <li
          className={`${classes.li} ${toggleState === 2 ? "active" : ""}`}
          onClick={handelSale}
        >
          Sale
        </li>
        <li
          className={`${classes.li} ${toggleState === 3 ? "active" : ""}`}
          onClick={handelNew}
        >
          New
        </li>
      </Box>
    </Box>
  );
}

export default NavFilterHome;
