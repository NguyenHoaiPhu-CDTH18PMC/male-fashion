import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, GridList, GridListTile, Typography } from "@material-ui/core";
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
      flexDirection: " column",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      paddingTop: "50px",
    },
    "& > div": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0,
      paddingTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
    },
  },
  gridList: {
    "& li": {
      height: "261px !important",
      padding: "0 !important",
    },
  },
  instagramText: {
    "& h2": {
      color: "#111",
      fontWeight: 700,
      marginBottom: "30px",
      fontSize: "36px",
      fontFamily: "nunito sans,sans-serif",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "10px",
      },
    },
    "& p": {
      fontSize: "15px",
      fontFamily: "nunito sans,sans-serif",
      color: "#3d3d3d",
      fontWeight: 400,
      lineHeight: "25px",
      margin: "0 0 15px",
      marginBottom: "65px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "10px",
      },
    },
    "& h3": {
      color: "#E53637",
      fontWeight: 700,
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "nunito sans,sans-serif",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "10px",
      },
    },
  },
});
class GridInstagram extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box
        paddingBottom="0"
        paddingX="12em"
        paddingTop="100px"
        display="flex"
        className={classes.content}
      >
        <Box width="66.66%">
          <GridList className={classes.gridList} cols={3}>
            <GridListTile>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </GridListTile>
            <GridListTile>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-2.jpg"
                alt=""
              />
            </GridListTile>
            <GridListTile>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-3.jpg"
                alt=""
              />
            </GridListTile>
            <GridListTile>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-4.jpg"
                alt=""
              />
            </GridListTile>
            <GridListTile>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-5.jpg"
                alt=""
              />
            </GridListTile>
            <GridListTile>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-6.jpg"
                alt=""
              />
            </GridListTile>
          </GridList>
        </Box>
        <Box
          className={classes.text}
          width="33.33%"
          paddingLeft="30px"
          paddingTop="130px"
        >
          <Box className={classes.instagramText}>
            <Typography component="h2">Instagram</Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography component="h3">#Male_Fashion</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyle)(GridInstagram);
