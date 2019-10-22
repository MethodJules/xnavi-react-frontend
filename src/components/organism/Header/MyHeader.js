import React, { } from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import MyNavDropdown from '../../atoms/MyNavDropdown/MyNavDropdown';
import MyNavLink from '../../atoms/MyNavLink/MyNavLink';

//privsorische objektstruktur als json Ersatz
var Menu = [
    {
        title: "Indeko.Navi", href: "/landing",
        childs: []
    },
    {
        title: "Downloads",
        childs: [
            { title: "Flyer-Download", href: "/download" },
            { title: "Logodownload", href: "/download" },
            { title: "Programm", href: "/download" },
        ]
    },
    {
        title: "Tagung",
        childs: [
            { title: "Präsentation", href: "/praesentationen" },
            { title: "Programm", href: "/programm-0" },
            { title: "Marktplatz", href: "/marktplatz" },
        ]
    },
    {
        title: "x.Navi", href: "#test2",
        childs: []
    },
    {
        title: "Wissenskarte",
        childs: [
            { title: "Karte der Projekte", href: "/#action/3.1" },
            { title: "Karte der Ergebnisse", href: "/#action/3.2" },
            { title: "Karet der Events", href: "/#action/3.3" },
        ]
    }, {
        title: "Impressum", href: "/test3",
        childs: []
    },
    {
        title: "Datenschutz", href: "/test4",
        childs: []
    }

];


class MyHeader extends React.Component {


    render() {

        return (

            <Router>

                <header>
                    <Navbar className="menu" expand="lg">

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                {Menu.map((menuentry, index) => {

                                    if (Array.isArray(menuentry.childs) && menuentry.childs.length) {
                                        return <MyNavDropdown item={menuentry} key={index} ></MyNavDropdown>
                                    } else {
                                        return <MyNavLink href={menuentry.href} title={menuentry.title} key={index} />
                                    }

                                })}

                            </Nav>

                            < div id="block-block-2">
                                <a href="http://www.indeko-navi.de" target="_self"> <img alt="logo" src="Logo_InDekoNavi.svg"></img> </a>
                            </div>

                        </Navbar.Collapse>
                    </Navbar>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                </header>




            </Router>

        )

    }

}

export default MyHeader;