import Button from 'react-bootstrap/Button';
import React from "react";
import './MyButton.css';

class MyButton extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {

        return (



            <Button variant={this.props.variant} id={this.props.id}> {this.props.button_name} </Button>




        );
    }
}

export default MyButton;