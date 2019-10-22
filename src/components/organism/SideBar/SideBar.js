import React, {} from 'react';
import './SideBar.css';
import Card from 'react-bootstrap/Card';


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