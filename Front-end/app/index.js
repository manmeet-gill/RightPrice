import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Card, { CardTitle } from 'react-bootstrap/Card'
import Result from './result';

class App extends React.Component{
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
                    <div class = "mainLogoHolder">
                        <h1>What are you looking for?</h1>
                    </div>
                    <br/>
                    <br/>
                    <div class = "mainSearchBar">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder = "Search for an item, eg. iPhone 7"></FormControl>
                    </InputGroup>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class = "infoBox">
                        <h3>Get started in 3 simple steps:</h3>
                        <br/>
                        <Card style={{ width: '15rem' }} className="d-inline-block stepsCard">
                            <Card.Img variant="top" src={"./assets/menu.png"} />
                            <Card.Body>
                                <Card.Title>Decide on an item to buy or sell.</Card.Title>
                            </Card.Body>
                        </Card>

                        <img src = {'./assets/arrow-right.png'} width = '50' className = "rightArrow"/>

                        <Card style={{ width: '15rem'}} className="d-inline-block stepsCard">
                            <Card.Img variant="top" src={"./assets/using-computer.png"} />
                            <Card.Body>
                                <Card.Title>Use our service to find the RightPrice.</Card.Title>
                            </Card.Body>
                        </Card>

                        <img src = {'./assets/arrow-right.png'} width = '50' className = "rightArrow"/>

                        <Card style={{ width: '15rem' }} className="d-inline-block stepsCard">
                            <Card.Img variant="top" src={"./assets/pay.png"} />
                            <Card.Body>
                                <Card.Title>Buy or sell your used electronics.</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))