import React, {} from 'react';
import MyHeader from '../organism/Header/MyHeader';
import Search from '../organism/MorphSearch/Search';
import SideBar from '../organism/SideBar/SideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Programm extends React.Component {


    render() {
        return (
            <div>
                <MyHeader/>
                <Row>
                    <Col xs={3}> <Search></Search> </Col>
                    <Col xs={6}>     <br></br> Hier Programm verknüpfen       </Col>
                    <Col> <SideBar></SideBar> </Col>
                </Row>
            </div>
        )

    }

}

export default Programm;