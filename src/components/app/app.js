import React from 'react';
import Header from '../header';
import NewsItems from '../newsItems';
import Footer from '../footer';
import {SciencePage, SportsPage, TechnologyPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import style from './App.module.css';

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Header/>
        <Route path='/' exact component={NewsItems}/>
        <Route path='/technology' component={TechnologyPage}/>
        <Route path='/sports' component={SportsPage}/>
        <Route path='/science' component={SciencePage}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
