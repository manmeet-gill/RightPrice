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
import Tooltip from "@material-ui/core/Tooltip";

import productStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import stylesTwo from "assets/jss/material-kit-react/tooltipsStyle.js";

import Bc from "./bc.js"
import Sc from "./scatter.js"

import visualizationOne from "../visualizationOne.jpg"
import visualizationTwo from "../visualizationTwo.jpg"

const styles = {
    ...productStyles,
    ...stylesTwo
};

const useStyles = makeStyles(styles);

export default function GraphSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>Graph Visualizations</h2>
        </GridItem>

        <GridItem xs={10} sm={10} md={12}>
            <Tooltip id="tooltip-left" title="Average Prices for each unique cellphone brand" 
            placement="left" classes={{ tooltip: classes.tooltip }}>
                <img src={visualizationOne} width="700"></img>
            </Tooltip>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <Tooltip id="tooltip-left" title="Price-Quality Trends of various cellphones" 
            placement="left" classes={{ tooltip: classes.tooltip }}>
                <img src={visualizationTwo} width="800"></img>
            </Tooltip>
        </GridItem>
      </GridContainer>
    </div>
  );
}
