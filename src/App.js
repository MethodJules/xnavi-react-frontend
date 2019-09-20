import React from 'react';
import Header from './components/organism/Header/Header';
import Search from './components/organism/MorphSearch/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SideBar from './components/organism/SideBar/SideBar';
import NewsFeed from './components/organism/NewsFeed/NewsFeed'

const App = () => {
  return (

    <div>
      <header class="header">
        <Header></Header>
      </header>
      <div class="wrapper">

        <article class="main">

          <Jumbotron fluid className="jumbo">
              <Container className="inhalt">
                
              </Container>
          </Jumbotron>  
          
        </article>

        <aside class="aside aside-1">
          <Search></Search>
        </aside>
        
        <aside class="aside aside-2">
          <SideBar></SideBar>
        </aside>
        
      </div>
    </div>
    


    
    
  )
}

export default App;
