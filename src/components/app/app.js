import React from 'react';
import {Header} from '../header';
import {NewsList} from '../news-list';
import {FilterList} from '../filter-list';
/* import {ItemDetails} from '../item-details'; */
import {Footer} from '../footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {routes} from '../constants';
import style from './App.module.css';

export function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className={style.app}>
          <Header/> 
          <Route path={routes.root} exact render={()=><NewsList category={''}/>}/>
          <Route path={routes.technology} render={()=><NewsList category={'technology'}/>}/>
          <Route path={routes.sports} render={()=><NewsList category={'sports'}/>}/>
          <Route path={routes.science} render={()=><NewsList category={'science'}/>}/>

          <Route path={routes.filterList} render={()=><FilterList category={''}/>}/>

          {/* <Route path={routes.itemDetails} component={ItemDetails}/> */}
          <Footer/>
        </div>
      </Router>
    </Provider>
    
  );
}