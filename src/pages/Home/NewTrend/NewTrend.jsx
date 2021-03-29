import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Link, Typography } from "@material-ui/core";
import NewTrendItem from "./NewTrendItem";
const useStyle = (theme) => ({
  content: {
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
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  },
  title: {
    marginBottom: "45px",
    textAlign: "center",
    "& span": {
      color: "#e53637",
      fontSize: "14px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: "15px",
      display: "block",
      fontFamily: "nunito sans,sans-serif",
    },
    "& h2": {
      color: "#111",
      fontWeight: 700,
      lineHeight: "46px",
      fontSize: "36px",
      fontFamily: "nunito sans,sans-serif",
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "25px",
      },
    },
  },
  trend: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
});
class NewTrend extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box
        paddingTop="100px"
        paddingBottom="55px"
        paddingX="12em"
        className={classes.content}
      >
        <Box className={classes.container}>
          <Box className={classes.title}>
            <Typography component="span">Latest News</Typography>
            <Typography component="h2">Fashion New Trends</Typography>
          </Box>
          <Box className={classes.trend} display="flex">
            <NewTrendItem imgTrend="https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg" />
            <NewTrendItem imgTrend="https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg" />
            <NewTrendItem imgTrend="https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg" />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyle)(NewTrend);
