import {
  Box,
  Link,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyle = (theme) => ({
  title: {
    color: "#111",
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "uppercase",
    display: "block",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  accordion: {
    boxShadow: "none",
    margin: 0,
    "&::before": {
      height: 0,
    },
  },
  accordionSummary: {
    padding: 0,
  },
  accordionDetails: {
    padding: 0,
    borderBottom: "1px #b7b7b7 solid",
    //  maxHeight: '200px',
    //  overflow: 'hidden',
  },
  sidebarCategories: {
    "& ul": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
      "&:last-child": {
        paddingBottom: "20px",
      },
      "& li": {
        color: "#b7b7b7",
        fontSize: "15px",
        lineHeight: "32px",
        transition: "all 0.3s",
        cursor: "pointer",
        "&:hover": {
          color: "#111",
        },
      },
    },
    "& label": {
      color: "#111111",
      fontSize: "15px",
      fontWeight: 700,
      textTransform: "uppercase",
      display: "inline-block",
      border: "1px solid #e5e5e5",
      padding: "6px 25px",
      marginBottom: "10px",
      marginRight: "5px",
    },
    cursor: "pointer",
    "& input": {
      position: "absolute",
      visibility: "hidden",
      "&:checked + label": {
        background: "#111111",
        color: "#ffffff",
        borderColor: " #111111",
      },
    },
  },
  sidebarColor: {
    "& label": {
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      position: "relative",
      marginRight: "20px",
      display: "inline-block",
      marginBottom: "10px",
      cursor: "pointer",
      "&::after": {
        position: "absolute",
        left: "-4px",
        top: "-4px",
        height: "36px",
        width: "36px",
        border: "1px solid red",
        content: "''",
        borderRadius: "50%",
        display: "none",
      },
    },
    "& input": {
      position: "absolute",
      visibility: "hidden",
      "&:checked + label::after": {
        display: "block",
      },
    },
  },
  sidebarTag: {
    "& span": {
      color: "#404040",
      fontSize: "13px",
      fontWeight: 700,
      background: " #f1f5f8",
      padding: "5px 18px",
      display: "inline-block",
      textTransform: "uppercase",
      marginRight: "6px",
      marginBottom: "10px",
      transition: "all 0.3s",
      cursor: "pointer",
      "&:hover": {
        background: "black",
        color: "white",
      },
    },
  },
});
const tags = [
  "Product",
  "Bags",
  "Shoes",
  "Fashion",
  "Clothing",
  "Hats",
  "Accessories",
];
const colors = [
  "#0b090c",
  "#20315f",
  "#f1af4d",
  "#636068",
  "#57594d",
  "#e8bac4",
  "#d6c1d7",
  "#ed1c24",
  "#ffffff",
];
const sizes = ["s", "m", "l", "xl", "xxl"];
class ShopAccordion extends Component {
  render() {
    const {
      classes,
      productList,
      productWomen,
      productMen,
      productAdults,
      productKid,
      productType,
      productPrice,
      productBrand,
      productAll,
    } = this.props;
    const countAll = productList.length;
    const countMen = productList.filter((item) => item.sex === true).length;
    const countWomen = productList.filter((item) => item.sex === false).length;
    const countKid = productList.filter((item) => item.age === false).length;
    const countAdults = productList.filter((item) => item.age === true).length;
    const handelAll = () => {
      productAll();
    };
    const handelMen = () => {
      productMen();
    };
    const handelWomen = () => {
      productWomen();
    };
    const handelKid = () => {
      productKid();
    };
    const handelAdults = () => {
      productAdults();
    };
    const handelType = (type) => {
      productType(type);
    };
    const handelPrice = (min, max) => {
      productPrice(min, max);
    };
    const handelBrand = (brand) => {
      productBrand(brand);
    };

    return (
      <>
        <Typography
          component="span"
          className={classes.title}
          onClick={handelAll}
          style={{ minHeight: "35px" }}
        >
          ALL PRODUCTS
        </Typography>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<i className="fas fa-chevron-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" className={classes.title}>
              CATEGORIES
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Box className={classes.sidebarCategories}>
              <ul>
                <li onClick={handelMen}>{`Men (${countMen})`}</li>
                <li onClick={handelWomen}>{` Women (${countWomen})`}</li>
                <li onClick={handelKid}>{`Kids (${countKid})`}</li>
                <li onClick={handelAdults}>{`Adults (${countAdults})`}</li>
                <li onClick={() => handelType("Bags")}>Bags</li>
                <li onClick={() => handelType("Clothes")}>Clothing </li>
                <li onClick={() => handelType("Shoes")}>Shoes</li>
                <li onClick={() => handelType("Accessories")}>Accessories</li>
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<i className="fas fa-chevron-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" className={classes.title}>
              BRANDING
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Box className={classes.sidebarCategories}>
              <ul>
                <li onClick={() => handelBrand("Louis Vuitton")}>
                  Louis Vuitton
                </li>
                <li onClick={() => handelBrand("Chanel")}>Chanel</li>
                <li onClick={() => handelBrand("Hermes")}>Hermes</li>
                <li onClick={() => handelBrand("Gucci")}>Gucci</li>
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<i className="fas fa-chevron-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" className={classes.title}>
              FILTER PRICE
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Box className={classes.sidebarCategories}>
              <ul>
                <li onClick={() => handelPrice(0, 50)}>$0.00 - $50.00</li>
                <li onClick={() => handelPrice(50, 100)}>$50.00 - $100.00</li>
                <li onClick={() => handelPrice(100, 150)}>$100.00 - $150.00</li>
                <li onClick={() => handelPrice(150, 200)}>$150.00 - $200.00</li>
                <li onClick={() => handelPrice(200, 250)}>$200.00 - $250.00</li>
                <li onClick={() => handelPrice(250, 99999999)}>250.00+</li>
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<i className="fas fa-chevron-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" className={classes.title}>
              SIZE
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Box
              className={classes.sidebarCategories}
              style={{ paddingBottom: "20px" }}
            >
              {sizes.map((size, index) => (
                <>
                  <input type="radio" id={`size-${index}`} name="size" />
                  <label for={`size-${index}`} key={index}>
                    {size}
                  </label>
                </>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<i className="fas fa-chevron-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" className={classes.title}>
              COLOR
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Box
              className={classes.sidebarColor}
              style={{ paddingBottom: "20px" }}
            >
              {colors.map((color, index) => (
                <>
                  <input type="radio" id={`color-${index}`} name="color" />
                  <label
                    for={`color-${index}`}
                    style={{ backgroundColor: `${color}` }}
                    key={index}
                  ></label>
                </>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<i className="fas fa-chevron-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="span" className={classes.title}>
              TAGS
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Box
              className={classes.sidebarTag}
              style={{ paddingBottom: "20px" }}
            >
              {tags.map((tag, index) => (
                <Typography component="span" key={index} underline="none">
                  {tag}
                </Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </>
    );
  }
}

export default withStyles(useStyle)(ShopAccordion);
