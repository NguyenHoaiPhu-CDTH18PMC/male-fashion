import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NoLove from "../../assets/images/nolove.png";
import Loved from "../../assets/images/loved.png";
const useStyle = () => ({
  nav: {
    padding: "0",
    margin: "0",
    position: "absolute",
    right: "-200px",
    top: "20px",
    transition: "all 0.8s",
    opacity: 0,
    "& li": {
      listStyle: "none",
      marginBottom: "10px",
      position: "relative",
      color: "#007bff",
      textDecoration: " none",
      backgroundColor: "transparent",
      "& img": {
        background: "#fff",
        padding: "10px",
        display: " inline-block",
      },
      "& span": {
        color: "#fff",
        background: "#111",
        display: "inline-block",
        padding: "4px 10px",
        fontSize: "12px",
        position: "absolute",
        right: "50px",
        top: "5px",
        zIndex: 1,
        opacity: 0,
        visibility: "hidden",
        transition: "all 0.3s",
        "&::after": {
          position: "absolute",
          right: "-2px",
          top: "5px",
          height: " 15px",
          width: "15px",
          background: "#111",
          content: "''",
          transform: "rotate(45deg)",
          zIndex: "-1",
        },
      },
      "&:hover": {
        "& span": {
          opacity: 1,
          visibility: "visible",
        },
      },
    },
  },
});
class NavProductItem extends Component {
  handleLove = (id) => {
    this.props.likeProduct(id);
  };
  render() {
    const { classes, product } = this.props;
    return (
      <div>
        <ul className={`${classes.nav} navItem`}>
          <li>
            <img
              src={product.love ? Loved : NoLove}
              alt=""
              onClick={() => this.handleLove(product.id)}
            />
            <span>Like</span>
          </li>
          <li>
            <img
              src="https://preview.colorlib.com/theme/malefashion/img/icon/compare.png"
              alt=""
            />
            <span>Compare</span>
          </li>
          <li>
            <img
              src="https://preview.colorlib.com/theme/malefashion/img/icon/search.png"
              alt=""
            />
            <span>Search</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(useStyle)(NavProductItem);
