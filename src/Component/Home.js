import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize';
import BusStop from './BusStop';
import BusDetail from './BusDetail';
import Ticket from './Ticket';
import {BrowserRouter as  Router, Route, Link} from "react-router-dom";




class Home extends Component {
  render() {
    return (
     <div>
       {/* const routes = (
    <Route path="/" component={Home}>
        <Route path="BusStop"component={BusStop}/>
        <Route path="BusDetail"component={BusDetail}/>
    </Route>
); */}
          <Router>
            <div> 
              <Navbar className="nav">
                <NavItem><Link exact to="/BusStop">BusStop</Link></NavItem>
                <NavItem><Link to="/BusDetail">BusDetail</Link></NavItem>
                <NavItem><Link to="/Ticket">Ticket</Link></NavItem>
              </Navbar>
              <Route path="/BusStop" component={BusStop}></Route>
              <Route path="/BusDetail" component={BusDetail}></Route>
              <Route path="/Ticket" component={Ticket}></Route>
             </div>  
          </Router>   
      </div>
    );
  }
}

export default Home;