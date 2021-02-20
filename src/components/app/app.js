import React from 'react';
import Header from '../header';
import NewsItems from '../newsItems';
import Footer from '../footer';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header categories = {['Category 1', 'Category 2', 'Category 3']} />
      <NewsItems/>
      <Footer/>
    </div>
  );
}

export default App;
