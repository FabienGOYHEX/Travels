import React, {Component} from 'react';

class Travel extends Component{
    constructor(props){
    super(props)
}
render(){

    return (
        <div>
            <h1> {this.props.destination} </h1>
            <h3>{this.props.contry}</h3>
        <p> cette destination est a une distance de {this.props.distance}</p>
        <img src= {this.props.photo}></img>
        </div>
     )
     
}
}
export default Travel