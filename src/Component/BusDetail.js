//Import Dependency
import React, { Component } from 'react';
import './Ticket.css'
import {Input,Button,Icon,Row,Collection,CollectionItem,Modal} from 'react-materialize';
// importing json data
var data = require('./data.json');
// Fetching data from json store var
function fetchDetail(props){
  var busno =document.getElementById('Busno').value
  var printThis="";
  if(data[busno]!==undefined){
  for(var i=0;i<data[busno].length;i++){
    printThis+=i+1+". "+"<CollectionItem>"+data[busno][i]+"</CollectionItem>"+"<br>";
  }
  }
  else{
    printThis="NO BUS FOUND";
  }
  document.getElementById('list').innerHTML=printThis;
}
  
// Main class
  class BusDetail extends Component { 
 
    render() {
      
      return (
       <div className="bus-card">
        <div>
        <Icon large center>directions_bus</Icon>
        </div>
         <Row>
            <Input l={6} label="Bus no"  id="Busno"></Input>
        </Row>
        <Row>
          <Button waves='light' className="button_cal" onClick={fetchDetail}>Submit</Button>  
         </Row>
         <Collection>
          <div id="list" className="force-overflow scrollbar style-1">
          </div> 
         </Collection>   
         
        </div>
      );
    }
  }
  
  export default BusDetail;