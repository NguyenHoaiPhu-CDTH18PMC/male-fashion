import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
const useStyle = () => ({
  labelSale:{
    color: '#fff',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'inline-block',
    padding: '4px 15px 2px',
    background: '#111',
    position: 'absolute',
    left: 0,
    top: '20px',
  },
});
class LabelSale extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <span className={`${classes.labelSale} `}>Sale</span>
            </div>
        );
    }
}

export default (withStyles)(useStyle)(LabelSale);