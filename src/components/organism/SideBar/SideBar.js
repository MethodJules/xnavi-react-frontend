import React, {} from 'react';
import './SideBar.css';
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



class SideBar extends React.Component {

    render() {
        return (
            <Card className="outer_border">
                <Card.Body> 
                    <h1>Newsfeed</h1>
                </Card.Body>
            </Card>
        )

    }

}

export default SideBar;