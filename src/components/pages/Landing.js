import React, {} from 'react';
import Header from '../../components/organism/Header/Header';
import MyHeader from '../../components/organism/Header/MyHeader';
import Search from '../../components/organism/MorphSearch/Search';
import SideBar from '../../components/organism/SideBar/SideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Landing.css';




class Landing extends React.Component {

    render() {
        return (
        
        
            <div>
                <MyHeader></MyHeader>
                <Row>
                    <Col xs={3}> <Search></Search> </Col>
                    <Col xs={6}>            </Col>
                    <Col > <SideBar></SideBar> </Col>
                </Row>
            </div>
        )

    }

}

export default Landing;