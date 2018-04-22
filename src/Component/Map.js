import React, { Component } from 'react';
// import Home from './Component/Home'
// import BusDetail from './Component/BusDetail'
var x = document.getElementById("demo");

function showPosition(position){
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}

function getGPS(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

class Map extends Component {
  render() {
    return (
        <div>
            Bus no:<br/>
            <input type="text" id="Busno" placeholder="Bus no"/><br/> 
            <input type="submit" value="Submit" onClick={getGPS}/>
            <div id='demo'>
            </div>
       </div>
    );
  }
}
setInterval(getGPS,1000);
export default Map;