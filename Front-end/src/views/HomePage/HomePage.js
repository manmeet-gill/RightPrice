import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Search from '@material-ui/icons/Search.js';
import Warning from "@material-ui/icons/Warning";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
const startRef = React.createRef();
const aboutTeamRef = React.createRef();

var data = require("../../data/cellphoneData.json");

var userSelectedBrand, userSelectedColor, userSelectedCondition, 
userSelectedContract, userSelectedMemory, userSelectedMobos, userSelectedModel = null;

export function scrollToSearch(){
  searchRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function navbarScrollToResult(){
  resultRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function navbarScrollToStart(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

export function navbarScrollToAboutTeam(){
  aboutTeamRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function scrollToResult(updateAPI, updatePhoneType, updateColor, updateCondition, updateContract, updateMemory,
  updateMobos, updateModel, updateErrorMsg, showErrorDisplay){
  var api = "http://18.216.159.52";
  var searchQuery = "https://api.predictphoneapi.tech/predict??brand=" + userSelectedBrand + 
  "&colour=" + encodeURI(userSelectedColor) + "&condition=" + encodeURI(userSelectedCondition) + "&contract=" + encodeURI(userSelectedContract) + 
  "&memory=" + encodeURI(userSelectedMemory) + "&mobos=" + encodeURI(userSelectedMobos) + "&model=" + encodeURI(userSelectedModel); 

  //console.log(searchQuery);

  //Only fetch if atleast the model has been selected

  if(userSelectedModel != null){
    fetch(searchQuery)
    .then((result)=> result.json())
    .then(apiData=>{
      console.log(apiData);

      if(userSelectedBrand != null){
        updatePhoneType(userSelectedBrand.charAt(0).toUpperCase() + userSelectedBrand.substring(1));
      }

      if(userSelectedColor != null){
        updateColor(userSelectedColor.charAt(0).toUpperCase() + userSelectedColor.substring(1));
      }

      if(userSelectedCondition != null){
        updateCondition(userSelectedCondition.charAt(0).toUpperCase() + userSelectedCondition.substring(1));
      }

      if(userSelectedContract != null){
        updateContract(userSelectedContract.charAt(0).toUpperCase() + userSelectedContract.substring(1));
      }

      if(userSelectedMemory != null){
        updateMemory(userSelectedMemory.charAt(0).toUpperCase() + userSelectedMemory.substring(1) + "GB");
      }

      if(userSelectedMobos != null){
        updateMobos(userSelectedMobos.charAt(0).toUpperCase() + userSelectedMobos.substring(1));
      }

      if(userSelectedModel != null){
        updateModel(userSelectedModel.charAt(0).toUpperCase() + userSelectedModel.substring(1));
      }
      updateAPI("Average Price $" + Math.round(apiData.predict));
      updateErrorMsg("");
      showErrorDisplay("none")

      resultRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }else{
    showErrorDisplay("inline");
    updateErrorMsg("Atleast a phone model needs to be selected");
  }
}

export function brandValue(data, updateModelData, updateMobosData){
  console.log(data);
  userSelectedBrand = data.value;

  //Updates models to only show selected brand phones
  updateModelData(loadDataFromJSON("model", userSelectedBrand));

  //Update mobos to only show selected brand mobos
  updateMobosData(loadDataFromJSON("mobos", userSelectedBrand));
}

export function colorValue(data){
  console.log(data);
  userSelectedColor = data.value;
}

export function conditionValue(data){
  console.log(data);
  userSelectedCondition = data.value;
}

export function contractValue(data){
  console.log(data);
  userSelectedContract = data.value;
}

export function memoryValue(data){
  console.log(data);
  userSelectedMemory = data.value;
}

export function mobosValue(data){
  console.log(data);
  userSelectedMobos = data.value;
}

export function modelValue(data){
  console.log(data);
  userSelectedModel = data.value;
}

export function loadDataFromJSON(e, brand){
  switch(e){
    case "brand":{
      var count = Object.keys(data.brand).length;
      var brands = [];
    
      //Populate Brand dropdown
      for(var i = 1; i <= count; i++){
        brands.push(data.brand[i]);
      }
    
      return brands;
    }
    case "color":{
      var count = Object.keys(data.color).length;
      var colors = [];
    
      //Populate Color dropdown
      for(var i = 1; i <= count; i++){
        colors.push(data.color[i]);
      }
    
      return colors;
    }
    case "condition":{
      var count = Object.keys(data.condition).length;
      var conditions = [];
    
      //Populate condition dropdown
      for(var i = 1; i <= count; i++){
        conditions.push(data.condition[i]);
      }
    
      return conditions;
    }
    case "contract":{
      var count = Object.keys(data.contract).length;
      var contracts = [];
    
      //Populate contract dropdown
      for(var i = 1; i <= count; i++){
        contracts.push(data.contract[i]);
      }
    
      return contracts;
    }
    case "memory":{
      var count = Object.keys(data.memory).length;
      var memorys = [];
    
      //Populate memory dropdown
      for(var i = 1; i <= count; i++){
        memorys.push(data.memory[i]);
      }
    
      return memorys;
    }
    case "mobos":{
      var count = Object.keys(data.mobos).length;
      var mobos = [];

      if(brand != null){
        //Populate mobos dropdown
        for(var i = 1; i <= count; i++){
          if(brand == "apple"){
            if(data.mobos[i].value == "apple ios" || data.mobos[i].value == "other"){
              mobos.push(data.mobos[i]);
            }
          }else{
            if(data.mobos[i].value == "android" || data.mobos[i].value == "other"){
              mobos.push(data.mobos[i]);
            }
          }
        }
      
        return mobos;
      }else{
        //Populate mobos dropdown
        for(var i = 1; i <= count; i++){
          mobos.push(data.mobos[i]);
        }
      
        return mobos;
      }
    }
    case "model":{
      var count = Object.keys(data.model).length;
      var models = [];
      if(brand != null){
        for(var i = 1; i <= count; i++){
          if(data.model[i].brand == brand){
            models.push(data.model[i]);
          }
          //console.log(data.model[i].brand);
        }
      
        return models;

      }else{
        //Populate model dropdown
        for(var i = 1; i <= count; i++){
          models.push(data.model[i]);
        }
      
        return models;
      }
    }
  }
}

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [apiData, setAPIData] = useState(
    ""
  );
  const [phoneType, setPhoneType] = useState(
    null
  )
  const [color, setColor] = useState(
    null
  )
  const [condition, setCondition] = useState(
    null
  )
  const [contract, setContract] = useState(
    null
  )
  const [memory, setMemory] = useState(
    null
  )
  const [mobos, setMobos] = useState(
    null
  )
  const [model, setModel] = useState(
    null
  )
  const[errorMsg, setErrorMsg] = useState(
    ""
  )
  const[errorDisplay, setErrorDisplay]= useState(
    "none"
  )
  const[modelData, setModelData] = useState(
    loadDataFromJSON("model")
  )
  const[mobosData, setMobosData] = useState(
    loadDataFromJSON("mobos")
  )

  const navBarLinks = 
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} onClick={navbarScrollToStart}>Getting Started</Button>
        <Button color="transparent" className={classes.navLink} onClick={scrollToSearch}>Search</Button>
        <Button color="transparent" className={classes.navLink} onClick={navbarScrollToResult}>Results</Button>
        <Button color="transparent" className={classes.navLink} onClick={navbarScrollToAboutTeam}>About the Team</Button>
      </ListItem>
    </List>

  return (
    <div>
      <Header
        color="transparent"
        brand="RightPrice"
        rightLinks={navBarLinks}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container} ref={startRef}>
          <AboutSection />
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <div className={classes.container} ref={searchRef}>
          <SearchSection updateAPIFunction={setAPIData} setPhoneType={setPhoneType} setColor={setColor}
          setCondition={setCondition} setContract={setContract} setMemory={setMemory} setMobos={setMobos} 
          setModel={setModel} setError={setErrorMsg} errorMsg={errorMsg} errorDisplay={errorDisplay} 
          setErrorDisplay={setErrorDisplay} modelData={modelData} setModelData={setModelData} mobosData={mobosData}
          setMobosData={setMobosData}/>
        </div>
      </div>

      <br />
      <br />

      <div className={classNames(classes.main)}>
        <div className={classes.container} ref={resultRef}>
          <ResultSection apiValue={apiData} phoneType={phoneType} color={color} condition={condition}
          contract={contract} memory={memory} mobos={mobos} model={model}/>
        </div>
      </div>

      <br />
      <br />

      <div className={classNames(classes.main)}>
        <div className={classes.container} ref={aboutTeamRef}>
          <AboutTeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
