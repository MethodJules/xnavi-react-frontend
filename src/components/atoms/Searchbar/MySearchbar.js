import Button from 'react-bootstrap/Button';
import React from "react";
import './MySearchbar.css';
import Form from 'react-bootstrap/Form';

class MySearchbar extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {

        return (


            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="search" placeholder={this.props.placeholder}></Form.Control>
            </Form.Group>






        );
    }
}

export default MySearchbar;