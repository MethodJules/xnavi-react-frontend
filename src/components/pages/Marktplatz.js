import React, {} from 'react';
import Header from '../organism/Header/Header';
import Search from '../organism/MorphSearch/Search';
import SideBar from '../organism/SideBar/SideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Marktplatz extends React.Component {


    render() {
        return (
            <div>
                <Header></Header>
                <Row>
                    <Col xs={3}> <Search></Search> </Col>
                    <Col xs={6}>     <br></br> Hier Msrktplatzinhalte verknüpfen       </Col>
                    <Col> <SideBar></SideBar> </Col>
                </Row>
            </div>
        )

    }

}

export default Marktplatz;