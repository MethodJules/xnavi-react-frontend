import React, { } from 'react';
import './Header.css';
import { NavDropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from '../../pages/Landing';
import Logodownload from '../../pages/Logodownload';
import MyNavDropdown from '../../atoms/MyNavDropdown/MyNavDropdown';

//privsorische objektstruktur als json ersatz
var Menu = [
  {
    titel: "BlaBla",
    childs: [
      { titel: "BlaBla2", childs: [] },
      { titel: "BlaBla3" },
      {
        titel: "BlaBla4",
        childs: [{ titel: "unter" }]
      }]
  },{
    titel: "2",
    childs: [
      { titel: "BlaBla2", childs: [] },
      { titel: "BlaBla3" },
      {
        titel: "BlaBla4",
        childs: [{ titel: "unter" }]
      }]
  }
];


class Header extends React.Component {


  render() {

    var menu_items_level1 = ['indeko.navi', 'downloads', 'tagung', 'wissenskarte', 'x.navi', 'karten', 'impressum', 'datenschutz'];
    return (

      <Router>

        <header>
          <Navbar className="menu" expand="lg">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Nav.Link id="options" class="linkfirst" href="/landing">INDEKO.NAVI</Nav.Link>

                <MyNavDropdown nav_title="test23titlehh" nav_item="test34item"> </MyNavDropdown>

                <NavDropdown title="tagung" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/praesentationen">Präsenation</NavDropdown.Item>
                  <NavDropdown.Item href="/programm-0">Programm</NavDropdown.Item>
                  <NavDropdown.Item href="/marktplatz">Marktplatz</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="wissenskarte" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Übersicht</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link id="options" class="linksecond" href="#test2">x.Navi</Nav.Link>

                <NavDropdown title="karten" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Karte der Projekte</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Karte der Ergebnisse</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Karte der Events</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link id="options" class="links" id="thirdlink" href="#test3">Impressum</Nav.Link>

                <Nav.Link id="options" class="links" id="fourthlink" href="#test4">Datenschutz</Nav.Link>





              </Nav>

              < div id="block-block-2">
                <a href="http://www.indeko-navi.de" target="_self"> <img alt="logo" src="Logo_InDekoNavi.svg"></img> </a>
              </div>

            </Navbar.Collapse>
          </Navbar>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </header>




      </Router>

    )

  }

}

export default Header;