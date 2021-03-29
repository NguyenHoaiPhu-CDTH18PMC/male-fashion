import Box from "@material-ui/core/Box";
import React, { Component } from "react";
import Banner from "../Banner/Banner";
import CategoriesCountDown from "../CategoriesCountDown/CategoriesCountDown";
import GridInstagram from "../GirdInstagram/GridInstagram";
import NewTrend from "../NewTrend/NewTrend";
import ProductListHome from "../ProductListHome/ProductListHome";
import SlideShow from "../SlideShow/SlideShow";

class ContentHome extends Component {
  render() {
    const {
      hideLoading,
      slideShow,
      productAll,
      productNew,
      productSale,
      listProductHome,
      slideShowBack,
      slideShowNext,
      addToCart,
      likeProduct,
      changeRateProduct,
      changeColorProduct,
    } = this.props;
    return (
      <Box>
        <SlideShow
          slideShow={slideShow}
          slideShowBack={slideShowBack}
          slideShowNext={slideShowNext}
        />
        <Banner />
        <ProductListHome
          hideLoading={hideLoading}
          productAll={productAll}
          productNew={productNew}
          productSale={productSale}
          listProductHome={listProductHome}
          addToCart={addToCart}
          likeProduct={likeProduct}
          changeRateProduct={changeRateProduct}
          changeColorProduct={changeColorProduct}
        />
        <CategoriesCountDown />
        <GridInstagram />
        <NewTrend />
      </Box>
    );
  }
}

export default ContentHome;
