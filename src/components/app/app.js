import React, { useState } from 'react';
import {Header} from '../header';
import {NewsItems} from '../news-items';
import {Footer} from '../footer';
import {SciencePage, SportsPage, TechnologyPage} from '../pages';
import {ItemDetails} from '../item-details';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routes} from '../constants';
import {ThemeContext, themes} from '../theme';
import style from './App.module.css';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => theme === themes.dark 
  ? setTheme(themes.light)
  : setTheme(themes.dark);

  return (
    <ThemeContext.Provider value={theme}>
    <Router>
      <div className={style.app}>
        <button onClick={toggleTheme}>CHANGE</button>
        <Header/>
        <Route path={routes.root} exact component={NewsItems}/>
        <Route path={routes.technology} component={TechnologyPage}/>
        <Route path={routes.sports} component={SportsPage}/>
        <Route path={routes.science} component={SciencePage}/>
        <Route path="/item-details/:id" component={ItemDetails}/>
        <Footer/>
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export {App};
