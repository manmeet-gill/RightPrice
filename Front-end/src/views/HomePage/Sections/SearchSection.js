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
import Select from 'react-select';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

//importing function
import {scrollToResult, loadDataFromJSON, brandValue, colorValue, conditionValue, 
    contractValue, memoryValue, mobosValue, modelValue} from "../HomePage.js";

const useStyles = makeStyles(styles);

export default function SearchSection(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.section}>
        <h2 className={classes.title}>Search for an item:</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4} justify="center">
            <h4 className={classes.title}>Phone type:</h4>
            <Select className={classes.description}
            placeholder="Select a brand"
            onChange={brandValue}
            options={loadDataFromJSON("brand")}
            />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Color:</h4>
            <Select className={classes.description}
            placeholder="Select a Color"
            onChange={colorValue}
            options={loadDataFromJSON("color")}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Condition:</h4>
            <Select className={classes.description}
            placeholder="Select a Condition"
            onChange={conditionValue}
            options={loadDataFromJSON("condition")}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Contract:</h4>
            <Select className={classes.description}
            placeholder="Select a Contract"
            onChange={contractValue}
            options={loadDataFromJSON("contract")}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Memory:</h4>
            <Select className={classes.description}
            placeholder="Select a Memory"
            onChange={memoryValue}
            options={loadDataFromJSON("memory")}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <h4 className={classes.title}>Mobos:</h4>
            <Select className={classes.description}
            placeholder="Select a Mobos"
            onChange={mobosValue}
            options={loadDataFromJSON("mobos")}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h4 className={classes.title}>Model:</h4>
            <Select className={classes.description}
            placeholder="Select a Model"
            onChange={modelValue}
            options={loadDataFromJSON("model")}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <Button type="button" color="info" onClick={scrollToResult}>Search</Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
