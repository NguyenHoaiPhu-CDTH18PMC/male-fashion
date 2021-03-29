import { Box } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React, { Component } from "react";
import BannerTextBottom from "./BannerTextBottom";
import BannerTextCenter from "./BannerTextCenter";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  sectionBanner:{

    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
      padding: '100px 6em',
    },
    [theme.breakpoints.down("md")]: {
      padding: '30px 2em',
    },
    [theme.breakpoints.down("sm")]: {
      padding: '30px 1em',
    },
    [theme.breakpoints.down("xs")]: {
      padding: '30px 1em',
    },
  },
  banner1:{
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: '17%',
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: '12%',
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginTop:"50px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      marginTop:"50px",
    },
  },
  banner2:{
    [theme.breakpoints.down("xl")]: {
     
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: '17%',
      top:"500px",
      left: 0
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: '12%',
      top:"400px",
      left: 0
    },
    [theme.breakpoints.down("sm")]: {
      position: "static",
      margin: "0 auto",
      marginTop:"50px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "static",
      margin: "0 auto",
      marginTop:"50px",
      
    },
  },
  banner3:{
    [theme.breakpoints.down("xl")]: {
     
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: '17%',
      marginTop:"675px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: '12%',
      marginTop:"500px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginTop:"50px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      marginTop:"50px",
    },
  }
});
class Banner extends Component {
  render() {
    const {classes} = this.props;
    return (
      <>
        <Box padding="100px 12em" component="section" className={classes.sectionBanner}>
          <Box position="relative">
            <Box marginLeft="33.33%" width="100%" className={classes.banner1}>
              <BannerTextCenter
                title="Clothing Collections 2030"
                img="https://preview.colorlib.com/theme/malefashion/img/banner/banner-1.jpg"
              />
            </Box>
            <Box position="absolute" top="400px" left="0" width="100%" className={classes.banner2}>
              <BannerTextBottom
                title="Accessories"
                img="https://preview.colorlib.com/theme/malefashion/img/banner/banner-2.jpg"
              />
            </Box>
            <Box width="100%" marginLeft="43%" marginTop="110px" className={classes.banner3}>
              <BannerTextCenter
                title="Shoes Spring 2030"
                img="https://preview.colorlib.com/theme/malefashion/img/banner/banner-3.jpg"
              />
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default (withStyles)(useStyles)(Banner);





// return list.map((item , i) =>{
//   return <Music key={i} music = {item}/>
// });

// <div>
//           { firstJobs.map((job , i) => {
//             return( 
//               <div className="card" key ={i}>
//                   <div className="container">
//                       <h2>{ job }</h2>
//                   </div>
//               </div>  
//             );
//           })
//           }
//         </div>