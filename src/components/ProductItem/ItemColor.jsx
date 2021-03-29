import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
const useStyle = () => ({
  active: {
    "& .active": {
      "&::after": {
        opacity: 1,
      },
    },
  },
  label: {
    display: "inline-block",
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    marginBottom: 0,
    marginRight: "5px",
    position: "relative",
    cursor: "pointer",
    "&::after": {
      position: "absolute",
      left: "-4px",
      top: "-4px",
      height: "18px",
      width: "18px",
      border: "1px solid #b9b9b9",
      content: "''",
      borderRadius: "50%",
      opacity: 0,
    },
  },
  input: {
    margin: 0,
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    position: "absolute",
    visibility: " hidden",
    boxSizing: "border-box",
    overflow: " visible",
    padding: 0,
  },
});
class ItemColor extends Component {
  handleChangeColorProduct = () => {
    this.props.changeColorProduct(this.props.product.id, this.props.value);
  };
  render() {
    const { classes, changeColorProduct, product } = this.props;

    return (
      <Box marginRight="5px" className={classes.active}>
        <label
          className={`${classes.label} ${this.props.trangthai}`}
          htmlFor={this.props.color}
          style={{ backgroundColor: this.props.value }}
          onClick={this.handleChangeColorProduct}
        >
          {/* <input
            type="radio"
            name="color"
            className={classes.input}
            id={this.props.color}
          /> */}
        </label>
      </Box>
    );
  }
}

export default withStyles(useStyle)(ItemColor);
