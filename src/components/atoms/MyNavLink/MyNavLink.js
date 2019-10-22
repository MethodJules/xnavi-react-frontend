import React from "react";
import { Nav } from 'react-bootstrap';

class MyNavLink extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {

    return (
        <Nav.Link className="linkfirst" href={this.props.href}>{this.props.title}</Nav.Link>
    );
  }
}

export default MyNavLink;