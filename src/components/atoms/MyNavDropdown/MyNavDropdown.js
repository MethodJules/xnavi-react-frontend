import React from "react";
import { NavDropdown } from 'react-bootstrap';
import MyNavDropdownItem from '../MyNavDropdownItem/MyNavDropdownItem';
class MyNavDropdown extends React.Component {
  
  showSettings(event) {
    event.preventDefault();

  }

  render() {

    return (
      
        <NavDropdown title={this.props.item.title} id="basic-nav-dropdown">
          {this.props.item.childs.map((child, index) => {
            return <MyNavDropdownItem href={child.href} title={child.title} key={index}/>;

          })}
        </NavDropdown>
      
    );
  }
}

export default MyNavDropdown;