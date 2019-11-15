import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Phone from "@material-ui/icons/Smartphone";
import Computer from "@material-ui/icons/Computer";
import Money from "@material-ui/icons/Money";
import Dial from "./IndicatorDial.png"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import {returnPredictedValue} from "../HomePage.js"

const useStyles = makeStyles(styles);

export default function ResultSection(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const style={
      display: props.showResults
  }
  
  return (
    <div className={classes.section} style={style}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}><h2></h2></GridItem>
        <GridItem xs={12} sm={12} md={8}><h2></h2></GridItem>
        <GridItem xs={12} sm={12} md={8}><h2></h2></GridItem>
        <GridItem xs={12} sm={12} md={8}><h2></h2></GridItem>

        <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Average Price of {props.model}</h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={8}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <img src={Dial} width="350"></img>
                </GridItem>

                <GridItem xs={4} sm={4} md={4}>
                    <h2 className={classes.title}>${props.apiValue}</h2>
                </GridItem>

                <GridItem xs={4} sm={4} md={4} style={{display: "none"}}>
                    <h4 className={classes.title}>{props.highValue}</h4>
                </GridItem>

                <GridItem xs={4} sm={4} md={4} style={{display: "none"}}>
                    <h4 className={classes.title}>{props.lowValue}</h4>
                </GridItem>
            </GridContainer>
        </GridItem>

        <div style={{display: "none"}}>
        <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.title}>Selected Features:</h3>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Phone Type: {props.phoneType}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Color: {props.color}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Condition: {props.condition}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Contract: {props.contract}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Memory: {props.memory}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Mobos: {props.mobos}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>Model: {props.model}</h4>
        </GridItem>
        </div>
      </GridContainer>
    </div>
  );
}
