import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProductItem from "../../components/ProductItem/ProductItem";
const useStyles = () => ({
  listItemBottom: {
    "& h3": {
      color: "#111111",
      fontWeight: 700,
      marginBottom: "45px",
      textAlign: "center",
      fontSize: "30px",
      fontFamily: '"Nunito Sans", sans-serif',
    },
  },
});
class ProductDetailListBottom extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.listItemBottom} marginTop="100px">
        <Typography component="h3">Related Product</Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <ProductItem width="25%" rate="1" />
          <ProductItem width="25%" rate="1" />
          <ProductItem width="25%" rate="1" />
          <ProductItem width="25%" rate="1" />
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(ProductDetailListBottom);
