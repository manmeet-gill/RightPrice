import React from 'react';
import ReactDOM from 'react-dom';
import './resultCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ResultCard extends React.Component{
    render(){
        return(
            <div class = "resultContainer">
                <img src={this.props.img} className = "mainImage" />
                <div class = "information">
                    <h4 className = "mainTitle ">{this.props.name}</h4>
                    <h5 className = "features">Brand: {this.props.brand}</h5>
                    <h5 className = "features">Condition: {this.props.condition}</h5>
                    <h5 className = "features">Memory: {this.props.memory}</h5>
                    <h5 className = "features">Color: {this.props.color}</h5>
                    <h5 className = "features">Unlocked: {this.props.isUnlocked}</h5>
                </div>
            </div>
        )
    }
}

export default ResultCard;