import { Box } from "@material-ui/core";
import React, { Component } from "react";
import SlideShowItem from "./SlideShowItem/SlideShowItem";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  sectionSlide: {
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      height: "600px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
});

class SlideShow extends Component {
  render() {
    const { classes, slideShow, slideShowBack, slideShowNext } = this.props;
    return (
      <>
        <Box
          position="relative"
          height="800px"
          component="section"
          className={classes.sectionSlide}
        >
          {slideShow.map((item) => (
            <SlideShowItem
              key={item.id}
              slideShow={item}
              slideShowBack={slideShowBack}
              slideShowNext={slideShowNext}
            />
          ))}
        </Box>
      </>
    );
  }
}

export default withStyles(useStyles)(SlideShow);
