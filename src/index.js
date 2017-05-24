import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './css/my.css';

import Topmenu from './view/Topmenu';
import Postlist from './view/Postlist';
import Experiment from './view/Experiment';

import Now from './view/Now';

ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={Topmenu}>
        <Route path="/posts" component={Postlist} />
        <Route path="/experiment" component={Experiment} />
      </Route>
      <Route path="/now/:id" component={Now} />
  </Router>
),document.getElementById('root'));
