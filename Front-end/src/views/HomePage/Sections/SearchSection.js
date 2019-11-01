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
import Radio from "@material-ui/core/Radio";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

//importing function
import {scrollToResult} from "../HomePage.js";

const useStyles = makeStyles(styles);

export default function SearchSection() {
  const classes = useStyles();
  return (
    <div style={{"padding" : "80px"}}>
        <h2 className={classes.title}>Search for an item:</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4} justify="center">
            <h4 className={classes.title}>Phone type:</h4>
            <label className={classes.title}><Radio />iPhone 7</label>
            <br/>
            <label className={classes.title}><Radio />Samsung Galaxy Note 10</label>
            <br/>
            <label className={classes.title}><Radio />Pixel 2</label>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Color:</h4>
            <label className={classes.title}><Radio />Black</label>
            <br/>
            <label className={classes.title}><Radio />White</label>
            <br/>
            <label className={classes.title}><Radio />Space Gray</label>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Memory:</h4>
            <label className={classes.title}><Radio />16GB</label>
            <br/>
            <label className={classes.title}><Radio />32GB</label>
            <br/>
            <label className={classes.title}><Radio />64GB</label>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Memory:</h4>
            <label className={classes.title}><Radio />16GB</label>
            <br/>
            <label className={classes.title}><Radio />32GB</label>
            <br/>
            <label className={classes.title}><Radio />64GB</label>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Memory:</h4>
            <label className={classes.title}><Radio />16GB</label>
            <br/>
            <label className={classes.title}><Radio />32GB</label>
            <br/>
            <label className={classes.title}><Radio />64GB</label>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Memory:</h4>
            <label className={classes.title}><Radio />16GB</label>
            <br/>
            <label className={classes.title}><Radio />32GB</label>
            <br/>
            <label className={classes.title}><Radio />64GB</label>
        </GridItem>

        <Button type="button" color="info" onClick={scrollToResult}>Search</Button>
      </GridContainer>
    </div>
  );
}
