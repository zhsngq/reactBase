import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './css/pure.css';
import './css/my.css';

import Topmenu from './view/Topmenu';
import Postlist from './view/Postlist';

ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={Topmenu}>
        <Route path="/posts" component={Postlist} />
      </Route>
  </Router>
),document.getElementById('root'));
