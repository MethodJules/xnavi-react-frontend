import React from "react";
import { NavDropdown } from 'react-bootstrap';

class MyNavDropdownItem extends React.Component {

 
  showSettings(event) {
    event.preventDefault();

  }

  //man könnte hier wieder die json verwenden aber besser wenn man den array bis nach hier unten weitergibt

  render() {




    return (




      <NavDropdown.Item href={this.props.href} > {this.props.title} </NavDropdown.Item>





    );
  }
}

export default MyNavDropdownItem;