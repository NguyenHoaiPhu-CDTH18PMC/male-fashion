import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: "10px 12em",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      padding: "10px 6em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 1em",
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 2em",
    },
  },
  headerTopText: {
    "& p": {
      margin: 0,
      color: "white",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "25px",
    },
  },
  headerTopNav: {
    display: "flex",
  },
  headerTopNavLink: {
    "& a": {
      color: "white",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginRight: "28px",
      cursor: "pointer",
      position: "relative",

      "&::after": {
        content: "''",
        width: 0,
        height: "1px",
        position: " absolute",
        bottom: " -5px",
        backgroundColor: "white",
        left: "50%",
        transform: "translateX(-50%)",
        transition: "width 250ms linear",
      },
      "&:hover": {
        textDecoration: "none",
        "&::after": {
          width: "100%",
        },
      },
    },
  },
  chooseTypeMoney: {
    position: "relative",

    "& span": {
      color: "white",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      "&:hover": {
        "& + #choose-type-money": {
          opacity: 1,
          top: "27px",
        },
      },
    },
  },
  dropDownTypeMoney: {
    listStyleType: "none",
    paddingLeft: "10px",
    color: "black",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: 0,
    position: "absolute",
    backgroundColor: "white",
    marginTop: 0,
    zIndex: 200,
    opacity: 0,
    top: "50px",
    transition: "all 0.3s linear",

    "& li": {
      marginBottom: "5px",
      cursor: "pointer",
    },
  },
}));
export default function HeaderTop(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  return (
    <div className={classes.headerTop}>
      <div className={classes.headerTopText}>
        <p>Free shipping, 30-day return or refund guarantee.</p>
      </div>
      <div className={classes.headerTopNav}>
        <div className={classes.headerTopNavLink}>
          <a href="">SIGN IN</a>
          <a href="">FAQS</a>
        </div>
        <div className={classes.chooseTypeMoney}>
          <span>
            USD <i className="fa fa-caret-down" aria-hidden="true"></i>
          </span>
          <ul className={classes.dropDownTypeMoney} id="choose-type-money">
            <li>USD</li>
            <li>VND</li>
            <li>EURO</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import { green } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "black",
//     padding: theme.spacing(1),

//     [theme.breakpoints.down('lg')]: {
//       backgroundColor: green[500],
//     },
//     [theme.breakpoints.down('md')]: {
//       backgroundColor: theme.palette.primary.main,
//     },
//     [theme.breakpoints.down('sm')]: {
//       backgroundColor: theme.palette.secondary.main,
//     },

//   },
// }));

// export default function MediaQuery() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Typography>{'down(sm): red'}</Typography>
//       <Typography>{'up(md): blue'}</Typography>
//       <Typography>{'up(lg): green'}</Typography>
//     </div>
//   );
// }
//
