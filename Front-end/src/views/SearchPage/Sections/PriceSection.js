import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/LinkedCamera";
import Computer from "@material-ui/icons/Computer";
import Money from "@material-ui/icons/Money";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function PriceSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="iPhone 7"
              description="Features: "
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      <div>
      </div>
    </div>
  );
}
