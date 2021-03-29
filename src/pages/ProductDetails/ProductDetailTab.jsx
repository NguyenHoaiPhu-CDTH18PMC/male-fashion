import { Box, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
const useStyles = (theme) => ({
  tab: {
    "& ul": {
      borderBottom: "1px solid #e5e5e5",
      justifyContent: "center",
      display: "flex",
      flexWrap: "wrap",
      paddingLeft: 0,
      marginBottom: 0,
      listStyle: "none",
      "& li": {
        paddingBottom: "10px",
        margin: " 0 25px",
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {
          margin: " 0 15px",
        },
        [theme.breakpoints.down("xs")]: {
          margin: " 0 10px",
        },
        "& a": {
          fontSize: "20px",
          color: "#b7b7b7",
          padding: 0,
          border: "none",
          fontWeight: 700,
          borderBottom: "2px solid transparent",
          paddingBottom: "10px",
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "10px",
          },
        },
        "& .active": {
          borderBottom: "2px solid #e53637",
        },
      },
    },
  },
  tabPaneBottom: {
    paddingTop: "35px",
    display: "none",
  },
  detailTab: {},
  tabNote: {
    color: "#111111",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28px",
    marginBottom: "25px",
    margin: "0 0 15px 0",
    fontFamily: '"Nunito Sans", sans-serif',
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  contentTab: {
    marginBottom: "30px",
    "& h5": {
      color: "#111111",
      fontSize: "20px",
      fontWeight: 700,
      marginBottom: "12px",
      margin: 0,
      fontFamily: '"Nunito Sans", sans-serif',
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    "& p": {
      marginBottom: 0,
      fontSize: "15px",
      fontFamily: '"Nunito Sans", sans-serif',
      color: "#3d3d3d",
      fontWeight: 400,
      lineHeight: "25px",
      margin: "0 0 15px 0",
    },
  },
  mainTab: {
    "& #active": {
      display: "block !important",
    },
  },
});
class ProductDetailTab extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box>
        <Box marginTop="50px" className={classes.tab}>
          <ul>
            <li>
              <Link href="#" underline="none" className="active">
                Description
              </Link>
            </li>
            <li>
              <Link href="#" underline="none">
                Customer Previews(5)
              </Link>
            </li>
            <li class="nav-item">
              <Link href="#" underline="none">
                Additional information
              </Link>
            </li>
          </ul>
        </Box>
        <Box className={classes.mainTab}>
          <Box className={classes.tabPaneBottom} id="active">
            <Box className={classes.detailTab}>
              <Typography className={classes.tabNote}>
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras loremos.
              </Typography>
              <Box className={classes.contentTab}>
                <h5>Products Infomation</h5>
                <p>
                  A Pocket PC is a handheld computer, which features many of the
                  same capabilities as a modern PC. These handy little devices
                  allow individuals to retrieve and store e-mail messages,
                  create a contact file, coordinate appointments, surf the
                  internet, exchange text messages and more. Every product that
                  is labeled as a Pocket PC must be accompanied with specific
                  software to operate the unit and must feature a touchscreen
                  and touchpad.
                </p>
                <p>
                  As is the case with any new technology product, the cost of a
                  Pocket PC was substantial during it’s early release. For
                  approximately $700.00, consumers could purchase one of
                  top-of-the-line Pocket PCs in 2003. These days, customers are
                  finding that prices have become much more reasonable now that
                  the newness is wearing off. For approximately $350.00, a new
                  Pocket PC can now be purchased.
                </p>
              </Box>
              <Box className={classes.contentTab}>
                <h5>Material used</h5>
                <p>
                  Polyester is deemed lower quality due to its none natural
                  quality’s. Made from synthetic materials, not natural like
                  wool. Polyester suits become creased easily and are known for
                  not being breathable. Polyester suits tend to have a shine to
                  them compared to wool and cotton suits, this can make the suit
                  look cheap. The texture of velvet is luxurious and breathable.
                  Velvet is a great choice for dinner party jacket and can be
                  worn all year round.
                </p>
              </Box>
            </Box>
          </Box>
          <Box className={classes.tabPaneBottom}>
            <Box className={classes.detailTab}>
              <Typography className={classes.tabNote}>
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras loremos.
              </Typography>
              <Box className={classes.contentTab}>
                <h5>Products Infomation</h5>
                <p>
                  A Pocket PC is a handheld computer, which features many of the
                  same capabilities as a modern PC. These handy little devices
                  allow individuals to retrieve and store e-mail messages,
                  create a contact file, coordinate appointments, surf the
                  internet, exchange text messages and more. Every product that
                  is labeled as a Pocket PC must be accompanied with specific
                  software to operate the unit and must feature a touchscreen
                  and touchpad.
                </p>
                <p>
                  As is the case with any new technology product, the cost of a
                  Pocket PC was substantial during it’s early release. For
                  approximately $700.00, consumers could purchase one of
                  top-of-the-line Pocket PCs in 2003. These days, customers are
                  finding that prices have become much more reasonable now that
                  the newness is wearing off. For approximately $350.00, a new
                  Pocket PC can now be purchased.
                </p>
              </Box>
              <Box className={classes.contentTab}>
                <h5>Material used</h5>
                <p>
                  Polyester is deemed lower quality due to its none natural
                  quality’s. Made from synthetic materials, not natural like
                  wool. Polyester suits become creased easily and are known for
                  not being breathable. Polyester suits tend to have a shine to
                  them compared to wool and cotton suits, this can make the suit
                  look cheap. The texture of velvet is luxurious and breathable.
                  Velvet is a great choice for dinner party jacket and can be
                  worn all year round.
                </p>
              </Box>
            </Box>
          </Box>
          <Box className={classes.tabPaneBottom}>
            <Box className={classes.detailTab}>
              <Typography className={classes.tabNote}>
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras loremos.
              </Typography>
              <Box className={classes.contentTab}>
                <h5>Products Infomation</h5>
                <p>
                  A Pocket PC is a handheld computer, which features many of the
                  same capabilities as a modern PC. These handy little devices
                  allow individuals to retrieve and store e-mail messages,
                  create a contact file, coordinate appointments, surf the
                  internet, exchange text messages and more. Every product that
                  is labeled as a Pocket PC must be accompanied with specific
                  software to operate the unit and must feature a touchscreen
                  and touchpad.
                </p>
                <p>
                  As is the case with any new technology product, the cost of a
                  Pocket PC was substantial during it’s early release. For
                  approximately $700.00, consumers could purchase one of
                  top-of-the-line Pocket PCs in 2003. These days, customers are
                  finding that prices have become much more reasonable now that
                  the newness is wearing off. For approximately $350.00, a new
                  Pocket PC can now be purchased.
                </p>
              </Box>
              <Box className={classes.contentTab}>
                <h5>Material used</h5>
                <p>
                  Polyester is deemed lower quality due to its none natural
                  quality’s. Made from synthetic materials, not natural like
                  wool. Polyester suits become creased easily and are known for
                  not being breathable. Polyester suits tend to have a shine to
                  them compared to wool and cotton suits, this can make the suit
                  look cheap. The texture of velvet is luxurious and breathable.
                  Velvet is a great choice for dinner party jacket and can be
                  worn all year round.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ProductDetailTab);
