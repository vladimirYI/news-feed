import React from 'react';
import Header from '../header';
import NewsItems from '../newsItems';
import Footer from '../footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import style from './App.module.css';

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Header categories = {['Category 1', 'Category 2', 'Category 3']} />
        <Route path='/' exact component={() => <h2>Welcome to News-Feed</h2>}/>
        <Route path='/news' component={NewsItems}/>
        <Route path='/news' component={Footer}/>
      </div>
    </Router>
  );
}

export default App;
