import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import iconSearch from "../../../assets/images/search.webp";
import ShopAccordion from "../../../components/ShopAccordion/ShopAccordion";
const useStyle = (theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  sidebarSearch: {
    "& form": {
      position: "relative",
      "& input": {
        width: "100%",
        fontSize: "15px",
        color: "#b7b7b7",
        paddingLeft: "20px",
        paddingRight: "50px",
        border: "1px solid #e5e5e5",
        height: "42px",
        "&:focus": {
          outline: "none",
        },
      },
      "& button": {
        color: "#b7b7b7",
        fontSize: "15px",
        border: "none",
        background: "0 0",
        position: "absolute",
        right: 0,
        padding: "0 15px",
        top: "2px",
        height: "100%",
        cursor: "pointer",
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
});
class FilterSearchLeft extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  handleChangeSearch = (e) => {
    e.preventDefault();
    this.textInput.current.focus();
    this.props.changeQueryName(this.textInput.current.value);
  };
  render() {
    const {
      classes,
      productList,
      hideLoading,
      productWomen,
      productMen,
      productAdults,
      productKid,
      productType,
      productPrice,
      productBrand,
      productAll,
    } = this.props;
    return (
      <Box width="25%" paddingRight="40px" className={classes.root}>
        <Box>
          <Box className={classes.sidebarSearch} marginBottom="45px">
            <form action="#">
              <input
                type="text"
                placeholder="Search..."
                ref={this.textInput}
                onChange={this.handleChangeSearch}
              />
              <button>
                <span className="iconSearch">
                  <img src={iconSearch} alt="" />
                </span>
              </button>
            </form>
          </Box>
        </Box>
        <ShopAccordion
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
        />
      </Box>
    );
  }
}

export default withStyles(useStyle)(FilterSearchLeft);
