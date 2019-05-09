import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import './css.scss';

const RenderApp = hot(App);
const root = document.getElementById('root');

ReactDOM.render(<RenderApp />, root);
