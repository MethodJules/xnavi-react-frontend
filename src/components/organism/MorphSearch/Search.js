import React, { } from 'react';
import './Search.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CustomSelect from '../../atoms/CustomSelect/CustomSelect';
import SingleSelect from '../../atoms/SingleSelect/SingleSelect';
import Accordion from 'react-bootstrap/Accordion';
import MyButton from '../../atoms/Button/MyButton';
import MySearchbar from '../../atoms/Searchbar/MySearchbar';
import MyAccordion from '../../organism/MyAccordion/MyAccordion';

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

                        <MySearchbar placeholder="Suche" ></MySearchbar>

                        <MyButton button_name="Forschungsergebnis" variant="primary"></MyButton>
                        <MyButton button_name="Projekt" variant="primary"></MyButton>
                        <MyButton button_name="Publikation" variant="primary"></MyButton>
                        <MyButton button_name="Wissenskarte" variant="primary"></MyButton>

                        <MyAccordion accordion_name="Morphologische Suche"></MyAccordion>

                        <MyAccordion accordion_name="Publikationsbezogene Suche"></MyAccordion>

                        <p></p>

                        <MyButton button_name="Filter zurücksetzen" variant="link" id="filter-zurueck"></MyButton>
                        <MyButton button_name="Suche" variant="primary" id="suche"></MyButton>

                    </Form>
                </Card.Body>
            </Card>
        )

    }

}

export default Search;