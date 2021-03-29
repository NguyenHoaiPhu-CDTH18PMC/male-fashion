import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ItemColor from "./ItemColor";
class ChooseColor extends Component {
  render() {
    const { color, changeColorProduct, product } = this.props;
    return (
      <>
        <Box display="flex">
          {color.listColor
            ? color.listColor.map((c, i) => (
                <ItemColor
                  key={i}
                  color={c}
                  trangthai={color.colorActived === c ? "active" : "none"}
                  value={c}
                  changeColorProduct={changeColorProduct}
                  product={product}
                />
              ))
            : ""}

          {/* <ItemColor color="red" trangthai="active" value="tomato" />
          <ItemColor color="blue" trangthai="none" value="green" />
          <ItemColor color="green" trangthai="none" value="blue" /> */}
        </Box>
      </>
    );
  }
}

export default ChooseColor;
