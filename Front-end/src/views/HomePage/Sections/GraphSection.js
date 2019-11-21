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

import Bc from "./bc.js"
import Sc from "./scatter.js"

const useStyles = makeStyles(styles);

export default function GraphSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>Graph Visualizations</h2>
        </GridItem>

        <GridItem xs={2} sm={2} md={2}>
            <h2></h2>
        </GridItem>

        <GridItem xs={10} sm={10} md={10}>
            <Bc />
        </GridItem>

        <br />
        <br />

        <GridItem xs={2} sm={2} md={2}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={10}>
            <Sc />
        </GridItem>
      </GridContainer>
    </div>
  );
}
