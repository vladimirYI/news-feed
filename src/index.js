import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app';
import {createStore} from 'redux';
import {rootReducer} from './components/redux/rootReducer';
import {Provider} from './react-redux';
import './index.css';

const store = createStore(rootReducer)


ReactDOM.render(<App/>, document.getElementById('root'));


