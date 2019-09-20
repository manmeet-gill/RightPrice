import React from 'react';
import ReactDOM from 'react-dom';
import './result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Card, { CardTitle } from 'react-bootstrap/Card'
import ResultCard from './resultCard';

class Result extends React.Component{
    render(){
        return(
            <div class = "mainContainer">
                <Navbar expand="lg" className = "navBar">
                <Navbar.Brand href="#home">
                    <img alt="" src={"./assets/mainLogo.png"} width="80" height="69" className="d-inline-block align-top"/>
                    <h1 className="d-inline-block mainLogoText">RightPrice</h1>
                </Navbar.Brand>
                </Navbar>
                <div class = "container">
                    <br/>
                    <div class = "searchCritera">
                        <h3>Showing results for: </h3>
                        <h4>iPhone 7</h4>
                    </div>

                    <br/>

                    <div class = "results">
                        <ResultCard name = "iPhone 7" img = "./assets/exampleiPhone7.jpg" memory = "32gb" 
                        isUnlocked = "Yes" color = "Jet Black" brand = "Apple" condition = "Good"/>

                        <br />

                        <ResultCard name = "iPhone 7" img = "./assets/exampleiPhone7.jpg" memory = "32gb" 
                        isUnlocked = "Yes" color = "Jet Black" brand = "Apple" condition = "Good"/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Result;