import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { productArray } from './ProductArray'

ReactDOM.render(
  <React.StrictMode>
    <Routes productArray = {productArray} />
  </React.StrictMode>,
  document.getElementById('root')
);
