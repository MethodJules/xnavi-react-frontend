import React from "react";
import { NavDropdown, Navbar, Nav, Button } from 'react-bootstrap';

class MyNavDropdownItem extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }

  //man könnte hier wieder die json verwenden aber besser wenn man den array bis nach hier unten weitergibt

  render() {



    var names = ['test_item1', 'test_item2', 'test_item3'];
    return (
      <div>


        {names.map(function (name, index) {
          return <NavDropdown.Item href="/download" key={index} > {name} </NavDropdown.Item>;
        })}



      </div>

    );
  }
}

export default MyNavDropdownItem;