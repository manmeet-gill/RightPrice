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
import ResultCard from './resultCard';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentPage: "search"
        };

        this.renderResults = this.renderResults.bind(this);
        this.checkSubmit = this.checkSubmit.bind(this);
        this.renderSearch = this.renderSearch.bind(this);
        this.renderProperPage = this.renderProperPage.bind(this);
    }

    renderProperPage(){
        if(this.state.currentPage == "search"){
            return this.renderSearch();
        }else if(this.state.currentPage == "results"){
            return this.renderResults();
        }
    }

    renderResults(){
        return(
            <div className = "mainContainer">
                <Navbar expand="lg" className = "navBar">
                <Navbar.Brand href="#home">
                    <img alt="" src={"./assets/mainLogo.png"} width="80" height="69" className="d-inline-block align-top"/>
                    <h1 className="d-inline-block mainLogoText">RightPrice</h1>
                </Navbar.Brand>
                </Navbar>
                <div className = "container">
                    <br/>
                    <div className = "mainLogoHolder">
                        <h1>What are you looking for?</h1>
                    </div>
                    <br/>
                    <br/>
                    <div className = "mainSearchBar">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder = "Search for an item, eg. iPhone 7" ref="userInput" onKeyDown={this.checkSubmit}></FormControl>
                    </InputGroup>
                    </div>

                    <div class = "container">
                        <br/>
                        <div class = "searchCritera">
                            <h3>Showing results for: </h3>
                            <h4 style={{textTransform: 'capitalize'}}>{this.refs.userInput.value}</h4>
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
            </div>
        )
    }

    renderSearch(){
        return(
            <div className = "mainContainer">
                <Navbar expand="lg" className = "navBar">
                <Navbar.Brand href="#home">
                    <img alt="" src={"./assets/mainLogo.png"} width="80" height="69" className="d-inline-block align-top"/>
                    <h1 className="d-inline-block mainLogoText">RightPrice</h1>
                </Navbar.Brand>
                </Navbar>
                <div className = "container">
                    <br/>
                    <div className = "mainLogoHolder">
                        <h1>What are you looking for?</h1>
                    </div>
                    <br/>
                    <br/>
                    <div className = "mainSearchBar">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder = "Search for an item, eg. iPhone 7" ref="userInput" onKeyDown={this.checkSubmit}></FormControl>
                    </InputGroup>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className = "infoBox">
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

    checkSubmit(e){
        //13 keyCode is enter)
        if(e.keyCode == 13){
            console.log("enter pressed");
            this.setState((state)=>{
                return {currentPage : "results"}
            });
        }
    }

    render(){
        return(
            <div>
                {this.renderProperPage()};
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))