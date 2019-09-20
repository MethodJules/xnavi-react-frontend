import React, {} from 'react';
import './Search.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CustomSelect from '../../atoms/CustomSelect/CustomSelect';
import SingleSelect from '../../atoms/SingleSelect/SingleSelect';
import Accordion from 'react-bootstrap/Accordion'

var morphDropDown = {
    position: 'relative',
    top: '0px',
    left: '0px',
    transform: 'translate3d(0px, 0px, 0px)'
};



class Search extends React.Component {

    render() {
        return (
            <Card className="outer_border">
                <Card.Body> 
                    <h1>Portalsuche</h1>
                    <Form className="SearchPanel">

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="search" placeholder="Suche.."/>
                        </Form.Group>

                        <Button variant="primary">Forschngsergebnis</Button>
                        <Button variant="primary">Projekt</Button>
                        <Button variant="primary">Publikation</Button>
                        <Button variant="primary">Wissenskarte</Button>

                        <Accordion> 
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" id="such-param" eventKey="0">
                                        Morphologische Suche
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body id="card-wideness" >
                                        <CustomSelect></CustomSelect>
                                        <CustomSelect></CustomSelect>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion> 
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" id="such-param" eventKey="0">
                                        Publikationsbezogene Suche

                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>


                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body id="card-wideness" >
                                        <CustomSelect></CustomSelect>
                                        <CustomSelect></CustomSelect>
                                        <CustomSelect></CustomSelect>
                                        <CustomSelect></CustomSelect>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p></p>

                        <Button variant="link" id="filter-zurueck" >Filter zurücksetzen</Button>
                        <Button variant="primary" id="suche">Suche</Button>

                    </Form>
                </Card.Body>
            </Card>
        )

    }

}

export default Search;