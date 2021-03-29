import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = () => ({
  coupon: {
    color: "#0d0d0d",
    fontSize: "14px",
    borderTop: "2px solid #77b527",
    background: "#f5f5f5",
    padding: "23px 30px 18px",
    marginBottom: "50px",
    margin: 0,
    fontWeight: 400,
    fontFamily: '"Nunito Sans", sans-serif',
  },
  checkOutTitle: {
    color: "#111111",
    fontWeight: 700,
    textTransform: "uppercase",
    borderBottom: "1px solid #e1e1e1",
    paddingBottom: "25px",
    marginBottom: "30px",
    fontFamily: '"Nunito Sans", sans-serif',
  },
  checkoutInput: {
    "& p": {
      color: "#111111",
      marginBottom: "12px",
      fontSize: "15px",
      fontFamily: '"Nunito Sans", sans-serif',
      color: "#3d3d3d",
      fontWeight: 400,
      lineHeight: "25px",
      margin: "0 0 15px 0",
    },
    "& span": {
      color: "red",
    },
    "& input": {
      height: "50px",
      width: "100%",
      border: "1px solid #e1e1e1",
      fontSize: "14px",
      color: "#b7b7b7",
      paddingLeft: "20px",
      marginBottom: "20px",
      overflow: "visible",
      margin: 0,
      "&:focus": {
        outline: "none",
      },
    },
  },
  checkBox: {
    "& label": {
      fontSize: "15px",
      color: "#0d0d0d",
      position: "relative",
      paddingLeft: "30px",
      cursor: "pointer",
      marginBottom: "16px",
      display: "block",
      fontFamily: '"Nunito Sans", sans-serif',
    },
    "& input": {
      position: "absolute",
      visibility: "hidden",
      "&:checked~ #checked-create": {
        borderColor: "red",
        "&:after": {
          opacity: 1,
        },
      },
      "&:checked~ #checked-order": {
        borderColor: "red",
        "&:after": {
          opacity: 1,
        },
      },
    },
  },
  checkMark: {
    position: "absolute",
    left: 0,
    top: "3px",
    height: "14px",
    width: "14px",
    border: "1.5px solid #d7d7d7",
    content: "''",
    borderRadius: "2px",
    "&::after": {
      position: "absolute",
      left: "1px",
      top: "1px",
      width: "10px",
      height: "5px",
      border: "solid #e53637",
      borderWidth: "1.5px 1.5px 0px 0px",
      transform: "rotate(127deg)",
      content: "''",
      opacity: 0,
    },
  },
  typoP: {
    color: "#0d0d0d",
    fontSize: "14px",
    lineHeight: "24px",
    marginBottom: "22px",
    fontFamily: '"Nunito Sans", sans-serif',
  },
});
class FormCheckOutLeft extends Component {
  render() {
    const {
      classes,
      infoCustomer,
      changeAddressCustomer,
      changeFirstNameCustomer,
      changeLastNameCustomer,
      changeEmailCustomer,
      changePhoneCustomer,
    } = this.props;
    return (
      <Box className={classes.infoLeft} width="68%" paddingRight="10px">
        <Box className={classes.checkOutForm}>
          <Box className={classes.formContent}>
            <Typography component="h6" className={classes.coupon}>
              <span style={{ marginRight: "10px" }}>
                <i className="fa fa-tag" aria-hidden="true"></i>
              </span>
              Have a coupon?
              <Link to="/shopping-cart">Click here</Link>
              to enter your code
            </Typography>
            <Typography className={classes.checkOutTitle}>
              Billing Details
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
              <Box width="46%">
                <Box className={classes.checkoutInput}>
                  <Typography component="p">
                    Fist Name
                    <Typography varian="span" component="span">
                      *
                    </Typography>
                  </Typography>
                  <input
                    type="text"
                    value={infoCustomer.firstName}
                    onChange={(e) => {
                      changeFirstNameCustomer(e.target.value);
                    }}
                  />
                </Box>
              </Box>
              <Box width="46%">
                <Box className={classes.checkoutInput}>
                  <Typography component="p">
                    Last Name
                    <Typography component="span">*</Typography>
                  </Typography>
                  <input
                    type="text"
                    value={infoCustomer.lastName}
                    onChange={(e) => changeLastNameCustomer(e.target.value)}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">
                Country
                <Typography varian="span" component="span"></Typography>
              </Typography>
              <input type="text" />
            </Box>
            <Box>
              <Box className={classes.checkoutInput}>
                <Typography component="p">
                  Address
                  <Typography component="span">*</Typography>
                </Typography>
                <input
                  type="text"
                  placeholder="Street Address"
                  value={infoCustomer.address}
                  onChange={(e) => changeAddressCustomer(e.target.value)}
                />
              </Box>
              <Box className={classes.checkoutInput}>
                <input
                  type="text"
                  placeholder="Apartment, suite, unite ect (optinal)"
                />
              </Box>
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">
                Town/City
                <Typography varian="span" component="span"></Typography>
              </Typography>
              <input type="text" placeholder="Street Address" />
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">Country/State</Typography>
              <input type="text" placeholder="Street Address" />
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">Postcode / ZIP</Typography>
              <input type="text" placeholder="Street Address" />
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">Postcode / ZIP</Typography>
              <input type="text" placeholder="Street Address" />
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
              <Box width="46%">
                <Box className={classes.checkoutInput}>
                  <Typography component="p">
                    Phone
                    <Typography component="span">*</Typography>
                  </Typography>
                  <input
                    type="text"
                    value={infoCustomer.phone}
                    onChange={(e) => changePhoneCustomer(e.target.value)}
                  />
                </Box>
              </Box>
              <Box width="46%">
                <Box className={classes.checkoutInput}>
                  <Typography component="p">
                    Email
                    <Typography component="span">*</Typography>
                  </Typography>
                  <input
                    type="text"
                    value={infoCustomer.email}
                    onChange={(e) => changeEmailCustomer(e.target.value)}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={classes.checkBox}>
              <label for="create-acount">
                Create an account?
                <input type="checkbox" id="create-acount" />
                <span className={classes.checkMark} id="checked-create"></span>
              </label>
              <Typography varian="p" component="p" className={classes.typoP}>
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page
              </Typography>
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">
                Account Password
                <Typography component="span">*</Typography>
              </Typography>
              <input type="text" />
            </Box>
            <Box className={classes.checkBox}>
              <label for="note-order">
                Note about your order, e.g, special noe for delivery
                <input type="checkbox" id="note-order" />
                <span className={classes.checkMark} id="checked-order"></span>
              </label>
              <Typography component="p" className={classes.typoP}>
                Note about your order, e.g, special noe for delivery
              </Typography>
            </Box>
            <Box className={classes.checkoutInput}>
              <Typography component="p">
                Order notes
                <Typography component="span">*</Typography>
              </Typography>
              <input
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(FormCheckOutLeft);
