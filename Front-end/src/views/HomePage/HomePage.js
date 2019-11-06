import React, {useState} from "react";
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

var data = require("../../data/cellphoneData.json");

var userSelectedBrand, userSelectedColor, userSelectedCondition, 
userSelectedContract, userSelectedMemory, userSelectedMobos, userSelectedModel = null;

export function scrollToSearch(){
  searchRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function scrollToResult(updateAPI, updatePhoneType, updateColor, updateCondition, updateContract, updateMemory,
  updateMobos, updateModel){
  var api = "http://18.216.159.52";
  var searchQuery = "http://ec2-3-15-200-193.us-east-2.compute.amazonaws.com/predict2?brand=" + userSelectedBrand + 
  "&colour=" + encodeURI(userSelectedColor) + "&condition=" + encodeURI(userSelectedCondition) + "&contract=" + encodeURI(userSelectedContract) + 
  "&memory=" + encodeURI(userSelectedMemory) + "&mobos=" + encodeURI(userSelectedMobos) + "&model=" + encodeURI(userSelectedModel); 

  //console.log(searchQuery);

  fetch(searchQuery)
  .then((result)=> result.json())
  .then(apiData=>{
    console.log(apiData);

    updatePhoneType(userSelectedBrand);
    updateColor(userSelectedColor);
    updateCondition(userSelectedCondition);
    updateContract(userSelectedContract);
    updateMemory(userSelectedMemory);
    updateMobos(userSelectedMobos);
    updateModel(userSelectedModel);
    updateAPI("Average Price $" + Math.round(apiData.predict));

    resultRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

export function brandValue(data){
  console.log(data);
  userSelectedBrand = data.value;
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

export function loadDataFromJSON(e){
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
    
      //Populate mobos dropdown
      for(var i = 1; i <= count; i++){
        mobos.push(data.mobos[i]);
      }
    
      return mobos;
    }
    case "model":{
      var count = Object.keys(data.model).length;
      var models = [];
    
      //Populate model dropdown
      for(var i = 1; i <= count; i++){
        models.push(data.model[i]);
      }
    
      return models;
    }
  }
}

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [apiData, setAPIData] = useState(
    "Value from API here"
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

  return (
    <div>
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <AboutSection />
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <div className={classes.container} ref={searchRef}>
          <SearchSection updateAPIFunction={setAPIData} setPhoneType={setPhoneType} setColor={setColor}
          setCondition={setCondition} setContract={setContract} setMemory={setMemory} setMobos={setMobos} 
          setModel={setModel}/>
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
        <div className={classes.container}>
          <AboutTeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
