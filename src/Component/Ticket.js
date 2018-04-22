import React, { Component } from 'react';
import {Input,Icon,Button,Modal} from 'react-materialize'
import Row from 'react-materialize/lib/Row';
import './Ticket.css'
var src,dest;
// https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=San+Francisco&key="AIzaSyDkmSzXgb9Uc7BMkDZRe3e9gtCGJUAdeSM"
function evaluate(){
    src = document.getElementById('src').value;
    dest = document.getElementById('dest').value; 
    src = "Source : "+src
    dest ="<br>"+"Destination : "+dest
    document.getElementById('src1').innerHTML = src;
    document.getElementById('dest1').innerHTML = dest;
}

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {source:"",destination:"",distance:""};
      }
      
  render() {
    return (
        <div>
        <div className = "row bus-card">
        <div>   
        <Row>
            <Input l={6} label="Source" id="src"></Input>
        </Row> 
        
        <Row>
            <Input l={6} label="Destination" id="dest" onChange={evaluate}></Input>
        </Row>
        <Modal 
            header='Bus Ticket'
            trigger={<Button waves='light' className="button_cal">Calculate</Button>}>
            <div id="src1"></div>
            <div id="dest1"></div>
            <p>Distance</p>
            <p>Amount</p>
            <Button>Pay</Button>
        </Modal>
        </div>
        </div>
       </div> 
    );
  }
}

export default Ticket;
