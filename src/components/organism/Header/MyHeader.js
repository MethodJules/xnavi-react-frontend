import React, { } from 'react';
import './Header.css';
import { NavDropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from '../../pages/Landing';
import Logodownload from '../../pages/Logodownload';
import MyNavDropdown from '../../atoms/MyNavDropdown/MyNavDropdown';

//privsorische objektstruktur als json Ersatz
var Menu = [
    {
        titel: "TESTOBJEKT1",
        childs: [
            { titel: "Unterobjekt1" },
            { titel: "Unterobjekt2" },
            { titel: "Unterobjekt3" },
        ]
    }, {
        titel: "TESTOBJEKT2",
        childs: [
            { titel: "Unterobjekt4" },
            { titel: "Unterobjekt5" },
            { titel: "Unterobjekt6" },

        ]
    }, {
        titel: "TESTOBJEKT3",
        childs: []
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

                                {Menu.map((menuentry, index) => {
                                    
                                    if (Array.isArray(menuentry.childs) && menuentry.childs.length) {
                                        return <MyNavDropdown nav_title={menuentry.titel} key={index}></MyNavDropdown>
                                    } else {
                                        return <Nav.Link nav_title="DURCHGEKOMMEN" key={index}> {menuentry.titel} + pruefung erfolgreich </Nav.Link>
                                    }                                      
                                    
                                    
                                    

                                    
                                })}

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