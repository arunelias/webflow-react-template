import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './webflow/webflow.css';
import WebflowComponent from './containers/webflowExample/';

render(
  <WebflowComponent name="toby" />,
  document.getElementById('app')
);
