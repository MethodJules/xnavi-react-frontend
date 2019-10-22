import React from "react";
import { NavDropdown, Navbar, Nav, Button } from 'react-bootstrap';
import MyNavDropdownItem from '../MyNavDropdownItem/MyNavDropdownItem';
class MyNavDropdown extends React.Component {
    showSettings (event) {
      event.preventDefault();
      
    }
  
    render () {
      
      return (
        <div>
            <NavDropdown title={this.props.nav_title} id="basic-nav-dropdown">

                <MyNavDropdownItem></MyNavDropdownItem>
                
                
            </NavDropdown>
        </div>
      );
    }
  }
  
  export default MyNavDropdown;