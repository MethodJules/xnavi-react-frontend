import React from 'react';
import Header from './components/organism/Header/Header';
import Search from './components/organism/MorphSearch/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SideBar from './components/organism/SideBar/SideBar';
import NewsFeed from './components/organism/NewsFeed/NewsFeed'
import Landing from './components/pages/Landing';
import Download from './components/pages/Logodownload';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logodownload from './components/pages/Logodownload';
import Flyerdownload from './components/pages/Flyerdownload';
import Previewartikel from './components/pages/Previewartikel';
import Praesentationen from './components/pages/Praesentationen';
import Programm from './components/pages/Programm';
import Marktplatz from './components/pages/Marktplatz';
import './index.css';


const App = () => {
  return (

    <Router>
    

    <div>
      <Switch>

        <Route path="/landing">
        <Landing></Landing>
        </Route>

        <Route path="/download">
          <Logodownload></Logodownload>
        </Route>

        <Route path="/flyer-download">
          <Flyerdownload></Flyerdownload>
        </Route>

        <Route path="/preview-artikel">
          <Previewartikel></Previewartikel>
        </Route>

        <Route path="/praesentationen">
          <Praesentationen></Praesentationen>
        </Route>

        <Route path="/programm-0">
          <Programm></Programm>
        </Route>

        <Route path="/marktplatz">
          <Marktplatz></Marktplatz>
        </Route>

        <Route path="">
        <Landing></Landing>
        </Route>

      </Switch>
    </div>
    </Router>

    


    
    


    
    
  )
}

export default App;
