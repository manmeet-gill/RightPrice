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

import {returnPredictedValue} from "../HomePage"

const useStyles = makeStyles(styles);

export default function ResultSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Value from API here</h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
