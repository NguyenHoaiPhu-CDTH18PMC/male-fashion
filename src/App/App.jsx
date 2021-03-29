import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRoute,
} from "react-router-dom";
import React, { Component } from "react";
import Header from "../layouts//Header/Header";
import Footer from "../layouts/Footer/Footer";
import ContentHome from "../pages/Home/ContentHome/ContentHome";
import ContentShop from "../pages/Shop/ContentShop/ContentShop";
import ContentCheckOut from "../pages/CheckOut/ContentCheckOut";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import Alert from "../components/Alert/AlertCustom";

const END_POINT =
  "https://60472c879e5ab30017394469.mockapi.io/api/male-fashion";
const DEFAULT_CART = {
  id: "",
  idProduct: "",
  name: "",
  image: "",
  price: 0,
  count: 0,
  createdAt: "",
  total: 0,
};
class App extends Component {
  state = {
    //Menu - Header
    isOpenMenu: false,
    idMenu: "",
    idNoFocus: "",
    //List Product  - Shop
    productList: [],
    //filter new sale
    filter: "",
    //query search
    search: "",
    hideLoading: true,
    //Slide show
    slideShow: [],
    queryFilterShop: {
      name: "",
      filterBy: "",
      filterBrand: "",
      valueFilterPriceMin: "",
      valueFilterPriceMax: "",
      filterType: "",
    },

    sortShop: {
      sortTitle: "Normal",
      sortType: "",
      sortOrder: "",
    },
    cartTotal: {
      subTotal: "",
      total: "",
    },
    //pay
    cartList: JSON.parse(localStorage.getItem("cartList")) || [],
    cartData: DEFAULT_CART,
    discountPrice: 0,
    //info customer
    infoCustomer: {
      lastName: "Hoài Phú",
      firstName: "Nguyễn",
      phone: "0372889114",
      email: "nguyenhoaiphuvenus@gmail.com",
      address: "Bến Tre",
    },

    //Alert
    isShowAlert: 0,
    isSuccess: true,
    contentAlert: "Hello",
  };
  //Check code discount
  checkCodeDiscount = (code) => {
    console.log(this.state.discountPrice);
    console.log(code);
    if (code === "Hello") {
      this.setState(
        {
          discountPrice: 10,
        },
        () => console.log(this.state.discountPrice)
      );
    }
  };
  // reLoad page
  loadingNewPage = () => {
    this.setState({
      filter: "",
      hideLoading: true,
      queryFilterShop: {
        name: "",
        filterSex: "",
        filterAge: "",
        filterBrand: "",
        valueFilterPriceMin: "",
        valueFilterPriceMax: "",
        filterType: "",
      },
      sortShop: {
        sortTitle: "Normal",
        sortType: "",
        sortOrder: "",
      },
      cartList: JSON.parse(localStorage.getItem("cartList")) || [],
      // cartList: [],
      // cartData: DEFAULT_CART,
    });
    this.getAPIProduct();
  };
  // get API and setState
  componentDidMount() {
    this.setState(
      {
        hideLoading: false,
        cartList: JSON.parse(localStorage.getItem("cartList")) || [],
        cartData: DEFAULT_CART,
      },
      () => console.log(this.state.cartList)
    );
    this.getAPIProduct();
    this.getAPISlideShow();
    // this.getCartList();
  }

  getCartList = () => {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get(END_POINT + "/cartList")
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({
          cartList: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  // getProductWithID(id) {
  //   return this.state.productList.find((e) => Number(e.id) === Number(id));
  // }
  getAPIProduct = () => {
    this.setState({
      hideLoading: false,
    });
    axios
      .get(END_POINT + "/ListProduct")
      .then((response) => {
        // console.log(response);
        this.setState(
          {
            productList: response.data,
            hideLoading: true,
          },
          () => console.log(this.state.productList)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getAPISlideShow = () => {
    axios
      .get(END_POINT + "/SlideShow")
      .then((response) => {
        // console.log(response);
        this.setState(
          {
            slideShow: response.data,
          }
          // ,
          // () => console.log(this.state.slideShow)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Menu show hide
  toggleMenu = () => {
    if (this.state.isOpenMenu) {
      this.setState({
        idMenu: "show-menu",
        idNoFocus: "no-focus",
      });
    } else {
      this.setState({
        idMenu: "",
        idNoFocus: "",
      });
    }
    this.setState(
      {
        isOpenMenu: !this.state.isOpenMenu,
      },
      () => {
        console.log(this.state.isOpenMenu);
      }
    );
  };
  // Prev Next SlideShow
  slideShowBack = (id) => {
    let { slideShow } = this.state;
    let newSlideShow = [...slideShow];
    for (let i = 0; i < slideShow.length; i++) {
      if (newSlideShow[i].id === id) {
        if (i === 0) {
          newSlideShow[0].show = false;
          newSlideShow[i + 1].show = true;
        } else {
          newSlideShow[i - 1].show = true;
          newSlideShow[i].show = false;
        }
      }
    }
    this.setState(
      {
        slideShow: newSlideShow,
      },
      () => console.log(slideShow)
    );
  };
  slideShowNext = (id) => {
    let { slideShow } = this.state;
    let newSlideShow = [...slideShow];
    for (let i = 0; i < slideShow.length; i++) {
      if (newSlideShow[i].id === id) {
        if (i === newSlideShow.length - 1) {
          newSlideShow[0].show = true;
          newSlideShow[i].show = false;
        } else {
          newSlideShow[i + 1].show = true;
          newSlideShow[i].show = false;
        }
      }
    }
    this.setState(
      {
        slideShow: newSlideShow,
      },
      () => console.log(slideShow)
    );
  };
  // Search
  //Set search name
  changeQueryName = (value) => {
    this.setState(
      {
        queryFilterShop: {
          ...this.state.queryFilterShop,
          name: value,
        },
      },
      () => {
        console.log(this.state.queryFilterShop.name);
      }
    );
  };
  // Sort
  sortProducts = (value, type, order) => {
    this.setState(
      {
        sortShop: {
          sortTitle: value,
          sortType: type,
          sortOrder: order,
        },
      },
      () => {
        console.log(this.state.sortShop);
      }
    );
  };
  // Filter
  productAll = () => {
    this.setState(
      {
        filter: "",
        hideLoading: true,
        queryFilterShop: {
          ...this.state.queryFilterShop,
          //1 men 2 women   null all
          filterSex: "",
          //1 kid 2 adults null all
          filterAge: "",
          filterBrand: "",
          valueFilterPriceMin: "",
          valueFilterPriceMax: "",
          filterType: "",
        },
      }
      // ,
      // () => this.filterProduct()
    );
    this.getAPIProduct();
  };
  productNew = () => {
    this.setState(
      {
        filter: "new",
        hideLoading: true,
      }
      // ,
      // () => this.filterProduct()
    );
    this.getAPIProduct();
  };
  productSale = () => {
    this.setState(
      {
        filter: "sale",
        hideLoading: true,
      }
      // ,
      // () => this.filterProduct()
    );
    this.getAPIProduct();
  };

  productAllSex = () => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterSex: "",
      },
    });
  };

  productMen = () => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterSex: "1",
      },
    });
  };
  productWomen = () => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterSex: "2",
      },
    });
  };
  // productAllAge = () => {
  //   this.setState({
  //     hideLoading: true,
  //     queryFilterShop: {
  //       ...this.state.queryFilterShop,
  //       filterAge: "",
  //     },
  //   });
  // };
  // productAllType = () => {
  //   this.setState({
  //     hideLoading: true,
  //     queryFilterShop: {
  //       ...this.state.queryFilterShop,
  //       filterType: "",
  //     },
  //   });
  // };
  // productAllBrand = () => {
  //   this.setState({
  //     hideLoading: true,
  //     queryFilterShop: {
  //       ...this.state.queryFilterShop,
  //       filterBrand: "",
  //     },
  //   });
  // };
  // productAllPrice = () => {
  //   this.setState({
  //     hideLoading: true,
  //     queryFilterShop: {
  //       ...this.state.queryFilterShop,
  //       valueFilterPriceMin: "",
  //       valueFilterPriceMax: "",
  //     },
  //   });
  // };
  productKid = () => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterAge: "2",
      },
    });
  };
  productAdults = () => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterAge: "1",
      },
    });
  };
  productType = (type) => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterType: type,
      },
    });
  };
  productPrice = (min, max) => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        valueFilterPriceMin: min,
        valueFilterPriceMax: max,
      },
    });
  };
  productBrand = (brand) => {
    this.setState({
      hideLoading: true,
      queryFilterShop: {
        ...this.state.queryFilterShop,
        filterBrand: brand,
      },
    });
  };
  saveToLocalStorage = () => {
    localStorage.setItem("cartList", JSON.stringify(this.state.cartList));
  };
  //callback update cartList
  setStateWhenAddCart = () => {
    const newList = [...this.state.cartList, this.state.cartData];
    this.setState(
      {
        cartList: newList,
        cartData: DEFAULT_CART,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };
  //update list after change count of item is called  -- use for update count
  updateList = () => {
    const { cartList, cartData } = this.state;
    const newList = cartList.map((item) =>
      item.idProduct === cartData.idProduct ? cartData : item
    );

    this.setState(
      {
        cartList: newList,
        cartData: DEFAULT_CART,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };
  addToCart = (product) => {
    const { cartList } = this.state;
    // tim xem san pham them co ton tai trong gio hang hay chua neu co thi tang so luong
    const findCart = cartList.find((item) => item.idProduct === product.id);
    // neu co ton tai trung
    if (findCart) {
      //So luong nho hon 10 thi moi tang
      if (findCart.count < 10) {
        this.setState(
          {
            cartData: {
              ...this.state.cartData,
              idProduct: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              count: findCart.count + 1,
              total: product.price * (findCart.count + 1),
            },
            isShowAlert: 1,
            isSuccess: true,
            contentAlert: "Đã tăng số lượng sản phẩm",
          },
          () => {
            this.updateList();
            this.setTimeoutAlert();
          }
        );
      } else {
        this.setState(
          {
            isShowAlert: 1,
            isSuccess: false,
            contentAlert: "Số lượng sản phẩm đã đạt tối đa",
          },
          () => {
            // alert(this.state.isShowAlert);
            this.setTimeoutAlert();
          }
        );
      }
      //nguoc lai neu chua ton tai thi se them moi
    } else {
      this.setState(
        {
          cartData: {
            ...this.state.cartData,
            idProduct: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            count: 1,
            total: product.price * 1,
          },
          isShowAlert: 1,
          isSuccess: true,
          contentAlert: "Đã thêm sản phẩm vào giỏ hàng",
        },
        () => {
          this.setStateWhenAddCart();
          this.setTimeoutAlert();
        }
      );
    }
  };
  //setTimeoutAlert
  setTimeoutAlert = () => {
    setTimeout(() => this.setState({ isShowAlert: 2 }), 500);
  };
  //Close alert
  closeAlert = () => {
    this.setState({ isShowAlert: 2 });
  };
  // Update count of cart
  changeCount = (value, cart) => {
    if (value === "") {
      this.setState(
        {
          cartData: {
            ...this.state.cartData,
            idProduct: cart.idProduct,
            name: cart.name,
            image: cart.image,
            price: cart.price,
            count: "",
            total: 0 * cart.price,
          },
        },
        () => this.updateList()
      );
    } else {
      this.setState(
        {
          cartData: {
            ...this.state.cartData,
            idProduct: cart.idProduct,
            name: cart.name,
            image: cart.image,
            price: cart.price,
            count: value,
            total: value * cart.price,
          },
        },
        () => this.updateList()
      );
    }
  };
  // Delete cart
  handleRemove = (cart) => {
    const { cartList } = this.state;
    const newList = cartList.filter((i) => i.idProduct !== cart.idProduct);
    this.setState(
      {
        cartList: newList,
        cartData: DEFAULT_CART,
        isShowAlert: 1,
        isSuccess: true,
        contentAlert: "Đã xóa sản phẩm khỏi giỏ hàng",
      },
      () => {
        console.log(this.state.cartData);

        this.setTimeoutAlert();

        this.saveToLocalStorage();
      }
    );
  };

  likeProduct = (id) => {
    const { productList } = this.state;
    const productUpdate = productList.find((f) => f.id === id);
    productUpdate.love = !productUpdate.love;
    const newListZ = productList.map((product) =>
      product.id === productUpdate.id ? productUpdate : product
    );

    this.setState({
      productList: newListZ,
    });
    console.log(productUpdate);
    axios
      .put(`${END_POINT}/ListProduct/${id}`, productUpdate)
      .then((response) => {
        // const newList = productList.map((product) =>
        //   product.id === response.data.id ? response.data : product
        // );
        // this.setState({
        //   productList: newList,
        // });

        this.setState(
          {
            isShowAlert: 1,
            isSuccess: true,
            contentAlert: "Cảm ơn bạn đã đánh giá",
          },
          () => this.setTimeoutAlert()
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // changeRateProduct = (id, rate) => {
  //   const { productList } = this.state;
  //   const productUpdate = productList.find((f) => f.id === id);
  //   productUpdate.rate = rate;
  //   const newListZ = productList.map((product) =>
  //     product.id === productUpdate.id ? productUpdate : product
  //   );
  //   this.setState({
  //     productList: newListZ,
  //   });

  //   console.log(productUpdate);
  //   axios
  //     .put(`${END_POINT}/ListProduct/${id}`, productUpdate)
  //     .then((response) => {
  //       // const newList = productList.map((product) =>
  //       //   product.id === response.data.id ? response.data : product
  //       // );
  //       // this.setState({
  //       //   productList: newList,
  //       // });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  changeRateProduct = (id, rate) => {
    const { productList } = this.state;
    const productUpdate = productList.find((f) => f.id === id);
    productUpdate.rate = rate;
    const newListZ = productList.map((product) =>
      product.id === productUpdate.id ? productUpdate : product
    );
    this.setState({
      productList: newListZ,
    });
    console.log(productUpdate);
    axios
      .put(`${END_POINT}/ListProduct/${id}`, productUpdate)
      .then((response) => {
        // const newList = productList.map((product) =>
        //   product.id === response.data.id ? response.data : product
        // );
        // this.setState({
        //   productList: newList,
        // });
        this.setState(
          {
            isShowAlert: 1,
            isSuccess: true,
            contentAlert: "Cảm ơn bạn đã đánh giá",
          },
          () => this.setTimeoutAlert()
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  changeColorProduct = (id, color) => {
    const { productList } = this.state;
    const productUpdate = productList.find((f) => f.id === id);
    productUpdate.color.colorActived = color;
    const newListZ = productList.map((product) =>
      product.id === productUpdate.id ? productUpdate : product
    );
    this.setState({
      productList: newListZ,
    });
    console.log(productUpdate);
    axios
      .put(`${END_POINT}/ListProduct/${id}`, productUpdate)
      .then((response) => {
        // const newList = productList.map((product) =>
        //   product.id === response.data.id ? response.data : product
        // );
        // this.setState({
        //   productList: newList,
        // });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  changeLastNameCustomer = (value) => {
    this.setState({
      infoCustomer: {
        ...this.state.infoCustomer,
        lastName: value,
      },
    });
  };
  changeFirstNameCustomer = (value) => {
    this.setState({
      infoCustomer: {
        ...this.state.infoCustomer,
        firstName: value,
      },
    });
  };
  changeEmailCustomer = (email) => {
    this.setState({
      infoCustomer: {
        ...this.state.infoCustomer,
        email: email,
      },
    });
  };
  changePhoneCustomer = (phone) => {
    this.setState({
      infoCustomer: {
        ...this.state.infoCustomer,
        phone: phone,
      },
    });
  };
  changeAddressCustomer = (address) => {
    this.setState({
      infoCustomer: {
        ...this.state.infoCustomer,
        address: address,
      },
    });
  };
  changeAlert = (type, content) => {
    this.setState(
      {
        isShowAlert: 1,
        isSuccess: type,
        contentAlert: content,
      },
      () => this.setTimeoutAlert()
    );
  };
  checkPayment = (lastName, firstName, email, phone, address) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (lastName === "") {
      this.changeAlert(false, "Tên không được bỏ trống");
      return false;
    }
    if (firstName === "") {
      this.changeAlert(false, "Họ không được bỏ trống");
      return false;
    }
    if (email === "") {
      this.changeAlert(false, "Email không được bỏ trống");
      return false;
    } else if (regexEmail.test(String(email).toLowerCase()) === false) {
      this.changeAlert(false, "Email không hợp lệ");
      return false;
    }
    if (phone === "") {
      this.changeAlert(false, "Số điện thoại không được bỏ trống");
      return false;
    } else if (!regexPhone.exec(phone)) {
      this.changeAlert(false, "Số điện thoại không hợp lệ");
      return false;
    }
    if (address === "") {
      this.changeAlert(false, "Địa chỉ không được bỏ trống");
      return false;
    }
    return true;
  };
  payCart = (count, discount, totalPrice) => {
    const pay = {
      count: count,
      discount: discount,
      totalPrice: totalPrice,
    };
    if (count === 0) {
      this.changeAlert(false, "Giỏ hàng trống vui lòng chọn sản phẩm");
      return false;
    } else {
      if (
        this.checkPayment(
          this.state.infoCustomer.lastName,
          this.state.infoCustomer.firstName,
          this.state.infoCustomer.email,
          this.state.infoCustomer.phone,
          this.state.infoCustomer.address
        )
      ) {
        axios
          .post(END_POINT + "/cartList", {
            ...pay,
            createAt: moment(new Date().getTime()).format("DDMMYYYY"),
            infoCustomer: this.state.infoCustomer,
          })
          .then((response) => {
            localStorage.clear();
            this.setState(
              {
                cartList: DEFAULT_CART,
                discountPrice: 0,
                isShowAlert: 1,
                isSuccess: true,
                contentAlert: "Cảm ơn bạn đã mua sản phẩm",
              },
              () => {
                localStorage.clear();
                this.setTimeoutAlert();
              }
            );
          })
          .catch(function (error) {
            this.changeAlert(false, "Thanh toán không thành công");
            return false;
          });
      } else {
        this.checkPayment(
          this.state.infoCustomer.lastName,
          this.state.infoCustomer.firstName,
          this.state.infoCustomer.email,
          this.state.infoCustomer.phone,
          this.state.infoCustomer.address
        );
        return false;
      }
    }
    return true;
  };
  render() {
    const {
      isOpenMenu,
      idMenu,
      idNoFocus,
      hideLoading,
      productList,
      slideShow,
      filter,
      queryFilterShop,
      sortShop,
      cartList,
      discountPrice,
      isShowAlert,
      isSuccess,
      contentAlert,
      infoCustomer,
    } = this.state;
    //listProductHome
    const listProductHome = productList.filter((item) => {
      if (filter === "") {
        return this.state.productList;
      } else if (filter === "new") {
        return item.new === true;
      } else if (filter === "sale") {
        return item.sale === true;
      }
    });
    //listProductShop
    const listProductShop = productList
      .filter((item) => {
        if (queryFilterShop.name.length > 0) {
          return item.name
            .toString()
            .toLowerCase()
            .includes(queryFilterShop.name.toString().toLowerCase());
        } else {
          return this.state.productList;
        }
      })
      .filter((item) => {
        if (queryFilterShop.filterSex === "1") {
          return item.sex === true;
        } else if (queryFilterShop.filterSex === "2") {
          return item.sex === false;
        } else {
          return this.state.productList;
        }
      })
      .filter((item) => {
        if (queryFilterShop.filterAge === "1") {
          return item.age === true;
        } else if (queryFilterShop.filterAge === "2") {
          return item.age === false;
        } else {
          return this.state.productList;
        }
      })
      .filter((item) => {
        if (queryFilterShop.filterBrand.length > 0) {
          return item.brand
            .toString()
            .toLowerCase()
            .includes(queryFilterShop.filterBrand.toString().toLowerCase());
        } else {
          return this.state.productList;
        }
      })
      .filter((item) => {
        if (queryFilterShop.filterType.length > 0) {
          return item.type
            .toString()
            .toLowerCase()
            .includes(queryFilterShop.filterType.toString().toLowerCase());
        } else {
          return this.state.productList;
        }
      })
      .filter((item) => {
        if (
          queryFilterShop.valueFilterPriceMin.length != "" &&
          queryFilterShop.valueFilterPriceMax.length != ""
        ) {
          return (
            parseFloat(queryFilterShop.valueFilterPriceMin) <=
              parseFloat(item.price) &&
            parseFloat(item.price) <=
              parseFloat(queryFilterShop.valueFilterPriceMax)
          );
        } else {
          return this.state.productList;
        }
      })
      // .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      .sort((a, b) => {
        if (sortShop.sortOrder === "asc" && sortShop.sortType === "price") {
          return a[sortShop.sortType] - b[sortShop.sortType];
        } else if (
          sortShop.sortOrder === "desc" &&
          sortShop.sortType === "price"
        ) {
          return b[sortShop.sortType] - a[sortShop.sortType];
        } else if (
          sortShop.sortOrder === "asc" &&
          sortShop.sortType === "name"
        ) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        } else if (
          sortShop.sortOrder === "desc" &&
          sortShop.sortType === "name"
        ) {
          return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
        }
      });
    return (
      <>
        <Router>
          <Header
            isOpenMenu={isOpenMenu}
            toggleMenu={this.toggleMenu}
            idMenu={idMenu}
            idNoFocus={idNoFocus}
            loadingNewPage={this.loadingNewPage}
            cartList={cartList}
          />
          <Switch>
            <Route exact path="/">
              <ContentHome
                hideLoading={hideLoading}
                slideShow={slideShow}
                productAll={this.productAll}
                productNew={this.productNew}
                productSale={this.productSale}
                listProductHome={listProductHome}
                slideShowBack={this.slideShowBack}
                slideShowNext={this.slideShowNext}
                addToCart={this.addToCart}
                likeProduct={this.likeProduct}
                changeRateProduct={this.changeRateProduct}
                changeColorProduct={this.changeColorProduct}
              />
            </Route>
            <Route exact path="/about">
              <Typography>About</Typography>
            </Route>
            <Route exact path="/checkout">
              <ContentCheckOut
                cartList={cartList}
                payCart={this.payCart}
                discountPrice={discountPrice}
                infoCustomer={infoCustomer}
                changeAddressCustomer={this.changeAddressCustomer}
                changeFirstNameCustomer={this.changeFirstNameCustomer}
                changeLastNameCustomer={this.changeLastNameCustomer}
                changeEmailCustomer={this.changeEmailCustomer}
                changePhoneCustomer={this.changePhoneCustomer}
              />
            </Route>
            <Route exact path="/product/detail">
              <ProductDetails />
            </Route>
            <Route exact path="/shop">
              <ContentShop
                hideLoading={hideLoading}
                productList={productList}
                productWomen={this.productWomen}
                productMen={this.productMen}
                productAdults={this.productAdults}
                productKid={this.productKid}
                productType={this.productType}
                productPrice={this.productPrice}
                productBrand={this.productBrand}
                listProductShop={listProductShop}
                productAll={this.productAll}
                queryFilterShop={queryFilterShop}
                changeQueryName={this.changeQueryName}
                sortShop={sortShop}
                sortProducts={this.sortProducts}
                addToCart={this.addToCart}
                likeProduct={this.likeProduct}
                changeRateProduct={this.changeRateProduct}
              />
            </Route>
            <Route exact path="/detail/:id/:slug">
              <ProductDetails productList={productList} />
            </Route>
            <Route exact path="/shopping-cart">
              <withRoute>
                <ShoppingCart
                  cartList={cartList}
                  changeCount={this.changeCount}
                  handleRemove={this.handleRemove}
                  payCart={this.payCart}
                  checkCodeDiscount={this.checkCodeDiscount}
                />
              </withRoute>
            </Route>
          </Switch>
          <Footer />
          <Alert
            isShowAlert={isShowAlert}
            isSuccess={isSuccess}
            contentAlert={contentAlert}
            closeAlert={this.closeAlert}
          />
        </Router>

        {/* <ContentHome /> */}
        {/* <ContentShop/> */}
        {/* <ContentCheckOut/> */}
        {/* <ProductDetails/> */}
        {/* <ShoppingCart/> */}
      </>
    );
  }
}

export default App;

/*

like 
1-tìm  setstate up date 

*/
