import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Search from '@material-ui/icons/Search.js';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import InfoSection from "./Sections/InfoSection.js";
import AboutSection from "./Sections/AboutSection.js";
import SearchSection from "./Sections/SearchSection.js";
import ResultSection from "./Sections/ResultSection.js";
import AboutTeamSection from "./Sections/AboutTeamSection.js";

const useStyles = makeStyles(styles);
const searchRef = React.createRef();
const resultRef = React.createRef();

export function scrollToSearch(){
  console.log(searchRef);
  searchRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function scrollToResult(){
  console.log(resultRef);
  resultRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <AboutSection />
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <div className={classes.container} ref={searchRef}>
          <SearchSection />
        </div>
      </div>

      <br />

      <div className={classNames(classes.main)}>
        <div className={classes.container} ref={resultRef}>
          <ResultSection />
        </div>
      </div>

      <br />

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <AboutTeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
