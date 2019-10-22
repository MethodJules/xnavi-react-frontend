import React, { } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CustomSelect from '../../atoms/CustomSelect/CustomSelect';
import Accordion from 'react-bootstrap/Accordion';
;

var morphDropDown = {
    position: 'relative',
    top: '0px',
    left: '0px',
    transform: 'translate3d(0px, 0px, 0px)'
};

class MyAccordion extends React.Component {

    render() {
        return (


            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" id="such-param" eventKey="0">
                            
                            {this.props.accordion_name}

                            <i class="fa fa-chevron-down" aria-hidden="true"></i>

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body id="card-wideness" >
                            <CustomSelect></CustomSelect>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        )

    }

}

export default MyAccordion;