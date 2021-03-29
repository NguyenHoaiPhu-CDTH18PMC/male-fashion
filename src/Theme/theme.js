import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    breakpoints: {
        values: {
          xs: 360,    // down sm là từ 360 tới 474
          sm: 474,   // down sm là từ 474 tới 767
          md: 767,   // down md  là từ 767  tới 991 
          lg: 991,   // down lg là từ 991 tới 1199
          xl: 1199,   // down lg là từ 1199 tới 1299
          xxl: 1299,   // down lg là từ 1299 =>
        },
      },
});
export default theme;