import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
const useStyles = (theme) => ({
  nav: {
    "& ol": {
      width: "fit-content",
      margin: "0 auto",
      "& li": {
        "& a": {
          fontSize: "15px",
          color: "#111111",
          display: "inline-block",
          position: "relative",
        },
        "& p": {
          fontSize: "15px",
        },
      },
    },
  },
  navImageTab: {
    paddingLeft: 0,
    marginBottom: 0,
    listStyleType: "none",
    width: "105px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-between",
      width: "90%",
    },
    "& li": {
      "& a": {
        position: "relative",
        display: "block",
        "& .imgPlay": {
          "& i": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
            height: "55px",
            width: "55px",
            border: "4px solid #ffffff",
            borderRadius: "50%",
            fontSize: "20px",
            color: "#ffffff",
            lineHeight: "48px",
            display: "inline-block",
            textAlign: "center",
            [theme.breakpoints.down("xl")]: {},
            [theme.breakpoints.down("lg")]: {},
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
            [theme.breakpoints.down("xs")]: {
              display: "none",
            },
          },
        },
        "& >div": {
          "& img": {
            [theme.breakpoints.down("xl")]: {},
            [theme.breakpoints.down("lg")]: {},
            [theme.breakpoints.down("md")]: {
              width: "100px",
            },
            [theme.breakpoints.down("sm")]: {
              width: "80px",
            },
            [theme.breakpoints.down("xs")]: {
              width: "20px",
            },
          },
        },
      },
    },
  },
  tabPan: {
    display: "none",
    "& #imgBingPlay": {
      position: "relative",
      width: "fit-content",
      "& a": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        height: "55px",
        width: "55px",
        border: "4px solid #ffffff",
        borderRadius: "50%",
        fontSize: "20px",
        color: "#ffffff",
        lineHeight: "48px",
        display: "inline-block",
        textAlign: "center",
      },
    },
  },
  imgDetailBig: {
    "& #active": {
      display: "block",
    },
  },
  productDetailsImageItem: {
    "& img": {
      width: "100%",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
  },
  root: {
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
  imgDetail: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& >div": {
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100vw",
      },
    },
  },
});
class ProductDetailBreadcrumbs extends Component {
  render() {
    const { classes, findProductDetail } = this.props;
    console.log(findProductDetail);
    return (
      <Box
        style={{ backgroundColor: "#f3f2ee" }}
        padding="40px 12em"
        className={classes.root}
      >
        <Box>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={classes.nav}
          >
            <Link to="/" underline="none">
              Home
            </Link>
            <Link to="/shop" underline="none">
              Shop
            </Link>
            <Typography color="#b7b7b7" component="p">
              Product Details
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box className={classes.imgDetail} display="flex">
          <Box className={classes.left} width="25%">
            <ul className={classes.navImageTab}>
              <li>
                <Link underline="none">
                  <Box>
                    <img
                      src="https://preview.colorlib.com/theme/malefashion/img/shop-details/thumb-1.png"
                      alt=""
                    />
                  </Box>
                </Link>
              </li>
              <li>
                <Link underline="none">
                  <Box>
                    <img
                      src="https://preview.colorlib.com/theme/malefashion/img/shop-details/thumb-2.png"
                      alt=""
                    />
                  </Box>
                </Link>
              </li>
              <li>
                <Link underline="none">
                  <Box>
                    <img
                      src="https://preview.colorlib.com/theme/malefashion/img/shop-details/thumb-3.png"
                      alt=""
                    />
                  </Box>
                </Link>
              </li>
              <li>
                <Link underline="none">
                  <Box className="imgPlay">
                    <img
                      src="https://preview.colorlib.com/theme/malefashion/img/shop-details/thumb-4.png"
                      alt=""
                    />
                    <i class="fa fa-play"></i>
                  </Box>
                </Link>
              </li>
            </ul>
          </Box>
          <Box className={classes.right} width="50%">
            <Box
              className={classes.imgDetailBig}
              display="flex"
              flexDirection="column"
            >
              <Box className={classes.tabPan} id="active">
                <Box className={classes.productDetailsImageItem}>
                  <img
                    src={`https://preview.colorlib.com/theme/malefashion/img/product/${findProductDetail.image}`}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ProductDetailBreadcrumbs);
