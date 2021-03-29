import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Link, Typography, Divider } from "@material-ui/core";
const useStyle = (theme) => ({
  footer: {
    background: "#111",
    paddingTop: "70px",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "6em",
      paddingRight: "6em",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  about: {
    "& p": {
      fontSize: "15px",
      fontFamily: "nunito sans,sans-serif",
      color: "#3d3d3d",
      fontWeight: 400,
      lineHeight: "25px",
      margin: "0 0 15px",
      color: "#b7b7b7",
      marginBottom: " 30px",
      fontFamily: "nunito sans,sans-serif",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
    "& img": {
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {
        width: "130%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: "auto",
      },
    },
  },
  widget: {
    "& h6": {
      color: "#fff",
      fontSize: "15px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "2px",
      margin: 0,
      marginBottom: "20px",
      fontFamily: " nunito sans,sans-serif",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
    "& p": {
      fontSize: "15px",
      fontFamily: "nunito sans,sans-serif",
      color: "#3d3d3d",
      fontWeight: 400,
      lineHeight: "25px",
      margin: "0 0 15px",
      color: "#b7b7b7",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },
  ul: {
    padding: 0,
    margin: 0,
    "& li": {
      lineHeight: "36px",
      listStyle: "none",
      "& a": {
        color: "#b7b7b7",
        fontSize: "15px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "13px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "13px",
        },
      },
    },
  },
  form: {
    position: "relative",
    "& input": {
      width: "100%",
      fontSize: "15px",
      color: "#3d3d3d",
      background: "0 0",
      border: "none",
      padding: " 15px 0",
      borderBottom: "2px solid #fff",
      margin: 0,
      fontFamily: "inherit",
      lineHeight: "inherit",
      "&:focus": {
        outline: "none",
      },
    },
    "& button": {
      color: "#b7b7b7",
      fontSize: "16px",
      position: "absolute",
      right: "5px",
      top: 0,
      height: "100%",
      background: "0 0",
      border: "none",
      "&:focus": {
        outline: "none",
      },
    },
  },
  footerCopyrightText: {
    color: "#b7b7b7",
    marginBottom: 0,
    fontSize: "15px",
    fontFamily: "nunito sans,sans-serif",
    fontWeight: 400,
    lineHeight: "25px",
    margin: "0 0 15px",
    "& i": {
      color: "#e53637",
    },
    "& a": {
      color: "#e53637",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  colResponsive: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  colFooter: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
    "& >div": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginBottom: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        margin: "0",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginBottom: "20px",
      },
    },
  },
});
class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box component="footer" paddingX="12em" className={classes.footer}>
        <Box className={classes.container}>
          <Box display="flex" className={classes.colFooter}>
            <Box width="25%" paddingX="15px" position="relative">
              <Box className={classes.about} marginBottom="30px">
                <Box className={classes.logo} marginBottom="30px">
                  <Link href="#" underline="none">
                    <img
                      src="https://preview.colorlib.com/theme/malefashion/img/footer-logo.png"
                      alt=""
                    />
                  </Link>
                </Box>
                <Typography component="p">
                  The customer is at the heart of our unique business model,
                  which includes design.
                </Typography>
                <Link underline="none" href="#">
                  <img
                    src="https://preview.colorlib.com/theme/malefashion/img/payment.png"
                    alt=""
                  />
                </Link>
              </Box>
            </Box>
            <Box
              width="16.66%"
              paddingX="15px"
              position="relative"
              marginLeft="8.33%"
              className={classes.colResponsive}
            >
              <Box className={classes.widget}>
                <Typography component="h6">Shopping</Typography>
                <ul className={classes.ul}>
                  <li>
                    <Link underline="none" href="#">
                      Clothing Store
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" href="#">
                      Trending Shoes
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" href="#">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" href="#">
                      Sale
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box
              width="16.66%"
              paddingX="15px"
              position="relative"
              marginLeft="8.33%"
              className={classes.colResponsive}
            >
              <Box className={classes.widget}>
                <Typography component="h6">Shopping</Typography>
                <ul className={classes.ul}>
                  <li>
                    <Link underline="none" href="#">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" href="#">
                      Payment Methods
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" href="#">
                      Delivary
                    </Link>
                  </li>
                  <li>
                    <Link underline="none" href="#">
                      Return &amp; Exchanges
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box
              width="25%"
              marginLeft="8.33%"
              className={classes.colResponsive}
            >
              <Box className={classes.widget}>
                <Typography component="h6">NewLetter</Typography>
                <Box className={classes.newslatter}>
                  <Typography component="p">
                    Be the first to know about new arrivals, look books, sales
                    &amp; promos!
                  </Typography>
                  <form action="#" className={classes.form}>
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span className={classes.iconMail}>
                        <i className="far fa-envelope" aria-hidden="true"></i>
                      </span>
                    </button>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Divider /> */}
          <Box>
            <Box>
              <Box
                className={classes.footerCopyrightText}
                borderTop="1px solid rgba(255,255,255,.1)"
                padding="20px 0"
                marginTop="40px"
                textAlign="center"
              >
                <Typography component="p">
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="far fa-heart" aria-hidden="true"></i> by{" "}
                  <Link
                    underline="none"
                    href="https://colorlib.com"
                    target="_blank"
                  >
                    Colorlib
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyle)(Footer);
