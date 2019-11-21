import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Phone from "@material-ui/icons/Smartphone";
import Computer from "@material-ui/icons/Computer";
import Money from "@material-ui/icons/Money";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

//import images
import sidPicture from "../Sidarth-Shahri.jpg"
import manmeetPicture from "../manmeet.jpg"
import manpreetPicture from "../manpreet.JPG"
import karthikPicture from "../karthik.jpg"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...productStyle,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>About the members behind RightPrice</h2>
        </GridItem>

        <GridItem xs={4} sm={4} md={4}>
          <Card style={{width: "20rem"}}>
            <img
              style={{height: "250px", width: "100%", display: "block"}}
              className={classes.imgCardTop}
              src={sidPicture}
              alt="Card-img-cap"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>Sidarth Shahri</h4>
              <p>SJSU student majoring in Computer Engineering.</p>
              <Button color="info">LinkedIn</Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={4} sm={4} md={4}>
          <Card style={{width: "20rem"}}>
            <img
              style={{height: "250px", width: "100%", display: "block"}}
              className={classes.imgCardTop}
              src={manmeetPicture}
              alt="Card-img-cap"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>Manmeet Gill</h4>
              <p>Software Engineer from SJSU.<br></br>Creating Real-world solutions!</p>
              <Button color="info">LinkedIn</Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={4} sm={4} md={4}>
          <Card style={{width: "20rem"}}>
            <img
              style={{height: "250px", width: "100%", display: "block"}}
              className={classes.imgCardTop}
              src={manpreetPicture}
              alt="Card-img-cap"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>Manpreet Singh</h4>
              <p>SJSU student majoring in Software Engineering.</p>
              <Button color="info">LinkedIn</Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={4} sm={4} md={4}>
          <Card style={{width: "20rem"}}>
            <img
              style={{height: "250px", width: "100%", display: "block"}}
              className={classes.imgCardTop}
              src={karthikPicture}
              alt="Card-img-cap"
            />
            <CardBody>
              <h4 className={classes.cardTitle}>Karthik Tella</h4>
              <p>SJSU student majoring in Software Engineering.</p>
              <Button color="info">LinkedIn</Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
