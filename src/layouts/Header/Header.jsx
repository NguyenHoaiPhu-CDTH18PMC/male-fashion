import React, { Component } from "react";
import "./Header.scss";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderTop from "./HeaderTop/HeaderTop";

class Header extends Component {
  render() {
    const {
      isOpenMenu,
      toggleMenu,
      idMenu,
      idNoFocus,
      loadingNewPage,
      cartList,
    } = this.props;
    return (
      <header>
        <HeaderTop />
        <HeaderMain
          isOpenMenu={isOpenMenu}
          toggleMenu={toggleMenu}
          idMenu={idMenu}
          idNoFocus={idNoFocus}
          loadingNewPage={loadingNewPage}
          cartList={cartList}
        />
      </header>
    );
  }
}

export default Header;
