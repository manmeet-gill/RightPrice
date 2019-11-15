import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Warning from "@material-ui/icons/Warning";

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

  const errorStyle = {
    backgroundColor: "#fcba03",
    color: "white",
    display: props.errorDisplay,
    padding: "10px"
  };

  return (
    <div className={classes.section}>
        <h2 className={classes.title}>Search for an item:</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4} justify="center">
            <h4 className={classes.title}>Phone type:</h4>
            <Select className={classes.description}
            placeholder="Select a brand"
            onChange={(event) => { 
                brandValue(event, props.setModelData, props.setMobosData);}}
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
            options={props.mobosData}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h4 className={classes.title}>Model:</h4>
            <Select className={classes.description}
            placeholder="Select a Model"
            onChange={modelValue}
            options={props.modelData}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <Button type="button" color="info" onClick={(event) => { 
                scrollToResult(props.updateAPIFunction, props.setPhoneType, props.setColor, props.setCondition,
                    props.setContract, props.setMemory, props.setMobos, props.setModel, props.setError, 
                    props.setErrorDisplay);
                }}>Search</Button>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.title} style={errorStyle}>{props.errorMsg}</h3>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <h2></h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
