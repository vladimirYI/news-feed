import React from 'react';
import {Header} from '../header';
import {NewsList} from '../news-list';
import {Footer} from '../footer';
import {SciencePage, SportsPage, TechnologyPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {routes} from '../constants';
import style from './App.module.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className={style.app}>
          <Header/>
          <Route path={routes.root} exact component={NewsList}/>
          <Route path={routes.technology} component={TechnologyPage}/>
          <Route path={routes.sports} component={SportsPage}/>
          <Route path={routes.science} component={SciencePage}/>
          <Footer/>
        </div>
      </Router>
    </Provider>
    
  );
}

export {App};
