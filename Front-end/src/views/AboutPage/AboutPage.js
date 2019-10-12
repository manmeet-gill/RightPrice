import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import mannyPicture from "assets/img/faces/manpreet.JPG";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="RightPrice"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={mannyPicture} alt="..." className={imageClasses} style={{padding: "10px"}} />
                    <img src={mannyPicture} alt="..." className={imageClasses} style={{padding: "10px"}} />
                    <img src={mannyPicture} alt="..." className={imageClasses} style={{padding: "10px"}} />
                    <img src={mannyPicture} alt="..." className={imageClasses} style={{padding: "10px"}} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>The Team of RightPrice</h3>
                    <h6>Manmeet Gill, Karthik Tella, Sidarth Shahri, Manpreet Singh</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                We each contributed our own litte pieces to this project. Extended description here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
