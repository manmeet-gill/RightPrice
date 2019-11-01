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

//importing function
import {scrollToSearch} from "../HomePage.js";

const useStyles = makeStyles(styles);

export default function AboutSection(props){
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{"color": "white"}}>Getting Started</h2>
          <h5 className={classes.description} style={{"color": "white"}}>
            Our service is simple. Open the wesbite and search for an item, then our program will return
            an average price for that particular item. That way you know that you're getting the best deal.
            Ready to get started? Scroll down or click the button below.
          </h5>
          <Button type="button" color="info" onClick={scrollToSearch}>Get started</Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
