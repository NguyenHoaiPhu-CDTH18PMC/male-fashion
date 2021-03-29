import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyle = () => ({
    root: {
      position: "absolute",
      top: "40px",
      right: "0",
      display: "none"
    },
});
class HeaderSearch extends Component {
  render() {
      const {classes} = this.props;
    return (
      <>
        <form className= {classes.root}>
        <TextField
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          fullWidth = "true"
          placeholder = "Search"
        />
        </form>
      </>
    );
  }
}

export default (withStyles)(useStyle)(HeaderSearch);
