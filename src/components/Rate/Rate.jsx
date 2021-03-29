import React, { Component } from "react";
import { Box } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));

function Rate(props) {
  const classes = useStyles();
  const { changeRateProduct, product } = props;
  const handleChangeRate = (newRating) => {
    changeRateProduct(product.id, newRating);
  };
  return (
    <Box display="flex" marginBottom="6px">
      <ReactStars
        classNames={classes.root}
        value={props.rate}
        onChange={handleChangeRate}
        size={20}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#F7941D"
      />
      {/* <Rating
         name="half-rating"
         precision={0.5}
         value={this.props.rate}
         isHalf={true}
         onChange={(event, newValue) => {
         setValue(newValue); 
      }}
    /> */}
    </Box>
  );
}

export default Rate;
