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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import {returnPredictedValue} from "../HomePage.js"

const useStyles = makeStyles(styles);

export default function ResultSection(props) {
  const classes = useStyles();
  const { ...rest } = props;
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
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

        <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{props.apiValue}</h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
